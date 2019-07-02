import React, { Component } from "react";

function Squares(props) {
    return (
        <button className="colored-squares">{props.value}</button>
    )
}

class Grid extends Component {

    state = {
        values: [null, null, null, null, null, null, null, null, null],
        XGoesFirst: true
    }



    // - A function that makes 9 squares appear in the grid
    makeSquares(i) {
        return (<Squares value={this.state.values[i]} onClick={() => this.handleClick()} />)
    }

    // - A function that makes the squares clickable + A function that changes the squares from being blank to displaying X or O
    handleClick() {

    }

    // - A function that prevents the squares from being changed again

    // - A function that determines if the game has been won

    // - A function that tells the User if it is X or O's turn
    // whoseTurn() {
    //     if (!XGoesFirst) then {
    //         // O goes
    //     }
    //     else {
    //         // X goes first 
    //     }
    // }

    // - A function that restarts the game (ie. it refreshes the page)


    render() {
        return (
            <div>
                <div className="square-row">
                    {this.makeSquares(0)}
                    {this.makeSquares(1)}
                    {this.makeSquares(2)}
                </div>
                <div className="square-row">
                    {this.makeSquares(3)}
                    {this.makeSquares(4)}
                    {this.makeSquares(5)}
                </div>
                <div className="square-row">
                    {this.makeSquares(6)}
                    {this.makeSquares(7)}
                    {this.makeSquares(8)}
                </div>
            </div>
        )
    }

}

function Game() {
    return (
        <div>
            <Grid />
        </div>
    )
}

export default Game;