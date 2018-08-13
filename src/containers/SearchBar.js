import React, { Component } from 'react';
import Input from '../components/Input';
import styled from 'styled-components';
import Label from '../components/Label';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledLogo = styled.div`
    flex-base: 100px;
    font-size: 2rem;
    color: white;
    margin-right: 1rem;
`;

const StyledSearchContainer = styled.div`
    position: relative;
    width: 100%;
 
    &::after {
        content: '\\1F50D';
        position: absolute;
        top: 12px;
        left: 4px;
    }
`;

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.searchInput = React.createRef();
    }

    componentDidMount() {
        this.searchInput.current.focus();
    }
    render() {
        return (
            <StyledContainer>
                <StyledLogo>Doctors</StyledLogo>
                <StyledSearchContainer>
                    <Input
                        name="search"
                        icon="true"
                        placeholder="Search doctors by name"
                        innerRef={this.searchInput}
                    />
                </StyledSearchContainer>
            </StyledContainer>
        )
    }
}

export default SearchBar;