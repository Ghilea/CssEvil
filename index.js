const door = document.getElementById('doorClick');
const startGame = document.getElementById('startGameBtn');

const link = './sound/music.mp3';
let audio = new Audio(link);
audio.loop = true;

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

let bgMusic = paused => {
    if(paused){
        audio.pause();
        return;
    }

    audio.play();
}

audioFiles();

startGame.addEventListener('click', () => {
    
    const link = './sound/startGame.mp3';
    let audio = new Audio(link);
    audio.volume = 0.5;
    audio.play();
    
    setTimeout(() => {
        bgMusic(false);
    }, 2000);
            
})
    
