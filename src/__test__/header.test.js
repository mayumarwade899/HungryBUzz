import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Components/Header";
import { Provider } from "react-redux";
import appStore from "../Utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should render header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //specific button if multiple button
  const loginBtn = screen.getByRole("button", { name: "Log In" });
  expect(loginBtn).toBeInTheDocument();
});

test("Should render header component with cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("[0]");
//   const cartItems = screen.getByText(/[0]/);
  expect(cartItems).toBeInTheDocument();
});

test("Should render header component with cart items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByText(/[0]/);
    expect(cartItems).toBeInTheDocument();
  });

  test("Should change Login button to Logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginBtn = screen.getByRole("button", { name: "Log In" });
    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByRole("button", { name: "Logout" });
    expect(logoutBtn).toBeInTheDocument();
  });