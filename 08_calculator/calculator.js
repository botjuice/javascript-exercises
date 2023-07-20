const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
  let totalSum = 0;
	for (let i = 0; i <= numbers.length - 1; i++){
    totalSum += numbers[i];
  }
  return totalSum;
};

const multiply = function() {
  var args = [];
  for (var i = 0; i < arguments.length; ++i) args[i] = arguments[i];
  let product = args[0];
  for (let i = 1; i <= args.length - 1; i++){
    product *= args[i];
  }
  return product;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
  let answer = a;
  if (a === 0) return 1;
  for (let i = a - 1; i > 0; i--){
    answer *= i;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
