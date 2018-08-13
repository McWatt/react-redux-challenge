import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import DoctorList from './containers/DoctorList';
import SearchBar from './containers/SearchBar';
import DoctorView from './containers/DoctorView';
import ReviewList from './containers/ReviewList';
import AddReview from './containers/AddReview';
import './components/GlobalStyles';
import {StyledBody, StyledContent, StyledHeader, StyledSidebar} from './layout/styles';

class App extends Component {
  render() {
    // const redirectPath = `/doctor/${Object.keys(this.props.doctors)[0]}`;
    return (
      <Router>
        <div>
          <StyledHeader>
            <SearchBar />
          </StyledHeader>
          <StyledBody>
            <StyledSidebar>
              <DoctorList />
            </StyledSidebar>
            <StyledContent>
              <Route exact path="/" render={() => (
                <Redirect to={`/doctor/${Object.keys(this.props.doctors)[0]}`} />
              )} />
              <Route path="/doctor/:id" component={DoctorView} />
              <Route exact path="/doctor/:id" component={ReviewList} />
              <Route exact path="/doctor/:id/review" component={AddReview} />
              <Route exact path="/doctor/:id/review/:reviewId" component={() => (<AddReview edit="true" />)} />
            </StyledContent>
          </StyledBody>

        </div>
      </Router>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    doctors: state.doctors
  }
}

export default connect(mapStateToProps)(App);