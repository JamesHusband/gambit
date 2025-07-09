import type { ChessFile, ChessRank } from "../../types";

export const createLabelConfigs = (files: ChessFile[], ranks: ChessRank[]) => [
  {
    key: "top",
    labels: files,
    direction: "row" as const,
    className: "col-start-2 row-start-1",
  },
  {
    key: "left",
    labels: ranks,
    direction: "col" as const,
    className: "col-start-1 row-start-2",
  },
  {
    key: "right",
    labels: ranks,
    direction: "col" as const,
    className: "col-start-3 row-start-2",
  },
  {
    key: "bottom",
    labels: files,
    direction: "row" as const,
    className: "col-start-2 row-start-3",
  },
];
