function sum(a, b) {
  console.log(a + b);
}

const sum2 = (a, b) => console.log(a + b);

function sub(a, b) {
  console.log(a - b);
}
function mul(a, b) {
  console.log(a * b);
}
function div(a, b) {
  console.log(a / b);
}
function sqr(a) {
  // console.log(myObj.pow(a, 2));
  console.log(a * a);
}
function pow(a, b) {
  console.log(Math.pow(a, b));
}

export { sum, sub, mul, div, sqr, pow };

const a = "10" * 1;
const b = Number("10");
const c = parseInt("10");

console.table({
  typeA: typeof a,
  typeB: typeof b,
  typeC: typeof c,
});
