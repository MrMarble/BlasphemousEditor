import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CellData from "../../assets/GameData/CellData.json";
const CellComponent = styled.div.attrs((props) => ({
  style: {
    width: `${props.size}px`,
    height: `${props.size}px`,
    bottom: `${props.top * props.size - props.size * 16}px`,
    left: `${props.left * props.size - props.size * 5}px`,
    lineHeight: `${props.size}px`,
    backgroundColor: `${props.color}`,
  },
}))`
  position: absolute;
  font-size: 6px;
  text-align: center;
  vertical-align: center;
`;

export function Cell({ size = 20, top = 0, left = 0 }) {
  const distrito = CellData[`${left}_${top}`];
  return (
    <CellComponent
      size={size}
      top={top}
      left={left}
      color={distrito.Color}
    ></CellComponent>
  );
}

Cell.propTypes = {
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
};
