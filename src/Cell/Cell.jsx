import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { MAX_Y } from "../utils/constants";
import spritesheet from "../../assets/img/map-spritesheet.png";
import { getMapSprite } from "../utils/helpers";
import { Icon } from "../Icon/Icon";
const CellComponent = styled.div.attrs((props) => ({
  style: {
    width: `${props.size}px`,
    height: `${props.size}px`,
    top: `${(MAX_Y - props.Y) * props.size}px`,
    left: `${props.X * props.size}px`,
    lineHeight: `${props.size}px`,
    backgroundPositionX: `${props.sprite ? props.sprite[0] : 0}px`,
    backgroundPositionY: `${props.sprite ? props.sprite[1] : 0}px`,
    backgroundColor: `${props.color}`,
  },
}))`
  position: absolute;
  font-size: 6px;
  text-align: center;
  background-image: ${(props) => props.sprite && `url(${spritesheet})`};
  background-repeat: no-repeat;
  background-blend-mode: lighten;
  filter: contrast(130%);
`;

export function Cell({
  size = 16,
  Y = 0,
  X = 0,
  color = "#51ccb1",
  sprite = "",
  type = "Normal",
}) {
  return (
    <CellComponent
      data-testid="cell"
      size={size}
      Y={Y}
      X={X}
      color={color}
      title={type}
      sprite={getMapSprite(sprite)}
    >
      {(() => {
        if (type !== "Normal") {
          return <Icon type={type} />;
        }
      })()}
    </CellComponent>
  );
}

Cell.propTypes = {
  Y: PropTypes.number,
  X: PropTypes.number,
  color: PropTypes.string,
  sprite: PropTypes.string,
  size: PropTypes.number,
};
