import { BoardTile } from "./BoardTile";
import { useChessBoard } from "../../../hooks";

export const BoardGame = () => {
  const { board, getPieceAt } = useChessBoard();

  return (
    <div className="col-start-2 row-start-2 aspect-square w-full h-full">
      <div className="grid grid-cols-8 grid-rows-8 w-full h-full">
        {board.flat().map((square, index) => (
          <BoardTile
            key={square.position}
            position={square.position}
            rowIndex={Math.floor(index / 8)}
            colIndex={index % 8}
            piece={getPieceAt(square.position)}
          />
        ))}
      </div>
    </div>
  );
};
