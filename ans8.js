let arr = [1,2,3,4,5];
let product = 1;
let i = 0;
let j = arr.length-1;
while(i < j)
{
    product *= arr[i]*arr[j];
    i += 1;
    j -= 1;
}
if(i == j)
    product *= arr[i];
console.log(product);