import { render, screen } from "@testing-library/react";
import App from "./App";

window.alert = () => {};

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/React Training/i);
  expect(linkElement).toBeInTheDocument();
});
