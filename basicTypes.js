var isDone = false;
var array = [1, 2, 3];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
if (isDone) {
    isDone = true;
}
console.log("the new value is: " + isDone);
for (var index = 0; index < array.length; index++) {
    console.log(array[index]);
}
console.log("The colour is " + c);
