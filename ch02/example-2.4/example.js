var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    graident = context.createRadialGradient(
                canvas.width/2, canvas.height, 10,
                canvas.width/2, 0, 100);

graident.addColorStop(0, 'blue');
graident.addColorStop(0.25, 'white');
graident.addColorStop(0.5, 'purple');
graident.addColorStop(0.75, 'red');
graident.addColorStop(1, 'yellow');

context.fillStyle = graident;
context.rect(0, 0, canvas.width, canvas.height);
context.fill();
