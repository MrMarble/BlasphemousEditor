import React from "react";
import styled from "styled-components";
import { Cell } from "../Cell/Cell";
const MapComponent = styled.div`
  position: relative;
  width: 2000px;
  height: 800px;
  background-color: beige;
`;

export function Map({ rooms }) {
  return (
    <MapComponent>
      {rooms.map((room, index) => {
        return <Cell top={room.Y} left={room.X} size={15} key={index}></Cell>;
      })}
    </MapComponent>
  );
}
