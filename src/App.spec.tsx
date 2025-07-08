import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./lib/components/Layout", () => ({
  Layout: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  Header: () => <div>Header</div>,
  BoardContainer: () => <div>BoardContainer</div>,
}));

describe("App", () => {
  it("should render", () => {
    render(<App />);
    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("BoardContainer")).toBeInTheDocument();
  });
});
