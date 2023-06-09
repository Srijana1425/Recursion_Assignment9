let n = 1 
const PowerOfTwo = n => {
    while(n > 1){
        n /= 2
    }
    
    return n === 1
};
console.log(PowerOfTwo(n))