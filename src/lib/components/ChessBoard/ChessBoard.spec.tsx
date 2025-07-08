import { render } from "@testing-library/react";
import { ChessBoard } from ".";
import { BoardTile } from "./BoardTile";

jest.mock("../../utils", () => ({
  cn: (...args: string[]) => args.join(" "),
}));

jest.mock("./BoardTile", () => ({
  BoardTile: jest.fn(),
}));

jest.mock("../../hooks", () => ({
  useChessBoard: () => ({
    board: [[{ position: "a8" }], [{ position: "a7" }]],
  }),
}));

describe("ChessBoard", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should render", () => {
    const { container } = render(<ChessBoard />);
    expect(container).toMatchSnapshot();
  });
  it("should render tiles", () => {
    render(<ChessBoard />);
    expect(BoardTile).toHaveBeenCalledTimes(2);
  });
});
