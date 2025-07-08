import { cn } from "../../../utils";

export const BoardTile = ({
  rowIndex,
  colIndex,
}: {
  position: string;
  rowIndex: number;
  colIndex: number;
}) => {
  const isDark = (rowIndex + colIndex) % 2 === 1;

  return (
    <div
      data-testid="board-tile"
      className={cn(
        "flex items-center justify-center w-full h-full",
        isDark ? "bg-[#769656]" : "bg-[#eeeed2]"
      )}
    />
  );
};
