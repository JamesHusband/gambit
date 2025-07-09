import type { ChessFile, ChessRank } from "../../../types";

export type RowLabelsProps = {
  labels: ChessFile[];
  direction: "row";
};

export type ColLabelsProps = {
  labels: ChessRank[];
  direction: "col";
};

type BoardLabelsProps = RowLabelsProps | ColLabelsProps;

export const BoardLabels = ({ labels, direction }: BoardLabelsProps) => (
  <div
    className={
      direction === "row"
        ? `grid grid-cols-8 w-full h-8`
        : `flex flex-col w-8 h-full`
    }
  >
    {labels.map((label) => (
      <div
        key={label}
        className={
          direction === "row"
            ? "flex items-center justify-center h-full text-sm text-gray-400 font-medium"
            : "flex-1 flex items-center justify-center text-sm text-gray-400 font-medium"
        }
      >
        {label}
      </div>
    ))}
  </div>
);
