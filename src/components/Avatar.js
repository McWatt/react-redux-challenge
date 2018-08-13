import React, { Component } from 'react';
import styled, {css} from 'styled-components';

const StyledAvatar = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: grey;
    flex: 0 0 60px;
    background: blue url('${props => props.url}') 50% 50%;

    ${props => props.large && css`
        width: 80px;
        height: 80px;
        flex: 0 0 80px;
    `}
`;

export default (props) => {
    const url = props.url ? props.url : 'http://placeholder.pics/svg/100x100/392FFF-FF7E93/FFFFFF/:)';

    return (
        <StyledAvatar large={props.large} url={url} />
    );
};