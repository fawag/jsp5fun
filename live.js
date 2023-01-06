//<script src="p5.js"></script>
//<canvas id="myCanvas" width="1000" height="1000"></canvas>
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
let maxx = 400;
let maxy = 400;
let scc = 1;


let world = matrix(maxx, maxy, 0);
let ctx;
let time = 0;
let c = 0;

let world2 = matrix(maxx, maxy, 0);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

setup();
draw();





function setup() {
    //createCanvas(maxx * scc, maxy * scc);
    //fill(0);
    var c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");


    for (let x = 1; x < maxx - 1; x++)
        for (let y = 1; y < maxy - 1; y++) {
            world[x][y] = Math.floor(Math.random() * 40) < 20 ? 1 : 0;
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

    //point(x, y);
    let px = x * scc;
    let py = y * scc;
    //rect(px, py, scc, scc)

    ctx.fillRect(px, py, scc, scc);
    ctx.stroke();
}


function drawWorld() {
    //background(0);
    //fill(0); stroke(255);
    ctx.clearRect(0, 0, maxx * scc, maxy * scc);
    for (let x = 0; x < maxx; x++)
        for (let y = 0; y < maxy; y++) {
            if (world2[x][y] != 0) {
                drawIt(x, y);
            }
            world[x][y] = world2[x][y];
        }
}


function born(low, high, counted) {

    if ((counted >= low) && (counted <= high))
        return 1;
    else
        return 0;
}

function survive(alive, low, high, counted) {

    if (alive == 0) return 0;
    if ((counted >= low) && (counted <= high))
        return 1;
    else
        return 0;
}






function rcsb(x, y, r, s1, s2, b1, b2, w, w2) {
    let counted = count(x, y, r);
    if ((survive(w[x][y], s1, s2, counted) == 1) ||
        (born(b1, b2, counted) == 1)) w2[x][y] = 1;
}

async function draw() {
    c++;
    time++;
    //if (time < 10) return;
    //time = 0;
    //fill(255); stroke(255);
    //background(200);
    //translate(0, 0);
    while (true) {
        await sleep(5);
        for (let x = 1; x < maxx - 1; x++)
            for (let y = 1; y < maxy - 1; y++) {
                world2[x][y] = 0;
                //if (born(1, x, y, 3, 3) == 1) world2[x][y] = 1;
                //if (survive(1, x, y, 2, 3) == 1) world2[x][y] = 1;

                //if (born(5, x, y, 34, 45) == 1) world2[x][y] = 1;
                //if (survive(5, x, y, 33, 57) == 1) world2[x][y] = 1;

                //if (born(10, x, y, 123, 170) == 1) world2[x][y] = 1;
                //if (survive(10, x, y, 122, 211) == 1) world2[x][y] = 1;
                // let counted = count(x, y, 8);
                // if ((survive(world[x][y], 163, 223, counted) == 1) ||
                //     (born(74, 152, counted) == 1)) world2[x][y] = 1;
                //let counted = count(x, y, 1);
                //if ((survive(world[x][y], 2, 3, counted) == 1) ||
                //    (born(3, 3, counted) == 1)) world2[x][y] = 1;

                //rcsb(x, y, 1, 2, 3, 3, 3, world, world2);

                //rcsb(x, y, 5, 33, 57, 34, 45, world, world2);

                rcsb(x, y, 10, 122, 211, 123, 170, world, world2);


            }

        drawWorld();

        //textSize(22);
        //text(c, 10, 30);

    }


}