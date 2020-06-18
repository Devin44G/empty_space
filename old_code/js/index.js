// MAIN CONSTANTS
const GAME_LOCATION = document.querySelector('#game-location');
const IMG_CONTAINER = document.querySelector('.img-container');
const IMG = document.createElement('img');
const GAME_TEXT = document.querySelector('#game-text');
const USER_INPUT = document.querySelector('#user-input');
const BUTTON = document.querySelector('#button');
      BUTTON.style.cursor = 'pointer';

let input = '';

// HELP FUNCTION
function help() {
  GAME_TEXT.textContent = '';
  $('#game-text').append('Try using one of the following commands: <i>search, examine, go back, go forward, go left, go right . . .</i>');
}

// RENDER FUNCTION
function render() {
  GAME_LOCATION.textContent = currentScene.title;
  GAME_TEXT.textContent = currentScene.description;
  sceneImg();
}

// RENDERING LOCATION AT START OF GAME
render();

function gamePlay() {
  // Converting User Input to Lower Case
  input = USER_INPUT.value;
  input = input.toLowerCase();

  // Reset Vars from Previous Turn
  GAME_TEXT.textContent = '';
  USER_INPUT.value = '';

  // Choose Correct Action
  switch(input) {
    case 'help':
      render();
      help();
      break;
    case 'go left':
      currentScene.directions.left();
      break;
    case 'go right':
      currentScene.directions.right();
      break;
    case 'go forward':
      currentScene.directions.forward();
      break;
    case 'go back':
      currentScene.directions.back();
      break;
    case 'search':
      GAME_TEXT.textContent = currentScene.search.description;
      break;
    case 'examine':
      GAME_TEXT.textContent = currentScene.examine.description;
    default:
      render();
      console.log(mapLocation);
      break;
  }

  // render();
}

// PLAYING THROUGH THE GAMEPLAY() FUNCTION
BUTTON.addEventListener('click', gamePlay);
document.addEventListener('keypress', (key) => {
  if (key.which === 13) {
    gamePlay();
  }
});
