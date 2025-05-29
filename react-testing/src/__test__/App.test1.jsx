import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "../App";

test("test for h1 element", () => {
  render(<App />);
  let element = screen.getAllByText(/testing/i);
  expect(element.length).toBe(3);
  //   expect(element).toBeInTheDocument();
});
