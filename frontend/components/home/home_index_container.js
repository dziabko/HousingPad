import { connect } from 'react-redux';
import HomeIndex from './home_index.jsx';
import { getRecommendationCall, fetchHome } from '../../actions/home_actions';

const mapStateToProps = (state, ownProps) => {
    console.log('TESTING CONTAINER')
    return ({
        homes: Object.values(state.entities.homes)
    });
    
    // homessss: state.entities.homes[parseInt(ownProps["ownProps"].match.params.homeId)]
};

const mapDispatchToProps = (dispatch) => {
    // fetchHomes: () => dispatch(getRecommendationCall())
    return {
        fetchHome: id => dispatch(fetchHome(id)),
        // fetchHomes: () => dispatch(getRecommendationCall())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeIndex);