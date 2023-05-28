import { cellArray } from "./createboard.js";

export function moving() {
  let snake = document.querySelector(".snake");

  document.addEventListener("keyup", snakeMove);

  function snakeMove(e) {
    let snakeSartinPosition = snake.parentElement.id;

    let key = e.key;
    up(key, snakeSartinPosition);
    down(key, snakeSartinPosition);
    right(key, snakeSartinPosition);
    left(key, snakeSartinPosition);
    console.log();
  }

  function up(key, snakeSartinPosition) {
    if (key === "w" && snakeSartinPosition.length === 2);
    let snakeCurentPosition =
      (Number(snakeSartinPosition[0]) - 1).toString() +
      Number(snakeSartinPosition[1]).toString();
    console.log(snakeSartinPosition, snakeCurentPosition);

    for (let i = 0; i < cellArray.length; i++) {
      if (cellArray[i].id === snakeCurentPosition) {
        snake.parentElement.innerHTML = "";
        cellArray[i].appendChild(snake);
      }
    }

    if (
      key === "w" &&
      snakeSartinPosition.length === 3 &&
      snakeSartinPosition[2] !== 0
    ) {
      let snakeCurentPosition =
        (
          Number(snakeSartinPosition[0] + snakeSartinPosition[1]) - 1
        ).toString() + snakeSartinPosition[2];
      console.log(snakeSartinPosition, snakeCurentPosition);

      for (let i = 0; i < cellArray.length; i++) {
        if (cellArray[i].id === snakeCurentPosition) {
          snake.parentElement.innerHTML = "";
          cellArray[i].appendChild(snake);
        }
      }
    }
    if (
      key === "w" &&
      snakeSartinPosition.length === 3 &&
      snakeSartinPosition[2] == 0
    ) {
      let snakeCurentPosition =
        (Number(snakeSartinPosition[0]) - 1).toString() +
        snakeSartinPosition[1] +
        snakeSartinPosition[2];
      console.log("sdfffffffff");

      console.log(snakeSartinPosition, snakeCurentPosition);

      for (let i = 0; i < cellArray.length; i++) {
        if (cellArray[i].id === snakeCurentPosition) {
          snake.parentElement.innerHTML = "";
          cellArray[i].appendChild(snake);
        }
      }
    }
    if (key === "w" && snakeSartinPosition.length === 4) {
      let snakeCurentPosition =
        (
          Number(snakeSartinPosition[0] + snakeSartinPosition[1]) - 1
        ).toString() +
        Number(snakeSartinPosition[2]).toString() +
        Number(snakeSartinPosition[3]).toString();
      console.log(snakeSartinPosition, snakeCurentPosition);

      for (let i = 0; i < cellArray.length; i++) {
        if (cellArray[i].id === snakeCurentPosition) {
          snake.parentElement.innerHTML = "";
          cellArray[i].appendChild(snake);
        }
      }
    }
  }
  function down(key, snakeSartinPosition) {
    if (key === "s") {
      let snakeCurentPosition =
        (Number(snakeSartinPosition[0]) + 1).toString() +
        Number(snakeSartinPosition[1]).toString();
      console.log(snakeSartinPosition, snakeCurentPosition);

      for (let i = 0; i < cellArray.length; i++) {
        if (cellArray[i].id === snakeCurentPosition) {
          snake.parentElement.innerHTML = "";
          cellArray[i].appendChild(snake);
        }
      }
    }
    if (key === "s" && snakeSartinPosition.length === 3) {
      console.log("dabla");
      let snakeCurentPosition =
        (Number(snakeSartinPosition[0]) + 1).toString() +
        snakeSartinPosition[1] +
        snakeSartinPosition[2];
      for (let i = 0; i < cellArray.length; i++) {
        if (cellArray[i].id === snakeCurentPosition) {
          snake.parentElement.innerHTML = "";
          cellArray[i].appendChild(snake);
        }
      }
    }
  }
  function left(key, snakeSartinPosition) {
    if (key === "a" && snakeSartinPosition.length === 2) {
      let snakeCurentPosition =
        Number(snakeSartinPosition[0]).toString() +
        (Number(snakeSartinPosition[1]) - 1).toString();
      console.log(snakeSartinPosition, snakeCurentPosition);

      for (let i = 0; i < cellArray.length; i++) {
        if (cellArray[i].id === snakeCurentPosition) {
          snake.parentElement.innerHTML = "";
          cellArray[i].appendChild(snake);
        }
      }
    }
    if (key === "a" && snakeSartinPosition.length === 2 && snakeSartinPosition[1] == 1 ){
      console.log("kai erti");
      let snakeCurentPosition = snakeSartinPosition[0] + snakeSartinPosition[1];
      for (let i = 0; i < cellArray.length; i++) {
        if (cellArray[i].id === snakeCurentPosition) {
          snake.parentElement.innerHTML = "";
          cellArray[i].appendChild(snake);

    }}}
    if (key === "a" && snakeSartinPosition.length === 3) {
      let snakeCurentPosition =
        Number(snakeSartinPosition[0]).toString() +
        (
          Number(snakeSartinPosition[1] + snakeSartinPosition[2]) - 1
        ).toString();
      console.log(snakeSartinPosition, snakeCurentPosition);

      for (let i = 0; i < cellArray.length; i++) {
        if (cellArray[i].id === snakeCurentPosition) {
          snake.parentElement.innerHTML = "";
          cellArray[i].appendChild(snake);
        }
      }
    }
    if (
      key === "a" &&
      snakeSartinPosition.length === 3 &&
      snakeSartinPosition[1] == 0
    ) {
      console.log("bklsklklsk");
      let snakeCurentPosition =
        snakeSartinPosition[0] +
        snakeSartinPosition[1] +
        (Number(snakeSartinPosition[2]) - 1).toString();
      for (let i = 0; i < cellArray.length; i++) {
        if (cellArray[i].id === snakeCurentPosition) {
          snake.parentElement.innerHTML = "";
          cellArray[i].appendChild(snake);
        }
      }
    }
    if (key === "a" && snakeSartinPosition.length === 4) {
      let snakeCurentPosition =
        snakeSartinPosition[0] +
        snakeSartinPosition[1] +
        (
          Number(snakeSartinPosition[2] + snakeSartinPosition[3]) - 1
        ).toString();
      for (let i = 0; i < cellArray.length; i++) {
        if (cellArray[i].id === snakeCurentPosition) {
          snake.parentElement.innerHTML = "";
          cellArray[i].appendChild(snake);
        }
      }
    }
  }

  function right(key, snakeSartinPosition) {
    if (key === "d" && snakeSartinPosition.length === 2) {
      let snakeCurentPosition =
        Number(snakeSartinPosition[0]).toString() +
        (Number(snakeSartinPosition[1]) + 1).toString();
      console.log(snakeSartinPosition, snakeCurentPosition);

      for (let i = 0; i < cellArray.length; i++) {
        if (cellArray[i].id === snakeCurentPosition) {
          snake.parentElement.innerHTML = "";
          cellArray[i].appendChild(snake);
        }
      }
    }
    if (
      key === "d" &&
      snakeSartinPosition.length === 3 &&
      snakeSartinPosition[1] !== 0
    ) {
      let snakeCurentPosition =
        Number(snakeSartinPosition[0]).toString() +
        Number(snakeSartinPosition[1]).toString() +
        Number(snakeSartinPosition[2]).toString();
      console.log(snakeSartinPosition, snakeCurentPosition);
      for (let i = 0; i < cellArray.length; i++) {
        if (cellArray[i].id === snakeCurentPosition) {
          snake.parentElement.innerHTML = "";
          cellArray[i].appendChild(snake);
        }
      }
    }
    if (
      key === "d" &&
      snakeSartinPosition.length === 3 &&
      snakeSartinPosition[1] == 0
    ) {
      let snakeCurentPosition =
        Number(snakeSartinPosition[0]).toString() +
        Number(snakeSartinPosition[1]).toString() +
        (Number(snakeSartinPosition[2]) + 1).toString();
      console.log(snakeSartinPosition, snakeCurentPosition);

      for (let i = 0; i < cellArray.length; i++) {
        if (cellArray[i].id === snakeCurentPosition) {
          snake.parentElement.innerHTML = "";
          cellArray[i].appendChild(snake);
        }
      }
    }
  }
}
