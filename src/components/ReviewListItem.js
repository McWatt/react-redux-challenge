import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledReview = styled.div`
    padding: 1rem;
    position: relative;
`;

const StyledEditButton = styled.div`
    padding: 1rem;
    font-size: 0.75rem;
    position: absolute;
    top: 0;
    right: 0;
`;

class ReviewListItem extends Component {
    render() {
        const {userName, timestamp, content} = this.props.review;
        const editPath = `/doctor/${this.props.doctorId}/review/${this.props.review.id}`;
        
        return (
            <StyledReview>
                <time>{timestamp}</time>
                <h2>{userName}</h2>
                <p>{content}</p>
                <StyledEditButton>
                    <Link to={editPath}>Edit</Link>
                </StyledEditButton>
            </StyledReview>
        );
    }
}

export default ReviewListItem;