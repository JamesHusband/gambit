"use client";

import { useChessBoard } from "../../hooks";
import { BoardTile } from "./BoardTile";

export const ChessBoard = () => {
  const { board } = useChessBoard();

  if (board.length === 0) {
    return <div>Loading board...</div>;
  }

  return (
    <div className="aspect-square w-full border border-gray-800 rounded-md relative">
      <div className="grid grid-cols-8 h-full">
        {board.flat().map((square, idx) => (
          <BoardTile
            key={square.position}
            position={square.position}
            rowIndex={Math.floor(idx / 8)}
            colIndex={idx % 8}
          />
        ))}
      </div>
    </div>
  );
};
