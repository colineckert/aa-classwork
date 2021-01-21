const Game = require("../dist/game");

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $($el);
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    const $grid = $('.grid');
    $grid.on('click', (e) => {
      // debugger
      let $square = $(e.target);
      this.makeMove($square);
    })
  }

  makeMove($square) {
    this.game.playMove($square.data("pos"));

    $square.append(`${this.game.currentPlayer}`);
    if (this.game.currentPlayer === "x") {
      $square.addClass('p1');
    } else {
      $square.addClass('p2');
    }

     if (this.game.isOver()) {
       const $body = $('body');
       $body.append(`The winner is ${this.game.winner()}!`);
     };
  }

  setupBoard() {
      const $newBoard = $('<ul class="grid"></ul>');
      
      for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
        for (let colIdx = 0; colIdx < 3; colIdx++) {
          
          const $newBox = $('<li class="grid-box"></li>')
          $newBox.data("pos", [rowIdx, colIdx]);
          $newBoard.append($newBox);
        }
      };
      // need to append to $el within the method or the return breaks
      this.$el.append($newBoard);
  }
}

module.exports = View;