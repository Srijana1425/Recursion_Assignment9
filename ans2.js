let n = 3
var findSum =function(n)
{
   let sum = 0;
   for (let x = 1; x <= n; x++)
     sum = sum + x;
   return sum;
}
console.log(findSum(n));