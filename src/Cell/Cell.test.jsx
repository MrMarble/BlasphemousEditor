jest.mock("js-yaml");

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import yaml from "js-yaml";
import { Cell } from "./Cell";
import { MAX_Y } from "../utils/constants";

beforeAll(() => {
  yaml.load.mockReturnValue({
    TextureImporter: { spriteSheet: { sprites: [] } },
  });
});

test("Cell has style", () => {
  render(<Cell />);
  expect(screen.getByTestId("cell")).toHaveAttribute("style");
});

test("Cell use size provied", () => {
  const size = 20;
  render(<Cell size={size} />);
  expect(screen.getByTestId("cell")).toHaveStyle(
    `width: ${size}px; height: ${size}px`
  );
});

test("Cell has color", () => {
  const size = 20;
  render(<Cell size={size} />);
  expect(screen.getByTestId("cell")).toHaveStyle(`background-color: #51ccb1`);
});

test("Cell position is correct", () => {
  const size = 20;
  const [x, y] = [3, 5];
  render(<Cell size={size} X={x} Y={y} />);
  expect(screen.getByTestId("cell")).toHaveStyle({
    backgroundColor: "#51ccb1",
    left: `${x * size}px`,
    top: `${(MAX_Y - y) * size}px`,
  });
});
