/** @type {import('vitest').VitestConfig} */
// @vitest-environment jsdom
import Footer from "../src/components/layout/footer.jsx";
import { render, screen } from "@testing-library/react";

render(<Footer />);

/*
Renders the AppFooter component and checks if all link elements are rendering
*/

test("AppFooter", () => {
  expect(screen.getByRole("heading", { level: 2, name: /Get Involved/i })).toBeDefined();
});
