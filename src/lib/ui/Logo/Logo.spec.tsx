import { render, screen } from "@testing-library/react";
import { Logo } from "./Logo";

describe("Logo", () => {
  it("should render", () => {
    const { container } = render(<Logo />);
    expect(container).toMatchSnapshot();
  });

  it("should render logo with text", () => {
    render(<Logo />);
    expect(screen.getByAltText("Gambit Logo")).toBeInTheDocument();
    expect(screen.getByText("Gambit")).toBeInTheDocument();
  });
});
