// function c(a, b) {
//   return a - b;
// }

// function a(data) {
//   var array = data.sort(c);
//   // console.log(array);
//   var product1 = 1;
//   var product2 = 1;
//   var length = array.length - 1;

//   for (var x = length; x > length - 3; x--) {
//     product1 = product1 * array[x];
//   }
//   product2 = array[0] * array[1] * array[length];
//   if (product1 > product2) return product1;
//   return product2;
// }

// var b = [-10, 7, 29, 30, 5, -10, -70];

// // console.log(a(b));

// var length = 5;
// function foo() {
//   console.log(this.length);
// }
// var obj = {
//   length: 10,
//   bar: function (foo) {
//     foo();
//     arguments[0]();
//   },
// };
// obj.bar(foo);
// obj.bar(foo, 20);

let $body = $("body");
let arr = [1, 2, 3, 4, 5];
let i,
  length = arr.length,
  $a;
for (i = 0; i < length; i++) {
  $a = $("<a>${i}</a>");
  $body.append($a);
  $a.click(function () {
    alert(1);
  });
}
