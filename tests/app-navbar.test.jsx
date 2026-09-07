import Navbar from "../src/components/layout/navbar.jsx";
import { render, screen } from "@testing-library/react";

render(<Navbar />);

/*
Renders the AppNavbar component and checks if all link elements are rendering
*/

test("Find Get Involved Text", () => {
  expect(screen.getAllByText("Get Involved")).toHaveLength(3);
});
