import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Cell } from "../Cell/Cell";
import CellData from "../../assets/GameData/CellData.json";

const MapComponent = styled.div`
  position: relative;
  width: 2000px;
  height: ${(props) => `${props.height}px`};
  background-color: #11100c;
`;

export function Map({ rooms = [] }) {
  const size = 35.5;
  const height = 65 * size;

  return (
    <MapComponent data-testid="map" height={height}>
      {rooms.map((room, index) => {
        const cellData = CellData[`${room.X}_${room.Y}`];
        return (
          <Cell
            key={index}
            Y={room.Y}
            X={room.X}
            size={size}
            color={cellData.Color}
            sprite={cellData.Sprite}
            type={cellData.Type}
          />
        );
      })}
    </MapComponent>
  );
}
