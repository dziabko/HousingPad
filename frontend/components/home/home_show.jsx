import React from 'react';
import Map from './map';
import {withRouter} from 'react-router';
import ReviewListContainer from './review_list_container';

 class HomeShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num_guests: 1,
            check_in_date: "",
            check_out_date: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchHome(this.props.homeId);
    }

    handleSubmit(e) {
        e.preventDefault();
        const reservation = {
          num_guests: this.state.num_guests,
          check_in_date: this.state.check_in_date,
          check_out_date: this.state.check_out_date
        };
        
        reservation.guest_id = this.props.currentUser;
        reservation.home_id = this.props.homeId;

        this.props.createReservation(reservation);

        this.props.history.push(`book/${this.props.homeId}`);
        // hashHistory.push(`book/${this.props.homeId}`);


    }

    update(field) {
        return (e) => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render() {
        if (!this.props.home) return null;
        let { home, homeId, fetchHome } = this.props;
        const center = { lat: 37.76962, lng: -122.42205 };

        return (
            <div>
                <div className="home-show-photo-container">
                    <img className="home-show-photo" src={home.photoUrl}/>
                </div>
                <div className="home-show-content">
                    <div className="home-show-left">
                        <div className="home-show-details">
                            <div className="quick-info">
                                <div className="name-city-left">
                                    <div className="home-show-title">
                                        {home.name}
                                    </div>
                                    <div className="home-show-city">
                                        {home.city}
                                    </div>
                                </div>
                                <div className="host-photo-container">
                                    <div className="host-photo">
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="home-show-info">
                                <div>
                                    <span><i className="fas fa-users fa-xs"></i></span>
                                    <span> {home.max_guests} guests</span>
                                </div>
                                <div>
                                    <span><i className="fas fa-door-open fa-xs"></i></span>
                                    <span>{home.num_rooms} rooms</span>
                                </div>
                                <div>
                                    <span><i className="fas fa-bed fa-xs"></i></span>
                                    <span>{home.num_beds} beds</span>
                                </div>
                                <div>
                                    <span><i className="fas fa-bath fa-xs"></i></span>
                                    <span>{home.num_baths} baths</span>
                                </div>
                            </div>
                            <div className="home-show-description">
                                <div className="text">
                                    {home.description}
                                </div>
                                <div className="read-more">
                                    <span>Read more about the space </span>
                                    &nbsp;
                                    <i className="fas fa-angle-down"></i>
                                </div>
                                <div className="contact-host">
                                    <span>Contact host</span>
                                </div>
                            </div>
                        </div>
                        <div className="amenities-container">
                            <div className="label-container">
                                <div>
                                    <span>Amenities</span>
                                </div>
                            </div>
                            <div className="amenities">
                                <ul>
                                    <div className="list-container">
                                        <div className="icon-container">
                                            <i className="fas fa-wifi fa-xs"></i>
                                        </div>
                                        <li>Wifi</li>
                                    </div>
                                    <div className="list-container">
                                        <div className="icon-container">
                                            <i className="fas fa-utensils fa-xs"></i>
                                        </div>
                                        <li>Kitchen</li>
                                    </div>
                                    <div className="list-container">
                                        <div className="icon-container">
                                            <i className="fas fa-tshirt fa-xs"></i>
                                        </div>
                                        <li>Washer</li>
                                    </div>
                                </ul>
                            </div>
                            <div className="amenities">
                                <ul>
                                    <div className="list-container">
                                        <div className="icon-container">
                                            <i className="fas fa-car fa-xs"></i>
                                        </div>
                                        <li>Parking</li>
                                    </div>
                                    <div className="list-container">
                                        <div className="icon-container">
                                            <i className="fas fa-tv fa-xs"></i>
                                        </div>
                                        <li>TV</li>
                                    </div>
                                    <div className="list-container">
                                        <div className="icon-container">
                                            <i className="fas fa-thermometer-half fa-xs"></i>
                                        </div>
                                        <li>Heating</li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="reviews-container">
                            <div className="review-button-container">
                                <button onClick={() => this.props.openModal(['review', this.props.homeId])}>Leave a Review</button>
                            </div>
                            <ReviewListContainer homeId={this.props.homeId}/>
                        </div>
                        <div className="home-show-map">
                            <Map
                                show="true"
                                homes={[home]}
                                center={center}
                                homeId={homeId}
                                fetchHome={fetchHome}
                            />
                        </div>
                    </div>
                    <div className="home-show-right">
                        <div className="reservation-container">
                            <div className="price-container">
                                <div className="price">
                                    <div className="value">
                                        ${home.price}
                                    </div>
                                    <div className="word">
                                        &nbsp; per night
                                    </div>
                                </div>
                                <div className="stars">
                                    <i className="fas fa-star fa-xs"></i>
                                    <i className="fas fa-star fa-xs"></i>
                                    <i className="fas fa-star fa-xs"></i>
                                    <i className="fas fa-star fa-xs"></i>
                                    <i className="fas fa-star fa-xs"></i>
                                    <div className="review-count">
                                        &nbsp; 217
                                    </div>
                                </div>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="date-container">
                                    <div className="date-label">
                                        <div>
                                            <span>Dates</span>
                                        </div>
                                    </div>
                                    <div className="calendar-input">
                                        <input type="date" onChange={this.update("check_in_date")}/>
                                        <input type="date" onChange={this.update("check_out_date")}/>
                                    </div>
                                </div>
                                <div className="guest-container">
                                    <div className="guest-label">
                                        <div>
                                            <span>Guests</span>
                                        </div>
                                    </div>
                                    <div className="guest-input">
                                        <select onChange={this.update("num_guests")}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="button-container">
                                    <button type="submit">Book</button>
                                </div>
                            </form>
                            <div className="additional-info">
                                <span className="notice">You won't be charged yet</span>
                                <span className="disclaimer-1">This home is on people’s minds.</span>
                                <span className="disclaimer-2">It’s been viewed 500+ times in the past week.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
 }

 export default withRouter(HomeShow);