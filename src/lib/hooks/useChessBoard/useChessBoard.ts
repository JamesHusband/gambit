import { useState, useEffect } from "react";
import type { Square } from "../../types";
import { initializeBoard } from "../../utils";

export function useChessBoard() {
  const [board, setBoard] = useState<Square[][]>([]);

  useEffect(() => {
    setBoard(initializeBoard());
  }, []);

  return { board };
}
