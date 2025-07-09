import { render } from "@testing-library/react";
import { BoardGame } from "./BoardGame";
import { BoardTile } from "./BoardTile";

jest.mock("./BoardTile", () => ({
  BoardTile: jest.fn(
    ({
      position,
      rowIndex,
      colIndex,
    }: {
      position: string;
      rowIndex: number;
      colIndex: number;
    }) => (
      <div data-testid="board-tile">
        {position} {rowIndex} {colIndex}
      </div>
    )
  ),
}));

jest.mock("../../../hooks", () => ({
  useChessBoard: () => ({
    board: [[{ position: "a8" }]],
  }),
}));

describe("BoardGame", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render", () => {
    const { container } = render(<BoardGame />);
    expect(container).toMatchSnapshot();
  });

  it("should render board tiles", () => {
    render(<BoardGame />);
    expect(BoardTile).toHaveBeenCalledTimes(1);

    const callArgs = (BoardTile as jest.Mock).mock.calls[0][0];
    expect(callArgs.position).toBe("a8");
    expect(callArgs.rowIndex).toBe(0);
    expect(callArgs.colIndex).toBe(0);
  });
});
