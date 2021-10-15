let code = "123";
function foo() {
  code = "1234";
  return;
}
foo();
console.log(code);
