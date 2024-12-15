import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [messageText, setMessageText] = useState("");

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  const checkWinner = (board) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const checkDraw = (board) => {
    return board.every((cell) => cell !== null);
  };

  const makeAIMove = (currentBoard) => {
    // First, check for a winning move
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      const tempBoard = [...currentBoard];

      // Check if AI can win
      if (!tempBoard[a] && tempBoard[b] === "O" && tempBoard[c] === "O") {
        tempBoard[a] = "O";
        return tempBoard;
      }
      if (!tempBoard[b] && tempBoard[a] === "O" && tempBoard[c] === "O") {
        tempBoard[b] = "O";
        return tempBoard;
      }
      if (!tempBoard[c] && tempBoard[a] === "O" && tempBoard[b] === "O") {
        tempBoard[c] = "O";
        return tempBoard;
      }
    }

    // Block player's potential win
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      const tempBoard = [...currentBoard];

      if (!tempBoard[a] && tempBoard[b] === "X" && tempBoard[c] === "X") {
        tempBoard[a] = "O";
        return tempBoard;
      }
      if (!tempBoard[b] && tempBoard[a] === "X" && tempBoard[c] === "X") {
        tempBoard[b] = "O";
        return tempBoard;
      }
      if (!tempBoard[c] && tempBoard[a] === "X" && tempBoard[b] === "X") {
        tempBoard[c] = "O";
        return tempBoard;
      }
    }

    // If no strategic move, choose a random empty cell
    const emptyCells = currentBoard.reduce((acc, cell, index) => {
      if (cell === null) acc.push(index);
      return acc;
    }, []);

    if (emptyCells.length > 0) {
      const randomIndex =
        emptyCells[Math.floor(Math.random() * emptyCells.length)];
      const newBoard = [...currentBoard];
      newBoard[randomIndex] = "O";
      return newBoard;
    }

    return currentBoard;
  };

  const handleCellClick = (index) => {
    // Player's turn
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);

    // Check for player win or draw
    const playerWinner = checkWinner(newBoard);
    if (playerWinner) {
      setWinner(playerWinner);
      return;
    }

    if (checkDraw(newBoard)) {
      setWinner("Draw");
      return;
    }

    // AI's turn
    setTimeout(() => {
      const aiBoard = makeAIMove(newBoard);
      setBoard(aiBoard);

      const aiWinner = checkWinner(aiBoard);
      if (aiWinner) {
        setWinner(aiWinner);
        setMessageText("Ha! I won. Better luck next time!");
      } else if (checkDraw(aiBoard)) {
        setWinner("Draw");
      }
    }, 500);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
    setMessageText("");
  };

  const startGame = () => {
    setGameStarted(true);
    resetGame();
  };

  if (!gameStarted) {
    return (
      <div className="start-screen">
        <h1>Tic Tac Toe</h1>
        <button onClick={startGame} className="start-button">
          Start Game
        </button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Tic Tac Toe | Play Against AI</title>
        <meta
          name="description"
          content="Play Tic Tac Toe against an AI opponent. Test your strategy skills!"
        />
      </Helmet>
      <div className="game-container">
        <h1 className="game-title">Tic Tac Toe</h1>
        <div className="board">
          {board.map((cell, index) => (
            <div
              key={index}
              className={`cell ${cell ? "taken" : ""} ${
                cell === "X" ? "x" : "o"
              }`}
              onClick={() => handleCellClick(index)}
            >
              {cell}
            </div>
          ))}
        </div>
        {winner && (
          <div className={`game-status ${winner === "X" ? "winner" : "draw"}`}>
            {winner === "X"
              ? "You win!"
              : winner === "O"
              ? "AI wins!😊😊"
              : "It's a draw!"}
          </div>
        )}
        {messageText && (
          <div className="game-status ai-message">{messageText}</div>
        )}
        <button className="reset-button" onClick={resetGame}>
          Restart Game
        </button>
      </div>
    </>
  );
};

export default TicTacToe;
