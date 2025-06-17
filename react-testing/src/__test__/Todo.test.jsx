import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { expect, test } from "vitest";
import Todo from "../components/Todo";

test("Check for input change", async () => {
  render(<Todo />);
  let input = screen.getByTestId("todo-input");
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: "Task-2" } });
  let updatedInput = await waitFor(() => screen.getByTestId("todo-input"));
  expect(updatedInput.value).toContain("Task-2");
});

test("to check for valid input list", async () => {
  render(<Todo />);
  let input = screen.getByTestId("todo-input");
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: "Task-1" } });
  fireEvent.click(screen.getByRole("button"));
  fireEvent.change(input, { target: { value: "123a" } });
  fireEvent.click(screen.getByRole("button"));

  let list = await waitFor(() => screen.getByTestId("todo-list"));
  expect(list.childNodes.length).toBe(2);
});
