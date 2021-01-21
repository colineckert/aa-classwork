const View = require("./ttt-view.js")  // require appropriate file
const Game = require("../dist/game.js")// require appropriate file

  $(() => {
    new View(new Game(), ".ttt");
  });
