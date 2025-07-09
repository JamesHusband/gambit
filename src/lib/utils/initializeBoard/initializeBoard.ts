import type { Square } from "../../types";

export const initializeBoard = ({
  ranks,
  files,
}: {
  ranks: number[];
  files: string[];
}): Square[][] => {
  return ranks.map((rank) =>
    files.map((file) => ({
      position: `${file}${rank}`,
    }))
  );
};
