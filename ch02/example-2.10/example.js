var context = document.getElementById('canvas').getContext('2d'),
    directionCheckbox = document.getElementById('directionCheckbox');

// Functions.....................................................

function drawGrid(color, stepx, stepy) {
    context.save();

    context.strokeStyle = color;
    context.fillStyle = '#ffffff';
    context.lineWidth = 0.5;
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    for (var i = stepx + 0.5; i < context.canvas.width; i += stepx) {
        context.beginPath();
        context.moveTo(i, 0);
        context.lineTo(i, context.canvas.height);
        context.stroke();
    }

    for (var i = stepy + 0.5; i < context.canvas.height; i += stepy) {
        context.beginPath();
        context.moveTo(0, i);
        context.lineTo(context.canvas.width, i);
        context.stroke();
    }

    context.restore();
}

function drawTwoArcs(sameDirection) {
    context.beginPath();
    context.arc(300, 170, 150, 0, Math.PI*2, false);
    context.arc(300, 170, 100, 0, Math.PI*2, !sameDirection);

    context.fill();
    context.shadowColor = undefined;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.stroke();
}

function draw(sameDirection) {
    context.clearRect(0, 0, context.canvas.width,
                            context.canvas.height);
    drawGrid('lightgray', 10, 10);

    context.save();

    context.shadowColor = 'rgba(0, 0, 0, 0.8)';
    context.shadowOffsetX = 12;
    context.shadowOffsetY = 12;
    context.shadowBlur = 15;

    drawTwoArcs(directionCheckbox.checked);

    // context.restore();

    // drawText();
}

// Initialization................................................

context.fillStyle = 'rgba(100, 140, 230, 0.5)';
context.strokeStyle = context.fillStyle;

draw(directionCheckbox.checked);
