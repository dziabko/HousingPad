import React from 'react';
import HomeIndex from './home_index';
import Map from './map';
import { fetchCoords } from '../../util/home_api_utli';
import { withRouter, useHistory } from "react-router";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            center: { lat: 0, lng: 0}
        };

    }

    componentDidMount() {
        var params = { lat: this.props.location.state.params.lat, lng: this.props.location.state.params.lng }
        console.log(params)
        this.setState({center: params})
        fetchCoords(params).then(res => {
            console.log(res)
            var tmp = []
            for (var key in res) {
                tmp[parseInt(key)] = res[key];
            }

            this.setState({homes: tmp})
        })
        window.scrollTo(0, 0);
    }

    render() {
        let { center, updateFilter, fetchHomes} = this.props;

        if (!this.state.homes) {
            return null;
        }

        return (
            <div className="user-pane">
                <div className="left-half">
                    <HomeIndex 
                        homes={this.state.homes} 
                    />
                </div>
                <div className="right-half" >
                    <Map
                        homes={this.state.homes}
                        center={this.state.center}
                        //updateFilter={updateFilter}
                        //fetchHomes={fetchHomes}
                    />
                </div>
            </div>
        );
    }

}

export default withRouter(Search);