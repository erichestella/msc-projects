function guess(id){
    return document.getElementById(id);
}

let random_num = Math.floor(Math.random()*100)+1;
let attempts = 0;
let max_attempts = 5;
let prev_guess = [];

const guessbttn = guess('guess-btn');
const guess_input = guess('guess-input');
const guess_box = guess('guess-container');
const new_game = guess('new-game-div');
const newgame_button = new_game.querySelector('button');
const result = guess('result-div');

guessbttn.addEventListener('click', function(){
    const guess_int = guess_input.value;
    let user = parseInt(guess_int);
    
    if (isNaN(user)|| user < 1 || user > 100 || user === '') {

        result.innerHTML = 'Invalid input number';
        guess_input.value = '';
        return;
    } else {
        if (/[^0-9.-\s]/.test(guess_int)) {
            result.innerHTML = 'Invalid input number';
            guess_input.value = '';
            return;
        }
    }

    prev_guess.push(user);
    guess_box.innerHTML = prev_guess.join('  ');
    attempts++;

    if (user === random_num){
        result.innerHTML = `Congratulations! You gussed the number in ${attempts} attempts`;
        resetgame();

    } else if ( attempts >= max_attempts) {
        result.innerHTML = `Game over! The correct number was ${random_num}`;
        resetgame();

    } else {
        result.innerHTML = user < random_num ? 'Too low. Try again': 'Too high. Try again';
    }
})

function resetgame(){
    guess_input.disabled = true;
    guessbttn.disabled = true;
}

newgame_button.addEventListener('click', function(){
    window.location.reload();
})



