let name = prompt("Enter your name");
console.log(name);
let age = prompt("Enter your age");
console.log(age);
let message = checkAge(age);
console.log(message);

function checkAge(age) {
    if (age >= 18) {
        return "You can drive";
    } else if (age < 18) {
        return "You're too young to drive";
    }
}

alert("Hello," + name + message);