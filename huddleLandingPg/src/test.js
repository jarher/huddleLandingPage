import { render, screen } from "@testing-library/react";
import { expect, test } from "@jest/globals";
import Header from "./components/header/header.jsx";

test("verify if exists image element", () => {
  render(<Header />);
  const image = screen.findAllByAltText("image logo");
  expect(image).toBeInTheDocument();
});
