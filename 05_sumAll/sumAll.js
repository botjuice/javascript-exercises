const sumAll = function(min, max) {
    if ((min || max) < 0) return "ERROR";
    else if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR"; 
    let sum = 0;
    let start = min;
    let end = max;
    if (min > max){
        start = max;
        end = min;
    }
    for (let num = start; num <= end; num++){
        sum += num;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
