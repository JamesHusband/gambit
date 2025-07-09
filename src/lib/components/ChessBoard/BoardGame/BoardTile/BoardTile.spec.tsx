import { render, screen } from "@testing-library/react";
import { BoardTile } from ".";

jest.mock("../../../../utils", () => ({
  cn: (...args: string[]) => args.join(" "),
}));

describe("BoardTile", () => {
  it("should render", () => {
    const { container } = render(
      <BoardTile position="a1" rowIndex={0} colIndex={0} />
    );
    expect(container).toMatchSnapshot();
  });
  it("should render a white tile", () => {
    render(<BoardTile position="a1" rowIndex={0} colIndex={0} />);
    expect(screen.getByTestId("board-tile")).toHaveClass("bg-[#eeeed2]");
  });
  it("should render a dark tile", () => {
    render(<BoardTile position="a2" rowIndex={0} colIndex={1} />);
    expect(screen.getByTestId("board-tile")).toHaveClass("bg-[#769656]");
  });
});
