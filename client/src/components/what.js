import React, { Component } from "react";
// const { useState } = React;


//now that I've done a tutorial on the tic tac toe game, I am going to do it again from scratch
// this time, I'll be doing it my way.

// Components:

// Squares - squares that hold values. These values are nothing/null, X or O. 
//This can be a dummy component

function Squares(props) {
    return (
        <button className="square">
            {props.value}
        </button>
    )
}

// Board - a grid that holds 9 squares. This board is an extracted component and needs to hold states

// I think there's a way to refresh the state, but I don't know if this is it
// function SetUp () {
//     const initialState = {
//         value: [null, null, null, null, null, null, null, null, null],
//         xStart: true
//     }

//     const [{ value, xStart }, setState] = useState(initialState)

//     const clearState = () => {
//         setState({ ...initialState });
//     }

// }

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: [],
            xStart: true
        }
    }

    componentDidMount() {
        this.setState = { squares: [null, null, null, null, null, null, null, null, null] }
    }



    // the board needs to render the squares
    render() {
        return (
            <div>

            </div>
        )
    }


}

// this path doesn't really work. The squares aren't clickable, even if I make the click function only display a message
/* <div className="row">
                    <Squares
                        value={this.state.squares[0]}
                        onClick={() => this.handleClick()}
                    />
                    <Squares
                        value={this.state.squares}
                        onClick={() => this.handleClick[1]}
                    />
                    <Squares
                        value={this.state.squares}
                        onClick={() => this.handleClick[2]}
                    />
                </div>
                <div className="row">
                    <Squares
                        squares={this.state.squares[3]}
                        value="3"

                    />
                    <Squares
                        squares={this.state.squares[4]}
                        value="4"
                    />
                    <Squares
                        squares={this.state.squares[5]}
                        value="5"
                    />
                </div>
                <div className="row">
                    <Squares
                        squares={this.state.squares[6]}
                        value="6"

                    />
                    <Squares
                        squares={this.state.squares[7]}
                        value="7"
                    />
                    <Squares
                        squares={this.state.squares[8]}
                        value="8"
                    />
                </div> */

// Game - a container for the board. This will be rendered onto the app. This one is also a dummy

function Game() {
    return (
        <div>
            <Board />
        </div>
    )
}

export default Game;