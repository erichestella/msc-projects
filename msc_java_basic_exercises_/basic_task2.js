// Calculator prog

let display = document.getElementById('output');
let first_input = "";
let operator = "";
let second_input = "";


document.querySelectorAll('.button').forEach(function(button){
    button.addEventListener('click', function(){
        const value = button.getAttribute('data-value');
        if (value === "0" || value === "" ) {
            return display.value = "Error";
        } else if (operator === '' ) {
            first_input += value;
            display.value = first_input + operator;
        } else {
            second_input += value;
            display.value = second_input;
        }
    });
});

document.querySelectorAll('.operator_pin').forEach(function(button){
    button.addEventListener("click", function(){
        const value = button.getAttribute('data-value');

        if (value === 'C'){
            window.location.reload();
        } else if (value === "=") {
            if (first_input && operator && second_input) {
                first_input = eval(first_input + operator + second_input).toString();

                operator = "";
                second_input = "";
                display.value = first_input;
            } else {
                return display = "Error";
            }
        } else {
            if (first_input !== "") { // Set operator only if there's a first input
                operator = value;
                display.value = operator;
            }
        }
    });
});

