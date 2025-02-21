function dynamic(id) {
    return document.getElementById(id);
}

let counter = 0;

const plus_button = dynamic('button-add');
const subtract_button = dynamic('button-subtract'); 
const counter_num = dynamic('counter-text');

if (plus_button && subtract_button && counter_num) {
    
    //increase number
    plus_button.addEventListener('click', function() {
        counter++;
        counter_num.innerHTML = counter;
    });

    //decrease number 
    subtract_button.addEventListener('click', function() {
        if (counter > 0) {
            counter--;
            counter_num.innerHTML = counter;
        }
    });
}
