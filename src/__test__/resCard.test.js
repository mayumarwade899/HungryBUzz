import { render, screen } from "@testing-library/react";
import RestaurantCard from "../Components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("should render RestaurantCard component with props data", () => {
  render(<RestaurantCard restData={MOCK_DATA} />);

  const resName = screen.getByText("Pizza Hut");
  expect(resName).toBeInTheDocument();
});
