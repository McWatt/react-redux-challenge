import React, { Component } from "react";
import PropTypes from "prop-types";
import DoctorListItem from "../components/DoctorListItem";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class DoctorList extends Component {
  render() {
    const currentDoctorId = this.props.currentDoctorId;
    const doctors = this.props.doctors.map((doctor, index) => (
      <DoctorListItem
        key={index}
        doctor={doctor}
        currentDoctorId={currentDoctorId}
        isCurrent={currentDoctorId === doctor.id}
      />
    ));
    return <div>{doctors}</div>;
  }
}

DoctorList.propTypes = {
  currentDoctorId: PropTypes.string,
  doctors: PropTypes.arrayOf(function(propValue, key) {
    if (typeof key !== "number" || typeof propValue !== "object") {
      return new Error("doctors collection in DoctorList is malformed");
    }
  })
};

function mapStateToProps(state, props) {
  const currentDoctorId = props.location.pathname.split("/")[2]; // TODO: find a cleaner solution than parsing the pathname
  return {
    currentDoctorId,
    doctors: Object.values(state.doctors)
  };
}

export default withRouter(connect(mapStateToProps)(DoctorList));
