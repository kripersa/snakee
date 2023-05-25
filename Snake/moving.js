import { cellArray } from "./createboard.js";

export function moving() {
  let snake = document.querySelector(".snake");

  document.addEventListener("keyup", snakeMove);

  function snakeMove(e) {
    let snakeSartinPosition = snake.parentElement.id;
    console.log(snakeSartinPosition);
    let key = e.key;
    up(key, snakeSartinPosition);
    down(key, snakeSartinPosition);
    right(key, snakeSartinPosition);
    left(key, snakeSartinPosition);
  }

  function up(key, snakeSartinPosition) {
    if (key === "w")
      if (snakeSartinPosition.length === 2) {
        console.log(snakeSartinPosition.length);
        let snakeCurentPosition =
          (Number(snakeSartinPosition[0]) - 1).toString() +
          Number(snakeSartinPosition[1]).toString();

        console.log(snakeCurentPosition);
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
      console.log(snakeCurentPosition);
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
      console.log(snakeCurentPosition);

      for (let i = 0; i < cellArray.length; i++) {
        if (cellArray[i].id === snakeCurentPosition) {
          snake.parentElement.innerHTML = "";
          cellArray[i].appendChild(snake);
        }
      }}
      if (key === "a" && snakeSartinPosition.length === 3) {
        let snakeCurentPosition =
        Number(snakeSartinPosition[0]).toString() +
        (Number(snakeSartinPosition[1] + snakeSartinPosition[2]) - 1).toString();
        console.log(snakeSartinPosition);

      for (let i = 0; i < cellArray.length; i++) {
        if (cellArray[i].id === snakeCurentPosition) {
          snake.parentElement.innerHTML = "";
          cellArray[i].appendChild(snake);
        }
      }

        console.log("hjhj");
      
    }
  }

  function right(key, snakeSartinPosition) {
    if (key === "d") {
      let snakeCurentPosition =
        Number(snakeSartinPosition[0]).toString() +
        (Number(snakeSartinPosition[1]) + 1).toString();
      console.log(snakeCurentPosition);
      console.log(snakeCurentPosition.length);
      console.log(snakeCurentPosition[0]);
      console.log(snakeCurentPosition[1]);
      console.log(snakeCurentPosition[2]);
      if (snakeSartinPosition.length == 2) {
        for (let i = 0; i < cellArray.length; i++) {
          if (cellArray[i].id === snakeCurentPosition) {
            snake.parentElement.innerHTML = "";
            cellArray[i].appendChild(snake);
          }
        }
      }
    }
  }
}
