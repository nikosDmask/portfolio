import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

test("shows Contact Me button", () => {
  render(<Contact />);
  expect(screen.getByRole("button", { name: /Contact Me/i })).toBeInTheDocument();
});
