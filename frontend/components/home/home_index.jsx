import React from 'react';
import HomeIndexItem from './home_index_item';
import RecommendationItem from './recommendation_item';
import {getRecommendationCall} from '../../actions/home_actions'
import { withRouter } from 'react-router';
import {getRecommendation} from "../../util/user_api_util";
import { connect } from "react-redux";

class HomeIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount(){
        // getRecommendation().then(response => {
        //     console.log(response);
        //     this.setState({data: response});
        // }) 
        console.log(this.props.homes[0])
        // this.props.dispatch(getRecommendationCall())
    }

    render() {
        let { homes } = this.props;
        const { data } = this.state;
       
        return (
            <div>
                {/* <h1 className="home-number"> {homes.length} homes </h1> */}
                <ul className="home-index-container">
                    
                    {homes.map(home => (
                        
                            <HomeIndexItem
                                key= {home.id}
                                home = {home}
                            />
  
                    ))}
                    
                    {/* {homes.map(home => (
                        data.map(recommendations => (
                            <HomeIndexItem
                                key={home.id}
                                home={home}
                                recommendation={recommendations}
                            />
                        ))
                       
                    ))} */}
                </ul>
            </div>
        );
    }
}

// const mapStateToProps = (state) => ({
//     homes: Object.values(state.entities.homes)
// });

//export default connect(mapStateToProps)(HomeIndex);
export default withRouter(HomeIndex);