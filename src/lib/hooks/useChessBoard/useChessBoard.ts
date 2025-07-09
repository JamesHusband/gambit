import { useState, useEffect } from "react";
import type { Square } from "../../types";
import { initializeBoard } from "../../utils";
import { createInitialPieces, getPieceAtPosition } from "../../game";

const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

export const useChessBoard = () => {
  const [board, setBoard] = useState<Square[][]>([]);
  const pieces = createInitialPieces();

  useEffect(() => {
    setBoard(initializeBoard({ ranks, files }));
  }, []);

  const getPieceAt = (position: string) => getPieceAtPosition(pieces, position);

  return {
    board,
    pieces,
    getPieceAt,
    files,
    ranks,
  };
};
