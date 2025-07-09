import type { ChessFile, ChessRank } from "../../../types";
import { createLabelConfigs } from "../../../utils";
import { BoardLabel } from "./BoardLabel";

type Props = {
  files: ChessFile[];
  ranks: ChessRank[];
};

export const BoardLabels = ({ files, ranks }: Props) => {
  const labelConfigs = createLabelConfigs(files, ranks);

  return (
    <>
      {labelConfigs.map((config) => (
        <div key={config.key} className={config.className}>
          {config.direction === "row" ? (
            <BoardLabel labels={config.labels as ChessFile[]} direction="row" />
          ) : (
            <BoardLabel labels={config.labels as ChessRank[]} direction="col" />
          )}
        </div>
      ))}
    </>
  );
};
