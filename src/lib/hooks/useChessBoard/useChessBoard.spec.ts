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
});
