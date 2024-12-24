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
  const canonicalUrl = "https://ajmaldevala.netlify.app/"; // Replace with your actual portfolio URL
  const socialImageUrl =
    "https://ajmaldevala.netlify.app/assets/AboutImg-14b68c43.jpg"; // Replace with your social sharing image
  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>Tic Tac Toe | Play Against AI</title>
        <title>Ajmal U - Full Stack Developer | MERN Stack Expert</title>
        <meta
          name="description"
          content="Ajmal U: A passionate full-stack developer crafting scalable web applications with expertise in React, Node.js, Express, and MongoDB. Transforming ideas into innovative digital solutions."
        />

        {/* Extended Keywords */}
        <meta
          name="keywords"
          content="Ajmal U, Full Stack Developer, MERN Stack Developer, Web Application Developer, React Developer, Node.js Engineer, MongoDB Expert, JavaScript Specialist, Front-end Developer, Back-end Developer, Web Development, Software Engineer, ajmaldevala, devala, responsive web design, scalable web applications"
        />

        {/* Canonical Link */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Social Media Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ajmal U - Full Stack Developer | MERN Stack Expert"
        />
        <meta
          property="og:description"
          content="Portfolio of Ajmal U: Innovative full-stack developer specializing in building robust and scalable web applications using cutting-edge technologies."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={socialImageUrl} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ajmal U - Full Stack Developer" />
        <meta
          name="twitter:description"
          content="Discover the portfolio of Ajmal U, a skilled full-stack developer creating innovative web solutions."
        />
        <meta name="twitter:image" content={socialImageUrl} />

        {/* Additional SEO Enhancements */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ajmal U" />
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
