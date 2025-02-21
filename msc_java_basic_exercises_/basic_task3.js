
function temp(id) {
    return document.getElementById(id);
}

let total_convert;

temp('button').addEventListener('click', function (){

    const input_val = temp('temp').value;
    const unit = temp('unit').value;
    const input_temp = parseFloat(input_val.trim());
    const display_coversion = temp('conversion-text');

    if (isNaN(input_temp) || input_val === ''){
        display_coversion.innerHTML = 'Please enter correct input number!';
        return;
    
    } else {
        if (/[^0-9.-\s]/.test(input_val)) {
            display_coversion.innerHTML = 'Please enter correct input number!';
            return;
            
        }

        if (unit === 'celsius') {

            //convert to fahrenheit

            total_convert = (input_temp * 9/5) + 32;
            display_coversion.innerHTML = `${input_temp} degrees Celsius = ${total_convert} degrees Fahrenheit.`; 

        } 
        else if (unit === "fahrenheit") {
            total_convert = (input_temp - 32) * 5/9;
            display_coversion.innerHTML= `${input_temp} degrees Fahreheit = ${total_convert} degrees Celsius.`;
        }else{
            display_coversion.innerHTML= 'Please Select a unit';
                }

    }
    

} );


