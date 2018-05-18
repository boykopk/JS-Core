function distance3D([x1, y1, z1, x2, y2, z2]) {
    let d = Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2) + Math.pow(Math.abs(z1 - z2), 2));
    console.log(d);
}

distance3D([3.5, 0, 1, 0, 2, -1]);