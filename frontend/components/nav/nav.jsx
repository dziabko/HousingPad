import React from 'react';
import { withRouter } from 'react-router';
import logo from "../../images/housing_pad_logo.png";
import {getRecommendation} from "../../util/user_api_util";

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search_content: "blah"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        const app = this;
        const input = document.getElementById('autocomplete1');
        const searchBox = new google.maps.places.SearchBox(input);
        searchBox.addListener('places_changed', () => {
            app.setState({ search_content: document.getElementById("autocomplete1").value });
            this.handleSubmit();
        });
    }

    handleSubmit(e) {
        this.props.history.push('/search');
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    render() {
        const { openModal, currentUser, logout, login } = this.props;

        const sessionLinks = () => (
            <header className="nav-container">
                <nav className="navbar">
                    <div className="left-nav">
                        <a href="">
                            <img src={logo} alt="housingpad-logo" width="180" height="100"/>
                        </a>
                    </div>

                    <div className="right-nav">
                        <div className="nav-link-container">
                            <ul>
                                <li onClick={() => openModal(['signup'])}>
                                    <button>Sign up</button>
                                </li>
                                <li onClick={() => openModal(['login'])}>
                                    <button>Log in</button>
                                </li>
                                <li onClick={() => login({ email: "demo@demo.com", password: "123123" })}>
                                    <button>Demo User</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );

        const personalGreeting = () => (
            <header>
                <nav className="navbar">
                    <div className="left-nav">
                        <a href="">
                            <img src={logo} alt="housingpad-logo" width="180" height="100"/>
                        </a>
                    </div>
                    
                    <div className="right-nav">
                        <div className="nav-link-container">
                            <ul>
                                <li onClick={() => this.props.history.push(`/host/${currentUser}`)}>
                                  <button className="header-button">Host your home</button>                               
                                </li>
                                <li onClick={() => this.props.history.push(`/users/${currentUser}`)}>
                                  <button className="header-button">Profile</button>                               
                                </li>
                                <li onClick={() => logout()}>
                                    <button className="header-button">Log Out</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );


        return (
            currentUser ?
                personalGreeting(currentUser, logout) :
                sessionLinks()
        );
    }
}

export default withRouter(Nav);