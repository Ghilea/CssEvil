const door = document.querySelector('#doorClick');
const startGame = document.querySelector('#startGameBtn');
const menuBtn = document.querySelectorAll('.menuBtn');
const anyKey = document.querySelector('#anyBtnGameBtn');

let audioFiles = () => {
    openDoor = new Audio('./sound/openDoor.mp3');
    closeDoor = new Audio('./sound/closeDoor.mp3');
    
    openDoor.volume = 0.4;
    closeDoor.volume = 0.4;

    door.addEventListener('click', () => {
        
        if(door.checked){
            setTimeout(() => {
                openDoor.play();
            }, 1350);

            setTimeout(() => {
                closeDoor.play();
            }, 1600);
        }
    })
}

//music function
let bgMusic = paused => {

    if(paused){
        audio.pause();
        return;
    }

    const link = './sound/music.mp3';
    let audio = new Audio(link);
    audio.volume = 0.5;
    audio.loop = true;

    audio.play();
}

audioFiles();

//start the game
startGame.addEventListener('click', () => {
    
    const link = './sound/startGame.mp3';
    let audio = new Audio(link);
    audio.volume = 0.5;
    audio.play();
    
    setTimeout(() => {
        bgMusic(false);
    }, 2000);
            
})

//hover over buttons
menuBtn.forEach(element => {
    element.addEventListener("mouseover", event => {

        const link = './sound/button.mp3';
        let audio = new Audio(link);
        audio.volume = 0.5;
        audio.play();

        console.log("Mouse in");
    });
});

//any key press
window.addEventListener('keydown', function (e) {
   let test = anyKey.checked = true;
   console.log(test);
});

window.addEventListener('mousedown', function (e) {
   let test = anyKey.checked = true;
});