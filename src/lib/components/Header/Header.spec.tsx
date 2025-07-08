import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

jest.mock("../../ui/Logo", () => ({
  Logo: () => <div>Logo</div>,
}));

describe("Header", () => {
  it("should render", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});

describe("Header", () => {
  it("should render", () => {
    render(<Header />);
    expect(screen.getByText("Logo")).toBeInTheDocument();
  });
});
