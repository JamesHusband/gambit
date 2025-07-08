import { initializeBoard } from "./initializeBoard";

describe("initializeBoard", () => {
  it("should return a 8x8 board", () => {
    const board = initializeBoard();
    expect(board).toHaveLength(8);
    expect(board[0]).toHaveLength(8);
  });
});
