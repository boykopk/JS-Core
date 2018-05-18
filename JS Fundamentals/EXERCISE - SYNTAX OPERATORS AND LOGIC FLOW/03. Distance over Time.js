function distance([v1, v2, T]) {
    let distance1 = (v1 * T * 1000) / 3600;
    let distance2 = (v2 * T * 1000) / 3600;
    let delta = Math.abs(distance1 - distance2);
    console.log(delta);
}

distance([0, 60, 3600]);