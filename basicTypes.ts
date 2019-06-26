let isDone = false;
if (isDone) {
  isDone = true;
}
console.log("the new value is: " + isDone);
var array = [1, 2, 3];
for (let index = 0; index < array.length; index++){
  console.log(array[index]);
}
/**
 *
 */
function printValue() {
  var a = 10;
  return function newPrint(){
    var b = a + 10;
    return b;
  }
}
var returnvalue = printValue();
console.log("added value inside function is: " + returnvalue());

/**
 *
 * @param isRequired : Method to test scope
 */
function booleanVal(isRequired: boolean) {
  if (isRequired) {
    var x = 10;
  }
  return x;
}
console.log("With value is true " + booleanVal(true) + "With value false " + booleanVal(false))
