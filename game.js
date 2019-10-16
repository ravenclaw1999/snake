// setup canvas
let canvas = document.getElementById('display')
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
let ctx = canvas.getContext('2d')

// variables
let gridSize = 40
let gridWidth = Math.floor(canvas.width / gridSize)
let gridHeight = Math.floor(canvas.height / gridSize)

let snake = [
  {x: 3, y: 2},
  {x: 3, y: 3},
  {x: 4, y: 3},
  {x: 5, y: 3}
]

// draw helpers
function erase() {
  ctx.fillStyle = '#000044'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}
function drawSquare(x, y) {
  ctx.fillStyle = 'green'
  ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize)
}
function drawHead(x, y) {
  ctx.fillStyle = 'darkgreen'
  ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize)
}
function drawCircle(x, y) {
  ctx.fillStyle = 'red'
  ctx.beginPath()
  ctx.arc((x + 0.5) * gridSize, (y + 0.5) * gridSize, gridSize / 2, 0, 2 * Math.PI)
  ctx.fill()
}
function drawSnake(){
  for(let i = 0; i < snake.length - 1; i++){
    let point = snake[i]
    drawSquare(point.x, point.y)
  }
  let head = snake[snake.length - 1]
  drawHead(head.x, head.y)
}

// user input
window.addEventListener('keydown', event => {
  console.log(event.code)
})

// todo program the game

function loop(){
  console.log(snake)

  let head = snake[snake.length - 1]
  let newHead = {x: head.x + 1, y: head.y}
  snake.push(newHead)

  erase()
  drawSnake()
  drawCircle(7, 3)

  setTimeout(() => loop(), 100)
}
loop()







