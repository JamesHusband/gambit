import type { Square } from "../../types";

export const initializeBoard = (): Square[][] => {
  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

  return ranks.map((rank) =>
    files.map((file) => ({
      position: `${file}${rank}`,
    }))
  );
};
