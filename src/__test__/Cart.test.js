import { act, fireEvent } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import RestaurantMenu from "../Components/RestaurantMenu";
import MOCK_DATA from "../mocks/resListMock.json";
import { Provider } from "react-redux";
import appStore from "../Utils/appStore";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load Restaurant menu component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );

  const accordianHeader = screen.getByText("Pasta");
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(10);
});
