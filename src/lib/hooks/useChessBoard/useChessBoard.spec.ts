import { renderHook } from "@testing-library/react";
import { useChessBoard } from "./useChessBoard";

const mockInitializeBoard = jest.fn(() => []);

jest.mock("../../utils", () => ({
  initializeBoard: () => mockInitializeBoard,
}));

describe("useChessBoard", () => {
  it("calls initializeBoard", () => {
    renderHook(() => useChessBoard());
    expect(mockInitializeBoard).toHaveBeenCalled();
  });
  it("returns the board", () => {
    const { result } = renderHook(() => useChessBoard());
    expect(result.current.board).toEqual(mockInitializeBoard());
  });
  it("returns the files", () => {
    const { result } = renderHook(() => useChessBoard());
    expect(result.current.files).toEqual([
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
    ]);
  });
  it("returns the ranks", () => {
    const { result } = renderHook(() => useChessBoard());
    expect(result.current.ranks).toEqual([8, 7, 6, 5, 4, 3, 2, 1]);
  });
});
