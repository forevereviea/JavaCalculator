let inputBox = document.getElementById('inputBox');
let button = document.getElementById('myBtn');
let headerText = document.getElementById('headerText');

let result;

num.addEventListener("click", function(e){
input();
});

function input(){
    console.log(inputBox.value);
}
equalBtn.addEventListener("click", function (e) {
    result();
    // take the operator input
    const operator = prompt('Enter operator ( either +, -, * or / ): ');

    // take the operand input
    const num = parseFloat(prompt('Enter first number: '));
    const num = parseFloat(prompt('Enter second number: '));

    function result() {
        console.log(inputBox.value);
        switch (inputBox.value) {
            case '+':
                result = Button + num;
                console.log(`${num} + ${num} = ${result}`);
                break;

            case '-':
                result = num - num;
                console.log(`${num} - ${num} = ${result}`);
                break;

            case '*':
                result = num * num;
                console.log(`${num} * ${num} = ${result}`);
                break;

            case '/':
                result = num / num;
                console.log(`${num} / ${num} = ${result}`);
                break;

            default:
                console.log('Invalid operator');
                break;
        }
    }