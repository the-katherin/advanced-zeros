module.exports = function getZerosCount(number, base) {

var ar = [];
var z=0;
var countAr = [1];
var i = 2;
var base1 = base;
var number1 = number;
var zeros = 0;
var zerosAr = [];
var res = 0;

while(base1 >= i) {
    if (base1%i === 0) {
      ar.push(i);
      base1/= i;
    }
    else {
      i++;
    }
}
while (z<(ar.length-1)) {
  if (ar[z]===ar[z+1]) {
  ar.splice (z, 1);
  countAr[z] += 1;

}
  else {
  countAr.push(1);
  z++;
}
}

for (var j=0; j<ar.length; j++) {
  var number1 = number;
  zeros =0;
  while ((number1/ar[j])>=1 ) {
    number1 = Math.floor(number1/ar[j]);
    zeros += number1;
}

zerosAr.push((Math.floor(zeros/(countAr[j]))));

}

if (zerosAr.length===1) {
  res = zerosAr[0];
}
else {
for (var y=0; y<zerosAr.length-1; y++) {
      res = Math.min (zerosAr[y], zerosAr[y+1]);

  }
}

return res;

}
