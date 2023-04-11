function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
let N =randomInteger(1,7),
factorial=1;
console.log(N);
for (let i=1; i<=N; i++) {factorial=factorial*i;}
console.log(factorial);
