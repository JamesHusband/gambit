import { render, screen } from "@testing-library/react";
import { BoardContainer } from "./BoardContainer";

describe("BoardContainer", () => {
  it("should render with children", () => {
    const { container } = render(<BoardContainer>Test</BoardContainer>);
    expect(container).toMatchSnapshot();
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
