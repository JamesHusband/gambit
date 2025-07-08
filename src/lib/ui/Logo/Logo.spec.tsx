import { render, screen } from "@testing-library/react";
import { Logo } from "./Logo";

describe("Logo", () => {
  it("should render", () => {
    render(<Logo />);
    expect(screen.getByAltText("Gambit Logo")).toBeInTheDocument();
    expect(screen.getByText("Gambit")).toBeInTheDocument();
  });
});
