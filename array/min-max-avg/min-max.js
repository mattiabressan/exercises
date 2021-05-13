const numbers = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

var min = numbers[0];
var max = numbers[0];
var total = 0;

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) { min = numbers[i]; }
    if (numbers[i] > max) { max = numbers[i]; }
    total += numbers[i]
}

console.log(max);
console.log(min);
console.log(total / numbers.length);
