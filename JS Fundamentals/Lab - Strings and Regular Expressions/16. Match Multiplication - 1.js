function multiplication(str) {
    let regex = /(-?\d+)\s*\*\s*(-?\d*\.?\d+)/g;
    str = str.replace(regex, (all, g1, g2) => +g1 * +g2);
    console.log(str);
}

multiplication('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');
multiplication('My bill is: 4 * 2.50 (beer); 12* 1.50 (kepab); 1  *4.50 (salad); 2  * -0.5 (deposit).');