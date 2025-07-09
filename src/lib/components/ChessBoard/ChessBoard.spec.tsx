import { render } from "@testing-library/react";
import { ChessBoard } from ".";
jest.mock("../../hooks", () => ({
  useChessBoard: () => ({
    board: [[{ position: "a8" }], [{ position: "a7" }]],
  }),
}));

jest.mock("./BoardLabels", () => ({
  BoardLabels: () => <div>BoardLabels</div>,
}));

jest.mock("./BoardGame", () => ({
  BoardGame: () => <div>BoardGame</div>,
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
