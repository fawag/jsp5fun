
function matrix(rows, cols, defaultValue) {
    var arr = [];
    for (var i = 0; i < rows; i++) {
        arr.push([]);
        arr[i].push(new Array(cols));
        for (var j = 0; j < cols; j++) {
            arr[i][j] = defaultValue;
        }
    }

    return arr;
}
let maxx = 300;
let maxy = 300;
let scc = 3;


let world = matrix(maxx, maxy, 0);



function setup() {
    createCanvas(maxx * scc, maxy * scc);
    fill(0);
    for (let x = 1; x < maxx - 1; x++)
        for (let y = 1; y < maxy - 1; y++) {
            world[x][y] = Math.floor(Math.random() * 20) < 5 ? 1 : 0;
            if (world[x][y] == 1)
                drawIt(x, y);
        }


}


function count(x, y, r) {
    let cnt = 0;

    for (let xx = (x - r); xx <= (x + r); xx++) {
        for (let yy = (y - r); yy <= (y + r); yy++) {
            if (xx >= 0)
                if (yy >= 0)
                    if (xx < maxx)
                        if (yy < maxy)

                            if (world[xx][yy] != 0) {
                                cnt++;

                            }

        }
    }

    if (world[x][y] != 0) cnt--;

    return cnt;
}


function drawIt(x, y) {
    fill(0); stroke(0);
    let px = x * scc;
    let py = y * scc;
    rect(px, py, scc, scc)
}
let world2 = matrix(maxx, maxy, 0);

function drawWorld() {
    for (let x = 0; x < maxx; x++)
        for (let y = 0; y < maxy; y++) {
            if (world2[x][y] != 0) {
                drawIt(x, y);
            }

        }
}


function born(r, x, y, low, high) {
    counted = count(x, y, r);
    if ((counted >= low) && (counted <= high))
        return 1;
    else
        return 0;
}

function survive(r, x, y, low, high) {
    counted = count(x, y, r);
    if (world[x][y] == 0) return 0;
    if ((counted >= low) && (counted <= high))
        return 1;
    else
        return 0;
}



let time = 0;
function draw() {
    time++;
    if (time < 1) return;
    time = 0;
    fill(255); stroke(255);
    background(200);
    translate(0, 0);

    world2 = matrix(maxx, maxy, 0);
    for (let x = 1; x < maxx - 1; x++)
        for (let y = 1; y < maxy - 1; y++) {


            //if (born(1, x, y, 3, 3) == 1) world2[x][y] = 1;
            //if (survive(1, x, y, 2, 3) == 1) world2[x][y] = 1;

            if (born(5, x, y, 34, 45) == 1) world2[x][y] = 1;
            if (survive(5, x, y, 33, 57) == 1) world2[x][y] = 1;


        }

    drawWorld();
    for (let x = 1; x < maxx - 1; x++)
        for (let y = 1; y < maxy - 1; y++) {
            world[x][y] = world2[x][y];

        }



}