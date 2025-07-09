import { render, screen } from "@testing-library/react";
import { BoardLabels } from "./BoardLabels";

describe("BoardLabels", () => {
  it("should render horizontal labels", () => {
    render(
      <BoardLabels
        labels={["a", "b", "c", "d", "e", "f", "g", "h"]}
        direction="row"
      />
    );
    expect(screen.getByText("a")).toBeInTheDocument();
    expect(screen.getByText("b")).toBeInTheDocument();
    expect(screen.getByText("c")).toBeInTheDocument();
    expect(screen.getByText("d")).toBeInTheDocument();
    expect(screen.getByText("e")).toBeInTheDocument();
    expect(screen.getByText("f")).toBeInTheDocument();
    expect(screen.getByText("g")).toBeInTheDocument();
    expect(screen.getByText("h")).toBeInTheDocument();
  });
  it("should render vertical labels", () => {
    render(<BoardLabels labels={[1, 2, 3, 4, 5, 6, 7, 8]} direction="col" />);
    expect(screen.getByText(1)).toBeInTheDocument();
    expect(screen.getByText(2)).toBeInTheDocument();
    expect(screen.getByText(3)).toBeInTheDocument();
    expect(screen.getByText(4)).toBeInTheDocument();
    expect(screen.getByText(5)).toBeInTheDocument();
    expect(screen.getByText(6)).toBeInTheDocument();
    expect(screen.getByText(7)).toBeInTheDocument();
    expect(screen.getByText(8)).toBeInTheDocument();
  });
});
