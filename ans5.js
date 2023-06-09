let arr= [1, 4, 3, -5, -4, 8, 6];
let n = arr.length;
 var findMaxRec = function(arr, n)
{
    if (n == 1)
        return arr[0];
     
    return Math.max(arr[n - 1],
        findMaxRec(arr, n - 1));
}
console.log(findMaxRec(arr, n));