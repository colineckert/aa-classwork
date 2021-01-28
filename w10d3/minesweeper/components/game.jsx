import React from 'react';
import * as Minesweeper from './minesweeper';
import Board from './board';

class Game extends React.Component {
    constructor(props) {
        super(props);
        const board = new Minesweeper.Board(10, 15);
        this.state = {
            board: board
        }
        this.updateGame = this.updateGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }

    updateGame(tile, flagged){
        // debugger
        if (flagged) {
            // console.log()
            tile.toggleFlag();
        } else {
            // console.log(tile.explored)
            tile.explore();
            // console.log(tile.explored)
        }
        // console.log(flagged)
        this.setState({ board: this.state.board });
    }

    restartGame(){
        const board = new Minesweeper.Board(10, 15);
        this.setState({board: board});
    }

    render(){
        let modal;
        if (this.state.board.lost() || this.state.board.won()) {
            const text = this.state.board.won() ? "You won!" : "You lost...";
            modal = 
            <div className="modal-screen">
                <div className="modal-content">
                    <p>{text}</p>
                    <button onClick={this.restartGame}>Play again!</button>
                </div>
            </div>
        }
        return(
            <div>
                <div>{modal}</div>
                <h1>Minesweeper</h1>
                <p>Click to explore a tile.</p>
                <p>Alt + click to flag a tile.</p>
                <Board board = {this.state.board} updateGame = {this.updateGame}/>
            </div>
        )
    }
}

export default Game;