import React from 'react';
import { withRouter } from 'react-router';
import Geocode from "react-geocode";
import { fetchCoords } from '../../util/home_api_utli';

Geocode.setApiKey(process.env.api_key);

class Homepage extends React.Component {
    constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
    }

    componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
        {"types": ["geocode"]});

    this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
    }
    
    handlePlaceChanged(){
        this.getCoord()
    }

    handleKeyDown = function (e, cb) {
        if (e.key === 'Enter' && e.shiftKey === false) {
          e.preventDefault();
          cb();
        }
      };

    getCoord(){
        var cityStr = this.autocomplete.getPlace().formatted_address;
        // var cityNameArr = cityStr.split(',');
        // var city = cityNameArr[0];
        var latitude = 0;
        var longitude = 0;
        
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${cityStr}&key=${process.env.api_key}`, {
            "method": "GET",
        })
        .then(response => response.json())
        .then(response => {
            latitude = response.results[0].geometry.location.lat;
            longitude = response.results[0].geometry.location.lng;
            var coord = {lat: latitude, lng: longitude};
            this.setState({params: coord});

            this.props.history.push({
                pathname: '/search',
                state: {
                  params: coord,
                }
              })

              

            // this.props.history.push('/search');
        })
        .catch(err => console.log(err))

    }
    render() {
        return (
            <div className="home-page">
                <div className="home-searchbar">
                    <div className="search-slogan">
                        <h1>Find your home away from home</h1>
                        <h1>during your internship</h1>
                    </div>
                    
                    <div className="search-container">
                        <form onSubmit={this.handleSubmit}
                            onKeyDown={(e) => { this.handleKeyDown(e, this.handleSubmit); }}
                        >
                            <input ref={this.autocompleteInput}  
                                id="autocomplete1" 
                                placeholder="Enter your address"
                                type="text">
                            </input>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Homepage);