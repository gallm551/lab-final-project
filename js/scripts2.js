window.addEventListener('keydown', function(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if(!audio) return;

    audio.currentTime = 0;
        //makes the sounds repeat quicker
    audio.play();
        //plays audio
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
        // adds the transition border color
});