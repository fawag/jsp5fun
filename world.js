let figures = [];




class Figure {
    x;
    y;
    points = [];
    speed;
    constructor(a, b) {
        this.x = a;
        this.y = b;
    }

    doMove() {
        this.y += this.speed.y;
        this.x += this.speed.x;
    }

    draw() {
        let lastPoint;
        line(this.points[this.points.length - 1].x + this.x, this.points[this.points.length - 1].y + this.y, this.points[0].x + this.x, this.points[0].y + this.y);
        stroke(255);
        this.points.forEach(point => {
            if (lastPoint != null) {
                line(point.x + this.x, point.y + this.y, lastPoint.x + this.x, lastPoint.y + this.y);
            }
            else {

            }
            ellipse(point.x + this.x, point.y + this.y, 4);
            stroke(255);
            lastPoint = new Point(point.x, point.y);
        })
    }
}

class Point {
    x;
    y;
    constructor(a, b) {
        this.x = a;
        this.y = b;
    }
}


function setup() {
    let figure = new Figure(20, 20);

    figure.points.push(new Point(10, 0));
    figure.points.push(new Point(30, 0));
    figure.points.push(new Point(50, 20));
    figure.points.push(new Point(50, 40));
    figure.points.push(new Point(40, 60));
    figure.points.push(new Point(20, 60));
    figure.points.push(new Point(0, 50));
    figure.points.push(new Point(0, 30));
    figure.speed = new Point(0, -5);
    figures.push(figure);

    /*
        for (let i = 0; i < 90; i++) {
            let figure = new Figure(Math.random() * 1000, Math.random() * 700);
            for (let j = 0; j < 3 + Math.random() * 4; j++) {
                figure.points.push(new Point(Math.random() * 50, Math.random() * 50));
            }
            figure.speed = new Point(0, -5);
            figures.push(figure);
        }
    */

    createCanvas(1000, 800);
    fill(0);
}



drawDots()


function doGravity() {
    figures.forEach(figure => {
        figure.speed.y += 0.1;

        if (figure.y > 800) { figure.speed.y *= -1; };
    });
}



function draw() {

    background(0);

    doGravity();


    figures.forEach(figure => { figure.draw(); figure.doMove(); })





}


