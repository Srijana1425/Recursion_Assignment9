
let num = 5
var factorial = function (num ) {
    if (num == 0) return 1;
    return num * factorial(num - 1);
  }
  console.log (factorial(num));