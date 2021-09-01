var a = 0;
console.log('ini root scope: ' + a);
function q2() {
  // child scope
  a = 5;
  console.log('ini child scope: ' + a);
}
q2();
console.log('ini root scope: ' + a);

var angka = [1, 2, 3];
var dobel = angka.map(function (num) {
  return num * 2;
});
console.log(angka);
console.log(dobel);

const myArray = [5, 10, 20];
const reducer = myArray.reduce((acumulator, currentValue) => acumulator + currentValue, (initialValue = 0));
console.log(reducer);
