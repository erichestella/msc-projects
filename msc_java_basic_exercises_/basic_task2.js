// Calculator prog


let display = document.getElementById('output');
let first_input = "";
let operator = "";
let second_input = "";


document.querySelectorAll('.button').forEach(function(button){
    button.addEventListener('click', function(){
        const value = button.getAttribute('data-value');

        // catches error 
        if (value === '') {
            display.value = "Error";
            return;

        }

        // checks if the first entered number is 0
        if (operator === ''){
            if(first_input === '0' && value === '0') {
                return;
            } else if (first_input === '0' && value !== '0')
                { 
                    first_input = value;
            } else {
                // if the entered num is not 0 this func work
                first_input += value;
            }
            // display the first int
            display.value = first_input;
        } else {

            // if there's an operator this func catches 2nd int

            second_input += value;
            display.value = second_input;
        }
    });
});

document.querySelectorAll('.operator_pin').forEach(function(button){
    button.addEventListener("click", function(){
        const value = button.getAttribute('data-value');
        
        // refresh the calculator 
        if (value === 'C'){
            window.location.reload();

        } else if (value === "=") {

            // func for solving the equations
            if (first_input && operator && second_input) {
                first_input = eval(first_input + operator + second_input).toString();

                operator = "";
                second_input = "";
                display.value = first_input;
            } else {
                return display = "Error";
            }
        } else {
            if (first_input !== "") { 
                
                // Set operator only if there's a first input
                operator = value;
                display.value = operator;
            } else {
                // this func work if there's no 1st input and just operator
                return;
            }
        }
    });
});