const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;

// Don't try doing it this way!!!
// $(() => {
//     $("body").on('DOMContentLoaded', (e) => {
//         let ctx = $('#game-canvas').getContext("2d");
//         let circle = new window.MovingObject({
//             pos: [30, 30],
//             vel: [10, 10],
//             radius: 5,
//             color: "#00FF00"
//         });
//         circle.draw(ctx);
//     });
// });

let circle = new window.MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
});

document.addEventListener("DOMContentLoaded", function () {
    const canvasEl = document.getElementById('game-canvas');
    canvasEl.height = 500;
    canvasEl.width = 500;

    const ctx = canvasEl.getContext('2d');
    circle.draw(ctx);
});

circle.move();
circle.move();
circle.move();
