jest.mock("js-yaml");
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Map } from "./Map";
import yaml from "js-yaml";

beforeAll(() => {
  yaml.load.mockReturnValue({
    TextureImporter: { spriteSheet: { sprites: [] } },
  });
});
test("Map is rendered", () => {
  render(<Map />);
  expect(screen.getByTestId("map")).toBeTruthy();
});

test("Map draws cell", () => {
  const rooms = [
    {
      X: 19,
      Y: 27,
    },
  ];
  render(<Map rooms={rooms} />);
  expect(screen.getByTestId("map").childElementCount).toEqual(1);
});
