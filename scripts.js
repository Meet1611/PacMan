const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

class Boundary {
    constructor({ position }) {
        this.position = position;
        this.width = 40;
        this.height = 40;
    }

    draw() {
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

const b = new Boundary ({
    position: {
        x: 0,
        y: 0
    }
});

b.draw();
