import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect, } from 'react-redux';
import Button from '../components/Button';
import { getReview } from '../selectors';
import Textarea from '../components/Textarea';
import Label from '../components/Label';
import Input from '../components/Input';
import {
    reviewsAdd,
    reviewsUpdate,
    reviewsRemove,
    doctorsRemoveReview,
    doctorsAddReview,
} from '../rootReducer';
import {withRouter} from 'react-router';
import styled from 'styled-components';

// TODO: refactor this css to be modular and reusable
const StyledFormContainer = styled.div`
    & > h2 {
        color: rgb(29,17,83)
    }

    & label {
        color: mediumaquamarine;
        position: relative;
        margin-bottom: 1em;
        display: block;

        > div {
            top: 12px;
            background-color: white;
            display: inline-block;
            padding-right: 60px;
            padding-left: 1rem;
            position: relative;
            z-index: 1;
            left: 1rem;
        }

        > textarea,
        input {
            padding-top: 1em;
        }
    }

`;

class AddReview extends Component {
    constructor(props) {
        super(props);

        // NOTE: needs a cleaner solution that doesn't need to be manually updated in two places every time a change is needed
        if (this.props.review) {
            const { content, userName } = this.props.review;
            this.state = {
                content: content,
                userName: userName,
                edit: true
            };
        } else {
            this.state = {
                content: '',
                userName: '',
                edit: false,
            }
        }
        
        this.handleAdd = this.handleAdd.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleReviewChange = this.handleReviewChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleAdd() {
        const fakeId = `qwert${Math.floor(Math.random() * 90000) + 10000}`;
        this.props.dispatch(
            reviewsAdd(this.state.userName, this.state.content, this.props.doctorId, fakeId)
        );

        this.props.dispatch(
            doctorsAddReview(this.props.doctorId, fakeId)
        );

        this.props.history.push(`/doctor/${this.props.doctorId}/`);
    }

    handleUpdate() {
        this.props.dispatch(
            reviewsUpdate(this.state.userName, this.state.content, this.props.review.id)
        );

        this.props.history.push(`/doctor/${this.props.doctorId}/`);

    }

    handleRemove() {
        this.props.dispatch(
            reviewsRemove(this.props.review.id)
        );

        this.props.dispatch(
            doctorsRemoveReview(this.props.review.doctorId, this.props.review.id)
        );

        this.props.history.push(`/doctor/${this.props.doctorId}/`);
    }

    handleReviewChange(event) {
        this.setState({
            content: event.target.value,
        });
    }

    handleNameChange(event) {
        this.setState({
            userName: event.target.value,
        });
    }

    render() {
        const reviewInvalid = this.state.content.length < 4;
        const userNameInvalid = this.state.userName.length < 4;
        const isValid = !reviewInvalid && !userNameInvalid;

        return (
            <StyledFormContainer>
                <h2>Provide your feedback</h2>
                <Label validationError={reviewInvalid}>
                    <div>Your review</div>
                    <Textarea  value={this.state.content} onChange={this.handleReviewChange} />
                </Label>
                <Label validationError={userNameInvalid}>
                    <div>Your display name</div>
                    <Input maxLength='12' onChange={this.handleNameChange} value={this.state.userName} />
                </Label>
                {this.state.edit ?
                    <div>
                        <Button onClick={this.handleRemove} danger large>Remove</Button>
                        <Button onClick={this.handleUpdate} large>Update</Button>
                    </div>
                    :
                    <Button disabled={!isValid} onClick={this.handleAdd} next large>Add Review</Button>
                }
            </StyledFormContainer>
        );
    }
}

AddReview.propTypes = {
    doctorId: PropTypes.string,
    review: PropTypes.shape({
        content: PropTypes.string,
        userName: PropTypes.string,
    })
}

function mapStateToProps(state, props) {
    const reviewId = props.match.params.reviewId;
    const doctorId = props.match.params.id;

    return {
        doctorId,
        review: !!reviewId ? getReview(state, reviewId) : null
    };
}

export default withRouter(connect(mapStateToProps)(AddReview));