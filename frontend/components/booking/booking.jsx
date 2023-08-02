import React, { useMemo, useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useElements,
  useStripe
} from '@stripe/react-stripe-js';

class Booking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newReservation: [],
            num_days: 0
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount() {
    //     const input = document.getElementById('autocomplete1');
    //     searchBox.addListener('places_changed', () => this.handleSubmit());
    // }

    // handleSubmit(e) {
    //     this.props.history.push('/search');
    // }

    // update(field) {
    //     return (e) => {
    //         this.setState({ [field]: e.target.value });
    //     };
    // }
    componentDidUpdate() {
        this.calculateDayDiff
        console.log("NEW DAYS")
        console.log(this.state)
    }
    calculateDayDiff() {
        const date1 = new Date(this.props.newReservation.check_in_date);
        const date2 = new Date(this.props.newReservation.check_out_date);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
        // this.setState({num_days: diffDays})

    }

    render() {
        if (!this.props.newReservation) return null;

        let { newReservation } = this.props;
        return (
            <div>
                <div className="home-show-content">
                    <div className="home-show-left">
                        <div className="home-show-details">
                                    {/* <div className="home-show-title">
                                        {home.name}
                                    </div> */}
                                    <div className="home-show-title">
                                        Request to book
                                    </div>
                        </div>
                        <div className="home-show-details">
                            <div className="quick-info">
                                <div className="name-city-left">
                                    <div className="home-show-title">
                                        Your Rental
                                    </div>
                                    <div className="home-show-dates-container">
                                        <div className="home-show-city">
                                            Dates
                                        </div>
                                        <div>
                                        {newReservation.check_in_date} - {newReservation.check_out_date}
                                        </div>
                                    </div>
                                    <div className="home-show-dates-container">
                                        <div className="home-show-city">
                                            Guests
                                        </div>
                                        <div>
                                            {newReservation.num_guests} guest
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="payment-show-container">
                            <div className="payment-details-title">Pay with</div>
                            {/* <input className="payment-credit-card"></input> */}
                            <Elements stripe={stripePromise}>
                                <CheckoutForm />
                            </Elements>
                        </div>
                    </div>
                    <div className="home-show-right">
                        <div className="reservation-container">
                            <img className="home-index-photo" src="https://a0.muscache.com/im/pictures/497ef5ea-1eb5-4b56-b3b2-9be263622c47.jpg?aki_policy=large" />  
                            <div className="price-details-container">
                                <div className="title">
                                    Price Details
                                </div>
                                <div className="price">
                                    <div className="price-container2">
                                        <div>
                                            ${this.props.home.price} x {this.calculateDayDiff()} nights
                                        </div>
                                        <div>
                                            ${this.props.home.price * this.calculateDayDiff()}
                                        </div>
                                    </div>
                                    <div className="price-container2">
                                        <div>
                                            Service Fee
                                        </div>
                                        <div>
                                            $50
                                        </div>
                                    </div>
                                    <div className="price-container2">
                                        <div>
                                            Total (CAD)
                                        </div>
                                        <div>
                                            ${this.props.home.price * this.calculateDayDiff() + 50}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cancellation-policy">
                                Free cancellation for 48 hours
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Booking;



// Setup Stripe.js and the Elements provider
const stripePromise = loadStripe('pk_test_51I0cWMIsxu03A2vIFSOxT50IH7V9x5IWdiQejeCt92xVpcqTcgOSEGtGuwZ02DyXKVqojzrkUWAsjRLy6LnKpkOv00nSMwrBN6');

// Custom styling can be passed to options when creating an Element.
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  }
};

const CheckoutForm = () => {
  const [error, setError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  // Handle real-time validation errors from the card Element.
  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  }

  // Handle form submission.
  const handleSubmit = (event) => {
    event.preventDefault();
    const card = elements.getElement(CardElement);
    const result = stripe.createToken(card);
    if (result.error) {
      // Inform the user if there was an error.
      setError(result.error.message);
    } else {
      setError(null);
      // Send the token to your server.
      stripeTokenHandler(result.token);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <label for="card-element">
          Credit or debit card
        </label>
        <CardElement
          id="card-element"
          options={CARD_ELEMENT_OPTIONS}
          onChange={handleChange}
        />
        <div className="card-errors" role="alert">{error}</div>
      </div>
      <button className="payment-submit-button" type="submit">Request to book</button>
    </form>
  );
}
  