const fibonacci = function(num) {
    if (num <= 0) return "OOPS";
    let sequence = [1];
    for (i = 0; i < num; i++) {
        if (sequence.length >= 2) {
            sequence.push((sequence[i-1]+sequence[i]));
        }
        else {
            sequence.push(1);
        }
    }
    return sequence[i-1];
};

// Do not edit below this line
module.exports = fibonacci;
