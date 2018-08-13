import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Avatar from '../components/Avatar';
import ReviewList from './ReviewList';
import { getDoctor } from '../selectors';

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid darkslategrey;
`;
const StyledAvatar = styled.div`
    flex: 0 0 50px;
    padding: .5rem;
`;
const StyledInfo = styled.div`
    flex-grow: 3;
    padding: .5rem;

    & > h2 {
        color: darkslategrey;
        font-size: 2rem;
        margin: 0;
    }
    & > p {
        color: mediumaquamarine;
        padding: .5em 0;
        margin: 0;
    }

`;
const StyledAddress = styled.div`
    flex-grow: 2;
    padding: .5rem;

    & > div:first-of-type {
        background-color: rgb(42,66,107);
        border-radius: 50%;
        width: 66px;
        height: 66px;
        color: white;
        font-size: 2.125em;
        text-align: center;
        line-height: 2;
        float: left;
        margin-right: 8px;
    }

    & > p:first-of-type {
        font-size: .875rem;
        text-transform: uppercase;
        margin: 0 0 .5rem;
    }

    & > p:last-of-type {
        color: mediumaquamarine;
        font-size: 1rem;
        margin: 0;
    }
`;

class DoctorView extends Component {
    render() {
        const { avatarUrl, name, type, reviewCount } = this.props.doctor;
        const { street, city, state, zip } = this.props.doctor.address;

        return (
            <React.Fragment>
                <StyledHeader>
                    <StyledAvatar>
                        <Avatar url={avatarUrl} large="true" />
                    </StyledAvatar>
                    <StyledInfo>
                        <h2>{name}</h2>
                        <p>{type}</p>
                        <footer>{reviewCount} reviews</footer>
                    </StyledInfo>
                    <StyledAddress>
                        <div>&#8680;</div>
                        <p>Address</p>
                        <p>
                            {street}<br />
                            {city}, {state} {zip}
                        </p>
                    </StyledAddress>
                </StyledHeader>
                <ReviewList />

                {/* <AddReview doctorId={this.props.doctor.id} /> */}
            </React.Fragment>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        doctor: getDoctor(state, props.match.params.id)
    };
}

export default connect(mapStateToProps)(DoctorView);