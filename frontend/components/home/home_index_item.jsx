import React from 'react';
import { withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import Snackbar from "@material-ui/core/Snackbar";
import {homepreferences} from '../../util/home_api_utli';
import {getCurrentUser} from '../../util/home_api_utli';
import MuiAlert from '@material-ui/lab/Alert';

class HomeIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: 0,
            open: false,
            disabled : false,
            isliked: 0.0
        };
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    handleClick = () => () => {
        console.log('test')
        
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({open: false});
    };

    componentDidMount(){
        getCurrentUser().then(response => {
            console.log(response);
            this.setState({
                userid: response.id
            })
          })
          console.log(this.props)
    }

    updateHomePreferences = () => {
        console.log(this.state);
        console.log(this.props);

        const homepreference = {
            user_id: this.state.userid,
            home_id: this.props.home.id,
            is_liked: this.state.isliked
        }
        homepreferences(homepreference)
    }



    handleSubmit = (event, button) => {
        console.log(button)
        
        this.setState({open: true});

        if (this.state.disabled) {
            return;
        }
        this.setState({disabled: true});
       

        if (button) {
            this.setState({isliked: 5.0}, this.updateHomePreferences);
        } else {
            this.setState({isliked: 1.0}, this.updateHomePreferences);
        }

        console.log(this.state.userid)
        console.log(this.props)
        console.log(this.state.open)
        console.log(this.state.isliked)

     
    }

    computedSafetyScoreStyle = (safety_score) => {
        if (safety_score < 30) {
            return "safety-score-bad"
        } else if (safety_score < 70) {
            return "safety-score-ok"
        } else {
            return "safety-score-great"
        }
    }

    render() {
        let { home, recommendation } = this.props;
        let textDecor = true;
        let safetyScoreClass = this.computedSafetyScoreStyle(parseInt(home.safety_score * 100));
        
        const {vertical, horizontal, open} = this.state;

        return (
            <div>
                
                <div className="home-index-item" onClick={() => this.props.history.push(`/homes/${home.id}`)}>
                    <div className="home-index-photo-container">
                        <img className="home-index-photo" src={home.image} />
                    </div>
                    <div className="home-index-details">
                        <div className="home-index-rooms">
                            {home.num_rooms} ROOMS
                        </div>
                        <div className="home-index-name">
                            <h1>{home.name} </h1>
                        </div>
                        <div className="home-index-price">
                            ${home.price} per night
                        </div>
                        <div className="stars">
                            <i className="fas fa-star fa-xs"></i>
                            <i className="fas fa-star fa-xs"></i>
                            <i className="fas fa-star fa-xs"></i>
                            <i className="fas fa-star fa-xs"></i>
                            <i className="fas fa-star fa-xs"></i>
                        </div>

                        <div className="home-index-safety-score">
                            <text>Safety Score: </text>
                            <text className={safetyScoreClass}>{parseInt(home.safety_score * 100)}</text>
                        </div>
                    
                    </div>
                </div>
                <div>
                    <hr />
                    <Button variant="outlined" id="Hlp" onClick={(e) => this.handleSubmit(e, true)} disabled={this.state.disabled}>
                        Like the home
                    </Button>
                    <Button variant="outlined" id="H2p" onClick={(e) => this.handleSubmit(e, false)} disabled={this.state.disabled}>
                        Dislike the home
                    </Button>
                    <Snackbar open={this.state.open} autoHideDuration={6000} onClose={(e) => this.handleClose(e)}>
                        <this.Alert onClose={(e) => this.handleClose(e)} severity="success">
                            {this.state.isliked == 5.0 ? "You have liked the home" : "You have disliked the home"} 
                        </this.Alert>
                    </Snackbar>
                </div>
            </div>
        );
    }
}

export default withRouter(HomeIndexItem);