// SCENES
let scenes = {
  tbd: {
    description: 'tbd',
    directions: {
      left: () => err(),
      right: () => err(),
      back: () => goBack(),
      forward: () => err()
    }
  },
  kitchens: {
    title: 'Kitchens',
    description: 'You find yourself in the kitchens. The room is dark and the musk of dampness and mold invades your nostrils.',
    directions: {
      left: () => err(),
      right: () => err(),
      back: () => goBack(),
      forward: () => {
        (previousLocation[0] === 2) ? newScene(0) :
        (previousLocation[0] === 0) ? newScene(2) : 'No Scene Here'
      }
    }
  },
  gatheringRoom: {
    title: 'The Gathering Room',
    description: 'The Gathering Room is a dead shell of what is once was.',
    directions: {
      left: () => {
        (previousLocation[0] === 5) ? newScene(1) :
        (previousLocation[0] === 1) ? err() : 'No Scene Here'
      },
      right: () => {
        (previousLocation[0] === 5) ? err() :
        (previousLocation[0] === 1) ? newScene(5) : 'No Scene Here'
      },
      back: () => goBack(),
      forward: () => err()
    }
  },
  eastBordingPort: {
    title:'East Boarding Port',
    description: 'East Bording Port . . .',
    directions: {
      left: () => {
        (previousLocation[0] === 4) ? newScene(6) :
        (previousLocation[0] === 6) ? err() : 'No Scene Here'
      },
      right: () => {
        (previousLocation[0] === 4) ? err() :
        (previousLocation[0] === 6) ? newScene(4) : 'No Scene Here'
      },
      back: () => goBack(),
      forward: () => err()
    }
  },
  mainCorridor: {
    title: 'Main Corridor',
    description: 'Main Corridor, you are in . . .',
    directions: {
      left: () => {
        console.log(previousLocation[0]);
        (previousLocation[0] === 7) ? newScene(3) :
        (previousLocation[0] === 5) ? newScene(7) :
        (previousLocation[0] === 3) ? err() : 'No Scene Here'
      },
      right: () => {
        (previousLocation[0] === 7) ? newScene(5) :
        (previousLocation[0] === 5) ? err() :
        (previousLocation[0] === 3) ? newScene(7) : 'No Scene Here'
      },
      back: () => goBack(),
      forward: () => {
        (previousLocation[0] === 5) ? newScene(3) :
        (previousLocation[0] === 3) ? newScene(5) : err()
      }
    }
  },
  westBordingPort: {
    title: 'West Boarding Port',
    description: 'West Boarding Port . . .',
    directions: {
      left: () => {
        (previousLocation[0] === 4) ? newScene(2) :
        (previousLocation[0] === 2) ? err() :
        (previousLocation[0] === 8) ? newScene(4) : 'No Scene Here'
      },
      right: () => {
        (previousLocation[0] === 4) ? newScene(8) :
        (previousLocation[0] === 2) ? newScene(4) :
        (previousLocation[0] === 8) ? err() : 'No Scene Here'
      },
      back: () => goBack(),
      forward: () => {
        (previousLocation[0] === 4) ? err() :
        (previousLocation[0] === 2) ? newScene(8) :
        (previousLocation[0] === 8) ? newScene(2) : 'No Scene Here'
      }
    }
  },
  tbd: {
    description: 'tbd',
    directions: {
      left: () => err(),
      right: () => err(),
      back: () => goBack(),
      forward: () => err()
    }
  },
  controlRoom: {
    title: 'Control Room',
    description: 'The cold grey walls seem to close in around you. You stare at them. You\'ve been staring at them for days.',
    directions: {
      left: () => err(),
      right: () => err(),
      back: () => goBack(),
      forward: () => newScene(4)
    }
  },
  tbd: {
    description: 'tbd',
    directions: {
      left: () => err(),
      right: () => err(),
      back: () => goBack(),
      forward: () => err()
    }
  }
}

let currentScene = scenes.controlRoom;

function getScene() {
  currentScene =
      (mapLocation === 0) ? scenes.tbd :
      (mapLocation === 1) ? scenes.kitchens :
      (mapLocation === 2) ? scenes.gatheringRoom :
      (mapLocation === 3) ? scenes.eastBordingPort :
      (mapLocation === 4) ? scenes.mainCorridor :
      (mapLocation === 5) ? scenes.westBordingPort :
      (mapLocation === 6) ? scenes.tbd :
      (mapLocation === 7) ? scenes.controlRoom :
      (mapLocation === 8) ? scenes.tbd : 'No Scene Here';
}

function goBack() {
  previousLocation.push(mapLocation);
  mapLocation = previousLocation[0];
  previousLocation.shift();
  console.log(previousLocation);
  console.log(mapLocation);
  getScene();
  render();
}

function newScene(location) {
  previousLocation.pop();
  previousLocation.push(mapLocation);
  mapLocation = location;
  console.log(previousLocation);
  console.log(mapLocation);
  getScene();
  render();
}

function err() {
  GAME_TEXT.textContent = 'You can\'t go this way . . . Try using another command or type HELP into the control terminal.';
}

function sceneImg() {
  let url = '';

  (mapLocation === 0) ? url = '../imgs/Kitchen.jpg' :
  (mapLocation === 1) ? url = '../imgs/Kitchen.jpg' :
  (mapLocation === 2) ? url = '../imgs/GatheringRoom.jpg' :
  (mapLocation === 3) ? url = '../imgs/Kitchen.jpg' :
  (mapLocation === 4) ? url = '../imgs/MainCorridor.jpg' :
  (mapLocation === 5) ? url = '../imgs/BoardingBay-West.jpg' :
  (mapLocation === 6) ? url = '../imgs/Kitchen.jpg' :
  (mapLocation === 7) ? url = '../imgs/Kitchen.jpg' :
  (mapLocation === 8) ? url = '../imgs/Kitchen.jpg' : null;

  IMG_CONTAINER.style.background = `url(${url}) no-repeat center top fixed`;
  IMG_CONTAINER.style.backgroundSize = 'contain';
}
