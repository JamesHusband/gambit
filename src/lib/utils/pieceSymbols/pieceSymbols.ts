import type { PieceType } from "../../types";

const pieceSymbols: Record<PieceType, string> = {
  pawn: "♙",
};

export const getPieceSymbol = (type: PieceType): string => {
  return pieceSymbols[type];
};
