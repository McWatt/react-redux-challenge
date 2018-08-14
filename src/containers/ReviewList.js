import React, { Component } from 'react';
import Review from '../components/ReviewListItem';
import { connect } from 'react-redux';
import Button from '../components/Button';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { getDoctorReviews } from '../selectors';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledReviews = styled.div`
    flex-grow: 1;
`;

const StyledAction = styled.div`
    flex-grow: 1;
    flex-shrink: 0;
    padding-top: 2rem;
`;

class ReviewList extends Component {
    render() {
        const reviews = this.props.reviews.map(((review, index) => (
            <Review doctorId={this.props.doctorId} key={index} review={review} />
        )));
        return (
            <StyledContainer>
                <StyledReviews>
                    {reviews}
                </StyledReviews>
                <StyledAction>
                    <Button onClick={() => { this.props.history.replace(`/doctor/${this.props.doctorId}/review/`) }} primary large next>
                        Leave review
                    </Button>
                </StyledAction>
            </StyledContainer>
        )
    }
}

function mapStateToProps(state, props) {
    const doctorId = props.match.params.id;

    return {
        doctorId,
        reviews: getDoctorReviews(state, props.match.params.id)
    };
}

export default withRouter(connect(mapStateToProps)(ReviewList))
