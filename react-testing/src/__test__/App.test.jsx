import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "../App";

describe(" h1 tag", () => {
  test("check for h1 tag", () => {
    render(<App />);
    let h1Element = screen.getByTestId("h1-tag");
    // let elements = screen.getAllByRole("heading");
    expect(h1Element).toBeInTheDocument();
    // expect(elements.length).toBe(2);
  });

  test("check for text in h1 tag", () => {
    render(<App />);
    let element = screen.getByTestId("h1-text");
    expect(element.innerHTML).toBe("Hello");
  });

  test("check for h1 count", () => {
    render(<App />);
    let element = screen.getAllByRole("heading");
    expect(element.length).toBe(4);
  });
});

test("Check menu count", () => {
  render(<App />);
  let element = screen.getByTestId("menu");
  expect(element.childNodes.length).toBe(4);
});
