import React from 'react';
import NavContainer from './nav/nav_container';
import { Switch, Route } from 'react-router-dom';
import HomepageContainer from './homepage/homepage_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SearchContainer from './home/search_container';
import HomeShowContainer from './home/home_show_container';
import HomeBookContainer from './booking/booking_container';
import UserShowContainer from './user/user_show_container';
import HomeIndexContainer from './home/home_index_container';
import BecomeAHost from './becomehost/becomehost';
import Modal from './modal/modal';
import Account from './profile/index';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const Home = ({ children }) => (
  <div className="home">
    <NavContainer />
    <HomepageContainer />
    
  </div>
);

const Search = ({ children }) => (
  <div className="search">
    <NavContainer />
    
    <SearchContainer />
  </div>
);

const Show = (ownProps) => (
  <div className="show">
    <NavContainer />
    <HomeShowContainer ownProps={ownProps} />
  </div>
);
const HomeBook = (ownProps) => (
  <div className="show">
    <NavContainer/>
    <HomeBookContainer ownProps={ownProps} />
  </div>
);

const UserShow = (ownProps) => (
  <div className="show">
    <NavContainer/>
    <Account />
  </div>
);

const hostList = (ownProps) => (
  <div className="show">
    <NavContainer/>
    <BecomeAHost />
  </div>
);

const App = ({ children }) => (
  <div>
    <Modal />
    <div className="home-page">
      <div>
        <Switch>
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/homes/:homeId" component={Show} />
          <Route exact path="/users/:userId" component={UserShow} />
          <ProtectedRoute exact path="/homes/book/:homeId" component={HomeBook} />
          <Route exact path="/host/:userId" component={hostList} />
          {/* <Route exact path="/homes/book/:homeId" component={HomeBook} /> */}
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  </div>
);

export default App;