function calc(id) {
    return document.getElementById(id);
}

function keys(id) {
    return document.querySelectorAll(id);
}


let display = document.getElementById('calc-screen');
let first_int = '';
let second_int = '';
let operator = '';




keys('.numberKeys').forEach(function(button){
    button.addEventListener('click', function(){
        if (first_int === ' 0 ' && button.innerHTML !== '.') {
            first_int = first_int
            first_int = button.innerHTML;
        } else if (!(first_int === '' && button.innerHTML === ' 0 ')) {
            first_int += button.innerHTML;

        }

            display.innerHTML = first_int;

    });
});

keys('.arithmeticKeys').forEach(function(button){
    button.addEventListener('click', function(){
        if (first_int === '') {
            return display.innerHTML = "Error";
        }

        operator = button.innerHTML.trim();
        second_int = first_int.replace(/\s/g, "");
        first_int = '';
        display.innerHTML = operator;
    });
});

calc('equalsBtn').addEventListener('click', function(){
        if (first_int === '' || second_int=== '' ){
            return display.innerHTML = "Error";
        }
        if (!['+', '−', '×', '÷'].includes(operator)){
            return display.innerHTML = "Error";
        }

        let total;
        let int_one = parseInt(first_int.replace(/\s/g, ""));
        let int_two = parseInt(second_int);

        switch (operator) {
            case "+": total = int_one + int_two; break;
            case "−":
            case "-": total = int_one - int_two; break;
            case "×":
            case "*": total = int_one * int_two; break;
            case "÷":
            case "/": total = int_two != 0 ? (int_two / int_one).toFixed(2): "Error"; break;
        }
        
        if (total === undefined) {
            return display.innerHTML = "Error"; 
        }
        display.innerHTML = total;
        second_int = total.toString();
        first_int = '';

    });

calc('clearBtn').addEventListener('click', function(){
    window.location.reload()
});

calc('signBtn').addEventListener('click', function(){
    if (first_int) {
        first_int = first_int.replace(/\s/g, "")
        first_int = (parseInt(first_int)* -1).toString();
        display.innerHTML = first_int;
    }
});

calc('percentBtn').addEventListener('click', function(){
    if (first_int){
        first_int = first_int.replace(/\s/g, "")
        first_int = (parseInt(first_int)/ 100).toString();
        display.innerHTML = first_int;

    }
});

calc('deleteBtn').addEventListener('click', function(){
    first_int = first_int.slice(0, -1);
    display.innerHTML = first_int || "0";
});

calc('decimalBtn').addEventListener('click', function(){
    if (!first_int.match(/\./)) {
        first_int += ".";
        display.innerHTML = first_int;
    }
})



