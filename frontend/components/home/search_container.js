import { connect } from 'react-redux';
import {fetchHomes} from '../../actions/home_actions';
import { updateFilter } from '../../actions/filter_actions';
import Search from './search';

const mapStateToProps = (state) => ({
    // homes: Object.values(state.entities.homes),
    // center: { lat: state.params.lat, lng: state.params.lat },
});

export default connect(mapStateToProps)(Search);