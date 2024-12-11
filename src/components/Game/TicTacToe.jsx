import React, { useState } from "react";
import "./TicTacToe.css";
import { Helmet } from "react-helmet-async";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

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

  const handleCellClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
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
        <title>Tic Tac Toe | Start Game</title>
        <meta
          name="description"
          content="Start a new Tic Tac Toe game. Challenge yourself in this classic strategy board game."
        />
        <meta
          name="keywords"
          content="Tic Tac Toe, game, start game, strategy game"
        />
        <meta property="og:title" content="Tic Tac Toe - Start Game" />
        <meta
          property="og:description"
          content="Start a new Tic Tac Toe game and test your strategy skills"
        />
        <meta property="og:type" content="game" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Tic Tac Toe",
            description: "A classic strategy board game",
            applicationCategory: "Game",
            operatingSystem: "Web Browser",
          })}
        </script>
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
          <div className="game-status winner">Player {winner} wins!</div>
        )}

        {!winner && !board.includes(null) && (
          <div className="game-status draw">It's a draw!</div>
        )}

        <button className="reset-button" onClick={resetGame}>
          Restart Game
        </button>
      </div>
    </>
  );
};

export default TicTacToe;
