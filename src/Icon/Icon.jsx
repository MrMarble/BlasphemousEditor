import React from "react";
import styled from "styled-components";
import spritesheet from "../../assets/img/map-spritesheet.png";
import { getIconSprite } from "../utils/helpers";

const IconComponent = styled.span.attrs((props) => ({
  style: {
    backgroundPositionX: `${props.sprite ? props.sprite[0] : 0}px`,
    backgroundPositionY: `${props.sprite ? props.sprite[1] : 0}px`,
  },
}))`
  background-image: ${`url(${spritesheet})`};
  background-repeat: no-repeat;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export function Icon({ type }) {
  return <IconComponent sprite={getIconSprite(type)} />;
}
