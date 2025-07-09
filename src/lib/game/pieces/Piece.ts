import type { PieceType, Color } from "../../types";

export interface IPiece {
  readonly type: PieceType;
  readonly color: Color;
  position: string;
}

export const createPiece = (
  type: PieceType,
  color: Color,
  position: string
): IPiece => ({
  type,
  color,
  position,
});

export const getPieceAtPosition = (
  pieces: IPiece[],
  position: string
): IPiece | null => {
  return pieces.find((piece) => piece.position === position) || null;
};

export const movePiece = (
  pieces: IPiece[],
  from: string,
  to: string
): IPiece[] => {
  return pieces.map((piece) =>
    piece.position === from ? { ...piece, position: to } : piece
  );
};
