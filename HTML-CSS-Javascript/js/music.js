function play(idPlayer, control) {

    var player   = document.querySelector('#' + idPlayer);

    

    if (player.paused) {

        player.play();

        control.textContent = 'Pause';

    } else {

        player.pause(); 

        control.textContent = 'Play-music';

    }

}

