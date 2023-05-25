import { createBoard, createSnakeAndFood } from "./createboard.js";
import { moving } from "./moving.js";


function initalization(){
    createBoard()
    createSnakeAndFood()
    moving()
    
    
}
initalization()