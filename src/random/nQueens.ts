function isValid(board: Array<Array<string>>, row: number = 0, col: number = 0): boolean {
  // row
  for (let r = 0; r < row; r++) {
    if (board[r][col] === "Q") {
      return false;
    }
  }

  // upper left diag
  for (let r = row - 1, c = col - 1; r >= 0 && c >= 0; r--, c--) {
    if (board[r][c] === "Q") {
      return false;
    }
  }

  // upper right diag
  for (let r = row - 1, c = col + 1; r >=0  && c < board.length; r--, c++) {
    if (board[r][c] === "Q") {
      return false;
    }
  }

  return true;
}

function backtrack(board: Array<Array<string>>, result: Array<Array<Array<string>>>, row: number = 0): void {
  if (row === board.length) {
    result.push([...board.map(res => [...res])]);
    return;
  }

  for (let col: number = 0; col < board.length; col++) {
    board[row][col] = "Q";

    if (isValid(board, row, col)) {
      backtrack(board, result, row + 1);
    }

    board[row][col] = ".";
  }
}

export default function nQueens(): Array<Array<Array<string>>> {
  const n = 8;
  const sampleRow: Array<string> = new Array(n).fill("."); // create sample row
  const board: Array<Array<string>> = new Array(n).fill([]).map(() => [...sampleRow]); // create board
  const result: Array<Array<Array<string>>> = []; // init result

  backtrack(board, result);

  result.forEach(board => {
    board.forEach(row => console.log(row.join("  ")));
    console.log("\n\n")
  });

  return result;
}