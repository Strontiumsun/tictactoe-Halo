import React, { Component } from "react";


function Square(props) {
    return (
        <button className={props.data} onClick={props.onClick}>
            {props.value}
        </button>
    )
}

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: [null, null, null, null, null, null, null, null, null],
            xStarts: true
        }
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xStarts ? "X" : "O"
        this.setState({
            squares: squares,
            xStarts: !this.state.xStarts
        })
    }

    // I added this function. It gives X and O distinct colors
    // Adding distinct colors improves the game's visuals
    // The colors correspond to the colors of the logo I created
    letterColors(i) {
        if (this.state.squares[i] === "X") {
            return ("x-style")
        }
        else {
            return ("o-style")
        }
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} data={this.letterColors(i)} />
    }
    render() {
        const winner = winGame(this.state.squares);
        let status;
        if (winner) {
            status = winner + " wins!";
            timerNew();
        }
        else if (this.state.squares.includes(null)) {
            status = 'Next player: ' + (this.state.xStarts ? "X" : "O");
        }
        else {
            status = "It's a draw!";
            timerNew();
        }
        // I added an extra clause to this if/else statement. Instead of Next Player being the default value,
        // I made it conditional to if this.state.squares includes null
        // If there is no winner, and there are no null spaces inside of this.state.squares, it's a draw
        // I changed this because the original code did not have a condition for the game being a draw
        // and from testing the game I got plenty of draws. I didn't want to have to manually refresh
        // the page just for draws when I had created a refresh function for wins.

        return (
            <div>
                <div className="status">{status}</div>
                <div className="grid">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

function winGame(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
            return (squares[a])
    }

    return null;
}

// I added this function. It waits and then refreshes the page
// I've placed it inside of the game-winning check function
// The page will refresh if someone wins or the game is a draw
// I added this so that the users do not need to manually refresh the game
// I decided to put it on a small delay so that the user has time to read the win or draw message
function timerNew() {
    setTimeout(newGame, 1000)
}
function newGame() {
    window.location.reload()
}


class Game extends Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
            </div>
        )
    }
}

export default Game;

