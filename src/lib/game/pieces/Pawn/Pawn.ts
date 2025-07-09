import type { Color } from "../../../types";
import { createPiece } from "../Piece";

export const createPawn = (color: Color, position: string) => {
  return createPiece("pawn", color, position);
};

export const getPawnStartingPositions = (color: Color): string[] => {
  const rank = color === "white" ? "2" : "7";
  return ["a", "b", "c", "d", "e", "f", "g", "h"].map(
    (file) => `${file}${rank}`
  );
};
