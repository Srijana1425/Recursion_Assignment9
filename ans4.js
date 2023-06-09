let N = 5, P = 2
var power= function(N, P){
    if (P == 0) return 1;
    return (N*power(N, P-1));
}
 console.log (power(N, P))