import { useChessBoard } from "../../hooks";
import type { ChessFile, ChessRank } from "../../types";
import { BoardLabels } from "./BoardLabels";
import { BoardGame } from "./BoardGame";

export const ChessBoard = () => {
  const { files, ranks } = useChessBoard();

  return (
    <div className="flex justify-center items-center">
      <div
        className="grid border border-gray-800 rounded-md w-full h-full"
        style={{
          gridTemplateRows: "32px 1fr 32px",
          gridTemplateColumns: "32px 1fr 32px",
        }}
      >
        <BoardLabels
          files={files as ChessFile[]}
          ranks={ranks as ChessRank[]}
        />
        <BoardGame />
      </div>
    </div>
  );
};
