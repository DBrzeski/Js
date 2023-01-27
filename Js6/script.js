fpscounter = document.getElementById("fps")
var canvas = document.getElementById("myCanvas")
var slider = document.getElementById("slider")
var slength = document.getElementById("slength")
slider.addEventListener('change',ballupdate)
slength.addEventListener('change',lengthupdate)
canvas.width = window.innerWidth
canvas.height = window.innerHeight
var ctx = canvas.getContext("2d")
ctx.fillStyle = "red"
var balls = []
var radius = 3
var threshold = innerWidth *  1/5
var Stop = 1
function initialize(){
    if (Stop == 1){
        threshold = innerWidth * slength.value / 100
        balls = []
    for (var i = 0;i < slider.value;i++) {
        var x = Math.random() * (canvas.width - radius * 2) + radius
        var y = Math.random() * (canvas.height - radius * 2) + radius
        var dx = (Math.random() - 0.5) * -3
        var dy = (Math.random() - 0.5) * -3
        var ball = {x: x, y: y, dx: dx, dy: dy}
        balls.push(ball)
    }
    Stop = 0
    draw();
    }
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (var i = 0;i < balls.length;i++) {
        
        var ball = balls[i]
        ctx.beginPath()
        ctx.arc(ball.x, ball.y, radius, 0, 2 * Math.PI)
        ctx.fill()
        ball.x += ball.dx
        ball.y += ball.dy
        if (ball.x + radius > canvas.width || ball.x - radius < 0) {
            ball.dx = -ball.dx
        }
        if (ball.y + radius > canvas.height || ball.y - radius < 0) {
            ball.dy = -ball.dy
        }
    }
    for (var i = 0 ;i< balls.length;i++) {
        for (var j = i + 1 ;j< balls.length;j++) {
            var distance = Math.sqrt(Math.pow(balls[i].x - balls[j].x, 2) + Math.pow(balls[i].y - balls[j].y, 2))
            if (distance < threshold) {
                ctx.beginPath()
                ctx.moveTo(balls[i].x, balls[i].y)
                ctx.lineTo(balls[j].x, balls[j].y)
                ctx.stroke()
            }
        }
    }
    if(Stop == 0) {
        requestAnimationFrame(draw)
    }
    else{
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
    
}
function stop(){
    Stop = 1
}

function ballupdate(){
    document.getElementById("balls").innerHTML = "Balls:"+slider.value
}
ballupdate()
function lengthupdate(){
    document.getElementById("length").innerHTML = "Length:"+ slength.value + "%"
}
lengthupdate()
let frameCount = 0
let start

function updateFrame(timestamp) {
    let progress = timestamp - start
    frameCount++
    requestAnimationFrame(updateFrame)
}

start = performance.now()
requestAnimationFrame(updateFrame)

setInterval(() => {
    let fps = frameCount
    frameCount = 0
    fpscounter.innerHTML = fps + "fps"
}, 1000)