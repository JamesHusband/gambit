import type { IPiece } from "./pieces/Piece";
import { createPawn, getPawnStartingPositions } from "./pieces";

export const createInitialPieces = (): IPiece[] => {
  const pieces: IPiece[] = [];

  // Create white pawns
  getPawnStartingPositions("white").forEach((position) => {
    pieces.push(createPawn("white", position));
  });

  // Create black pawns
  getPawnStartingPositions("black").forEach((position) => {
    pieces.push(createPawn("black", position));
  });

  return pieces;
};

export const getPieceAtPosition = (
  pieces: IPiece[],
  position: string
): IPiece | null => {
  return pieces.find((piece) => piece.position === position) || null;
};
