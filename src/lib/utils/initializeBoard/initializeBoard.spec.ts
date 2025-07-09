import { initializeBoard } from "./initializeBoard";

describe("initializeBoard", () => {
  it("should return an 8x8 board", () => {
    const board = initializeBoard({
      ranks: [8, 7, 6, 5, 4, 3, 2, 1],
      files: ["a", "b", "c", "d", "e", "f", "g", "h"],
    });
    expect(board).toHaveLength(8);
    expect(board[0]).toHaveLength(8);
  });
});
