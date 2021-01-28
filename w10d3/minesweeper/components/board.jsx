import React from 'react';
import Tile from './tile';

class Board extends React.Component {
  constructor(props) {
    super(props);
    // debugger
  }

  render() {
    const boardArr = this.props.board.grid.map((row, i) => {
        return (
            <div className="row" key={i}>
                {row.map((tile, j) => {
                    // debugger
                    return (
                        <Tile
                            tile={tile}
                            updateGame={this.props.updateGame}
                            key={`${i}${j}`}
                        />
                    )
                })}
            </div>
        )
    })
    return(
      <div className="board">
        {boardArr}
      </div>
    )
  }

}

export default Board;