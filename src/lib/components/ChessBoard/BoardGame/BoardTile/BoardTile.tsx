import { cn } from "../../../../utils";
import { ChessPiece } from "../ChessPiece";
import type { Piece } from "../../../../types";

export const BoardTile = ({
  rowIndex,
  colIndex,
  piece,
}: {
  position: string;
  rowIndex: number;
  colIndex: number;
  piece?: Piece | null;
}) => {
  const isDark = (rowIndex + colIndex) % 2 === 1;

  return (
    <div
      data-testid="board-tile"
      className={cn(
        "flex items-center justify-center w-full h-full",
        isDark ? "bg-[#769656]" : "bg-[#eeeed2]"
      )}
    >
      {piece && <ChessPiece piece={piece} />}
    </div>
  );
};
