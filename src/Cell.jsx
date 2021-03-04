import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const Cell = styled.div`
    width: 20px;
    height: 20px;
    position: absolute;
    top: ${props => `${props.top}px`};
    left: ${props => `${props.left}px`};
`;

Cell.propTypes = {
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired
}