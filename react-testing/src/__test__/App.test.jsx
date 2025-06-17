import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "../App";

describe("common check", () => {
  test("check for h1 element", () => {
    render(<App />);
    // let element = screen.getByRole("heading");
    let element = screen.getByTestId("h1-tag");
    expect(element.innerHTML).toContain("Hello");
  });

  test("check form menu items count", () => {
    render(<App />);
    let menu = screen.getByTestId("menu");
    expect(menu.childElementCount).toBe(4);
  });
});
