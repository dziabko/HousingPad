import { connect } from 'react-redux';
import { createReservation } from '../../actions/reservation_actions';
import Booking from './booking';

const mapStateToProps = (state, ownProps) => {
  console.log("PRINTING ENTITIES")
  console.log(state.entities)
  console.log("PRINTING LAST OBJECT VAL")
  console.log(Object.values(state.entities.reservations)[Object.values(state.entities.reservations).length - 1])

  return ({
    currentUser: state.session.id,
    homeId: parseInt(ownProps["ownProps"].match.params.homeId),
    home: state.entities.homes[parseInt(ownProps["ownProps"].match.params.homeId)],
    reservations: Object.values(state.entities.reservations),
    newReservation: Object.values(state.entities.reservations)[Object.values(state.entities.reservations).length - 1]
  });
};


const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Booking);