import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { MAX_Y } from "../utils/constants";
import spritesheet from "../../assets/img/map-spritesheet.png";
import { getSprite } from "../utils/helpers";
const CellComponent = styled.div.attrs((props) => ({
  style: {
    width: `${props.size}px`,
    height: `${props.size}px`,
    top: `${(MAX_Y - props.Y) * props.size}px`,
    left: `${props.X * props.size}px`,
    lineHeight: `${props.size}px`,
    backgroundPositionX: `${props.sprite ? props.sprite[0] : 0}px`,
    backgroundPositionY: `${props.sprite ? props.sprite[1] : 0}px`,
  },
}))`
  position: absolute;
  font-size: 6px;
  text-align: center;
  background-image: ${(props) => props.sprite && `url(${spritesheet})`};
  background-repeat: no-repeat;
  background-color: #1d1a0e;
`;

export function Cell({
  size = 16,
  Y = 0,
  X = 0,
  color = "#51ccb1",
  sprite = "",
}) {
  return (
    <CellComponent
      data-testid="cell"
      size={size}
      Y={Y}
      X={X}
      color={color}
      sprite={getSprite(sprite)}
    />
  );
}

Cell.propTypes = {
  Y: PropTypes.number,
  X: PropTypes.number,
  color: PropTypes.string,
  sprite: PropTypes.string,
  size: PropTypes.number,
};
