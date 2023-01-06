
function setup() {
    createCanvas(1000, 400);
    fill(0);
}

let time = 0;
let wave = [];
let posx = 250;
function draw() {

    background(0);
    translate(200, 200);

    let radius = 50;

    //for (let time = 0; time < 2 * PI; time += (PI / 300)) {
    let x = 0;
    let y = 0;


    for (let i = 0; i < 100; i++) {
        let n = i * 2 + 1;
        let radius = 100 * (4 / (n * PI));

        let prevx = x;
        let prevy = y;
        y += radius * sin(n * time);
        x += radius * cos(n * time);
        stroke(100);
        noFill();
        ellipse(prevx, prevy, radius * 2);
        line(prevx, prevy, x, y);
        fill(255);
        stroke(255);
        ellipse(x, y, 2);




    }

    //}
    wave.unshift(y);

    if (wave.length > 400)
        wave.pop();

    line(x, y, posx, wave[0])
    noFill();
    beginShape();
    for (let i = 0; i < wave.length; i++) {
        vertex(posx + i, wave[i]);
    }
    endShape();






    time += 0.04;



}


