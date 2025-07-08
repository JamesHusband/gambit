import { render, screen } from "@testing-library/react";
import { Layout } from "./Layout";

describe("Layout", () => {
  it("should render", () => {
    render(<Layout>Test</Layout>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
