module.exports = function reverse (n) {
    if (n < 0) 
        n *= -1;
    let str = String(n);
    return Number(str.split('').reverse().join(''));
}
