import type { Piece } from "../../../../types";
import { getPieceSymbol } from "../../../../utils";
import { cn } from "../../../../utils";

type ChessPieceProps = {
  piece: Piece;
};

export const ChessPiece = ({ piece }: ChessPieceProps) => {
  const symbol = getPieceSymbol(piece.type);

  return (
    <div
      data-testid="chess-piece"
      className={cn(
        "text-4xl font-bold text-center select-none",
        piece.color === "white"
          ? "text-white drop-shadow-sm"
          : "text-black drop-shadow-sm"
      )}
    >
      {symbol}
    </div>
  );
};
