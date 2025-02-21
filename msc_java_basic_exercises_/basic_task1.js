// func to get the elements easier 

function guess_number(id){
    return document.getElementById(id);
}

// random numbers

let random = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const max_attempts = 5;

//function of the button when it is pressed

guess_number('button_guess').addEventListener('click', function(){

    //user input
    const user_input = guess_number('user_guess').value;
    //userinfo
    const user_info = guess_number('hints');
    //validations
    if(isNaN(user_input) | user_input === ''){
        user_info.innerHTML = 'Please enter a number!';
        return;
    }

    if(user_input >= 1 && user_input <=100){
        attempts++;

        // game func
        if(user_input > random){
            user_info.innerHTML = 'Your guess is higher';
        }
        
        else if (user_input < random){
            user_info.innerHTML = 'Your guess is lower';
        }

        else{
            user_info.innerHTML = 'Your guess is right. It was ' + random;
            result();
            return;
        }
        //if attempts were exceeded
        if (attempts >= max_attempts) {
            user_info.innerHTML = 'Game Over! The number was ' + random;
            result();
        }

    } else{
        user_info.innerHTML = 'It exceed the needed number';
        
    }

});

// getting results
function result(){
    const gamepanel = document.querySelector('.game_panel');
    gamepanel.classList.add('hidden');
    guess_number('play_again').classList.remove('hidden');


}


guess_number('play_again').addEventListener('click', function(){
    window.location.reload();
})


