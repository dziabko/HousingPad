import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "", first_name: "", last_name: "", safety_score: 1, food_score: 1, transit_score: 1, clean_score: 1 };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate() {
        this.redirectIfLoggedIn();
    }

    redirectIfLoggedIn() {
        if (this.props.loggedIn) {
            this.props.history.push("/");
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = this.state;
        this.props.processForm(user).then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <section className="login-form-container">
                <div className="login-form-content">
                    <div className="close-x">
                        <button className="x-button" onClick={this.props.closeModal}>
                            <svg viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false">
                                <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <section>
                        <div>
                            <div>
                                <form onSubmit={this.handleSubmit} className="login-form-box">
                                    <br /> {this.renderErrors()}
                                    <div className="login-form">
                                        <div className="input-container">
                                            <div className="input-container-2">
                                                <div className="input-icon">
                                                    <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                                                        <path d="m22.5 4h-21c-.83 0-1.5.67-1.5 1.51v12.99c0 .83.67 1.5 1.5 1.5h20.99a1.5 1.5 0 0 0 1.51-1.51v-12.98c0-.84-.67-1.51-1.5-1.51zm.5 14.2-6.14-7.91 6.14-4.66v12.58zm-.83-13.2-9.69 7.36c-.26.2-.72.2-.98 0l-9.67-7.36h20.35zm-21.17.63 6.14 4.67-6.14 7.88zm.63 13.37 6.3-8.1 2.97 2.26c.62.47 1.57.47 2.19 0l2.97-2.26 6.29 8.1z" fillRule="evenodd">
                                                        </path>
                                                    </svg>
                                                </div>
                                                <div className="form-input">
                                                    <input required type="email" placeholder="Email address" value={this.state.email} onChange={this.update("email")} className="login-input" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-container">
                                            <div className="input-container-2">
                                                <div className="input-icon">
                                                    <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" ><path d="m14.76 11.38a6.01 6.01 0 0 0 3.28-5.36 6.02 6.02 0 0 0 -12.04 0 6.01 6.01 0 0 0 3.27 5.35c-4.81 1.22-9.27 5.31-9.27 8.7 0 1.56 6.8 3.93 12 3.93 5.23 0 12-2.34 12-3.93 0-3.39-4.45-7.47-9.24-8.7zm-7.76-5.36a5.02 5.02 0 0 1 10.04 0c0 2.69-2.12 4.87-4.78 5-.09 0-.18-.01-.26-.01s-.16.01-.24.01c-2.65-.14-4.76-2.32-4.76-5zm15.9 14.09a3.8 3.8 0 0 1 -.64.44c-.62.36-1.5.75-2.52 1.1-2.41.83-5.18 1.35-7.74 1.35-2.55 0-5.32-.52-7.74-1.37-1.01-.35-1.9-.74-2.52-1.1-.47-.27-.74-.51-.74-.46 0-3.35 5.55-7.85 10.64-8.05.13.01.25.02.38.02.12 0 .24-.01.36-.02 5.09.22 10.62 4.71 10.62 8.05 0-.07-.02-.04-.1.04z" fillRule="evenodd"></path></svg>
                                                </div>
                                                <div className="form-input">
                                                    <input required type="text" placeholder="First name" value={this.state.first_name} onChange={this.update("first_name")} className="login-input" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-container">
                                            <div className="input-container-2">
                                                <div className="input-icon">
                                                    <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" ><path d="m14.76 11.38a6.01 6.01 0 0 0 3.28-5.36 6.02 6.02 0 0 0 -12.04 0 6.01 6.01 0 0 0 3.27 5.35c-4.81 1.22-9.27 5.31-9.27 8.7 0 1.56 6.8 3.93 12 3.93 5.23 0 12-2.34 12-3.93 0-3.39-4.45-7.47-9.24-8.7zm-7.76-5.36a5.02 5.02 0 0 1 10.04 0c0 2.69-2.12 4.87-4.78 5-.09 0-.18-.01-.26-.01s-.16.01-.24.01c-2.65-.14-4.76-2.32-4.76-5zm15.9 14.09a3.8 3.8 0 0 1 -.64.44c-.62.36-1.5.75-2.52 1.1-2.41.83-5.18 1.35-7.74 1.35-2.55 0-5.32-.52-7.74-1.37-1.01-.35-1.9-.74-2.52-1.1-.47-.27-.74-.51-.74-.46 0-3.35 5.55-7.85 10.64-8.05.13.01.25.02.38.02.12 0 .24-.01.36-.02 5.09.22 10.62 4.71 10.62 8.05 0-.07-.02-.04-.1.04z" fillRule="evenodd"></path></svg>
                                                </div>
                                                <div className="form-input">
                                                    <input required type="text" placeholder="Last name" value={this.state.last_name} onChange={this.update("last_name")} className="login-input" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-container">
                                            <div className="input-container-2">
                                                <div className="input-icon">
                                                    <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="m19.5 9h-.5v-2a7 7 0 1 0 -14 0v2h-.5c-.78 0-1.5.72-1.5 1.5v12c0 .78.72 1.5 1.5 1.5h15c .78 0 1.5-.72 1.5-1.5v-12c0-.78-.72-1.5-1.5-1.5zm.5 13.5c0 .22-.28.5-.5.5h-15c-.22 0-.5-.28-.5-.5v-12c0-.22.28-.5.5-.5h1a .5.5 0 0 0 .5-.5v-2.5a6 6 0 1 1 12 0v2.5a.5.5 0 0 0 .5.5h1c .22 0 .5.28.5.5zm-8-10.5a3 3 0 0 0 -3 3c0 .83.36 1.59.94 2.15l-.9 2.16a.5.5 0 0 0 .46.69h5a .5.5 0 0 0 .46-.69l-.87-2.19c.56-.55.91-1.31.91-2.13a3 3 0 0 0 -3-3zm1.04 5.19.72 1.81h-3.51l.74-1.79a.5.5 0 0 0 -.17-.6 2 2 0 1 1 3.18-1.61c0 .64-.31 1.24-.8 1.6a.5.5 0 0 0 -.17.59zm-1.04-14.19a4 4 0 0 0 -4 4v2.5a.5.5 0 0 0 .5.5h7a .5.5 0 0 0 .5-.5v-2.5a4 4 0 0 0 -4-4zm3 6h-6v-2a3 3 0 1 1 6 0z" fillRule="evenodd"></path></svg>
                                                </div>
                                                <div className="form-input">
                                                    <input required type="password" placeholder="Create a Password" value={this.state.password} onChange={this.update("password")} className="login-input" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-container">
                                            <div className="input-container-2">
                                                <div className="form-input">
                                                    <label for="safety_score">Safety score? (between 1 and 10):</label>
                                                    <input required type="number" id="safety_score" value={this.state.safety_score} onChange={this.update("safety_score")} className="login-input" min="1" max="10"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-container">
                                            <div className="input-container-2">
                                                <div className="form-input">
                                                    <label for="food_score">Food score? (between 1 and 10):</label>
                                                    <input required type="number" id="food_score" value={this.state.food_score} onChange={this.update("food_score")} className="login-input" min="1" max="10" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-container">
                                            <div className="input-container-2">
                                                <div className="form-input">
                                                    <label for="transit_score">Transit score? (between 1 and 10):</label>
                                                    <input required type="number" id="transit_score" value={this.state.transit_score} onChange={this.update("transit_score")} className="login-input" min="1" max="10" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-container">
                                            <div className="input-container-2">
                                                <div className="form-input">
                                                    <label for="clean_score">Cleanliness score? (between 1 and 10):</label>
                                                    <input required type="number" id="clean_score" value={this.state.clean_score} onChange={this.update("clean_score")} className="login-input" min="1" max="10" />
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <button type="submit" disabled={!(this.state.email !== "" && this.state.password !== "" && this.state.first_name !== "" && this.state.last_name !== "")}>
                                            <span className="button-text">
                                                Sign up
                                            </span>
                                        </button>
                                    </div>
                                    <div className="line-container">
                                        <div className="line"></div>
                                    </div>
                                    <div className='redirect'>
                                        <span>Already have an Housingpad account? </span>
                                        <span>
                                            <a onClick={() => this.props.otherForm()}> Log in
                                </a>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        );
    }

}

export default withRouter(SignupForm);