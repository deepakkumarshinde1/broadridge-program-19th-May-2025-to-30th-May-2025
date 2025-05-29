import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { expect, test } from "vitest";
import Counter from "../components/Counter";

test("Props for Counter Comp when it is true", () => {
  render(<Counter text={true} />);
  let element = screen.getByTestId("title-id");
  expect(element).toBeInTheDocument();
  expect(element.innerHTML).toContain("Counter");
});

test("Props for Counter Comp when it is false", () => {
  render(<Counter text={false} />);
  let element = screen.getByTestId("title-id");
  expect(element).toBeInTheDocument();
  expect(element.innerHTML).toContain("Testing");
});

test("check a state after click", async () => {
  render(<Counter text={true} />);
  let btnElement = screen.getByRole("button");
  expect(btnElement).toBeInTheDocument();
  let counterTextElement = screen.getByTestId("counter-value");
  expect(counterTextElement).toBeInTheDocument();
  expect(counterTextElement.innerHTML).toContain("0");

  fireEvent.click(btnElement);
  fireEvent.click(btnElement);
  fireEvent.click(btnElement);

  let updateElement = await waitFor(() => screen.getByTestId("counter-value"));
  expect(updateElement.innerHTML).toContain("3");
});
