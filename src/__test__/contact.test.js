import { render, screen } from "@testing-library/react";
import Contact from "../Components/Contact";
import "@testing-library/jest-dom";

test("Should load Contact component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("Should load button inside contact component", () => {
  render(<Contact />);

  // const button = screen.getByRole("button");
  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});

test("Should load input name inside contact component", () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("Name");
  expect(inputName).toBeInTheDocument();
});

test("Should load input message inside contact component", () => {
  render(<Contact />);

  const inputMessage = screen.getByPlaceholderText("Message");
  expect(inputMessage).toBeInTheDocument();
});

test("Should load two input boxes in the contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
})