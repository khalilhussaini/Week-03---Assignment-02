
//  i worked on this array 
 const aFirst  = [16, true, "8", 4, 9, "6", 36, false, 49, 9, "HiCoders", "false", 1, 4, "true"];
//const aFirst  = [16, 4, 9, 36, 49, 9, 1, 4];
aNumbers = [];
for (let i = 0; i < aFirst.length; i++) {
     if (typeof aFirst[i] == 'number') {
      aNumbers.push(aFirst[i]);
        // console.log("this is a Number " + aFirst[i])
    } else {
        // console.log("But this is not a number  " + aFirst[i])
    }
}
//console.log(aNumbers);
aSqr = [];
aSqrt = [];
for (let i = 0; i < aNumbers.length; i++) {
    // console.log("Square " + aNumbers[i] * aNumbers[i]);
    aSqr.push(aNumbers[i] * aNumbers[i]);
    // console.log("Sqrt " + Math.sqrt(aNumbers[i]));
    aSqrt.push(Math.sqrt(aNumbers[i]));
}
console.log('Squares ' + aSqr);
console.log('square root ' + aSqrt);
let max = 0;
let min = Number.MAX_SAFE_INTEGER;
let avg = 0, sum = 0;
for (let i = 0; i < aNumbers.length; i++) {
    let num = aNumbers[i];
    sum += num;
    (min > num) ? min = num : 5;
    (max < num) ? max = num : 5;
}
average  = sum / aNumbers.length;
console.log("Min " + min);
console.log("Max " + max);
console.log("Sum " + sum);
console.log("average  " + average );
console.log("Number of entries " + aNumbers.length);
  

