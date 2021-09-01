var a = 0;
console.log('ini root scope: ' + a);
function q2() {
  // child scope
  a = 5;
  console.log('ini child scope: ' + a);
}
q2();
console.log('ini root scope: ' + a);

// switch(kondisi) {
//     case “<pilihan1>”:
//     // kode program jika pilihan1
//     break;
//     case “<pilihan2>”:
//     // kode program jika pilihan2
//     break;
//     default:
//     // kode program jika tidak ada pilihan

//     }
