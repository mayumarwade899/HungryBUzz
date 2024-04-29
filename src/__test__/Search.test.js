import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Components/Body";
import MOCK_DATA from "../mocks/resMenuMock.json";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the body component before search", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(9);
});

it("Should render the body component with Search", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchBtn = screen.getByRole("button", { name: "Search" });
  expect(searchBtn).toBeInTheDocument();
});

it("Should serach resLIst for pizza input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByPlaceholderText("Search...");

  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(1);
});
