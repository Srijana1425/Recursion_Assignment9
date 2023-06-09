let a = 2;
let d = 1;
let N = 5;
 
let nthTerm = a;
for (let i = 1; i < N; i++) {
    nthTerm += d;
}
console.log("The " + N + "th term of the series is: " + nthTerm);