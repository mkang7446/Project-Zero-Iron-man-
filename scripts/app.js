// 1. create a input function which takes pet's name and display

    $("#petnameButton").on('click', (event) => {

        event.preventDefault();

        const userInput = $("#petnameInput").val();

        $(".petname").text(`name: ${userInput}`)

        setInterval( updateHungerTimer, updateStatus() )
        setInterval( updateSleepinessTimer, updateStatus() )
        setInterval( updateBoredomTimer, updateStatus() )
        setInterval( updateLevel, 1000)

    })


// 2. set pet as object with status (hunger, sleepiness, boredom, age)

    class Pet {
        constructor(name, age, hunger, sleepiness, boredom) {
            this.name = name;
            this.age = age;
            this.hunger = hunger;
            this.sleepiness = sleepiness;
            this.boredome = boredom;
        }
    }

// 3. set scale from 0 to 10 to each status and alert a pet dies if any one of them reaches 10

let level = 1;
let hunger = 0;
let sleepiness = 0;
let boredom = 0;

const updateStatus = () => {
    const randomNum = Math.floor(Math.random() * 5);
    if ( randomNum === 0 ) {
        return 700;
    } else if ( randomNum === 1 ) {
        return 800;
    } else if ( randomNum === 2 ) {
        return 900;
    } else if ( randomNum === 3 ) {
        return 1000;
    } else {
        return 1100;
    }
}

// 4. make the status of hunger, sleepiness, boredom and age increase on certain interval

const updateHungerTimer = () => {
    hunger++;
    $(".hunger").text(`hunger: ${hunger}`);
    if ( hunger === 10 ) {
        alert(`You reglected Iron-man. Mission failed`)
        // <iframe src="https://giphy.com/embed/7JHtlG3rEkyLLZ1JCs" width="315" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/bosslogic-marvel-iron-man-7JHtlG3rEkyLLZ1JCs">via GIPHY</a></p>
    }
}

const updateSleepinessTimer = () => {
    sleepiness++;
    $(".sleepiness").text(`sleepiness: ${sleepiness}`);
    if ( sleepiness === 10 ) {
        alert(`You reglected Iron-man. Mission failed`)
          // <iframe src="https://giphy.com/embed/7JHtlG3rEkyLLZ1JCs" width="315" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/bosslogic-marvel-iron-man-7JHtlG3rEkyLLZ1JCs">via GIPHY</a></p>
    }
}

const updateBoredomTimer = () => {
    boredom++;
    $(".boredom").text(`boredom: ${boredom}`);
    if ( boredom === 10 ) {
        alert(`You reglected Iron-man. Mission failed`)
          // <iframe src="https://giphy.com/embed/7JHtlG3rEkyLLZ1JCs" width="315" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/bosslogic-marvel-iron-man-7JHtlG3rEkyLLZ1JCs">via GIPHY</a></p>
    }
}

// 5. make three buttons ( feed, sleep, play ) and make it reduce the status whenever clicked

$('.button_feed').on('click', (event) => {
    hunger --;
})

$('.button_sleep').on('click', (event) => {
    sleepiness --;
})

$('.button_play').on('click', (event) => {
    boredom --;
})

// 6. transform pet's apperance as age increases 

const updateLevel = () => {
    level++;
    $(".petlevel").text(`LeveL: ${level}`);

    if ( level === 5 ) {
        $('.description').text('brain storming...')
        //<iframe src="https://giphy.com/embed/116a8zosxwA0SI" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/robert-downey-jr-sigh-confused-116a8zosxwA0SI">via GIPHY</a></p>
    }

    if ( level === 10 ) {
        $('.description').text('finally made first suit')
        //<iframe src="https://giphy.com/embed/lXo8uSnIkaB9e" width="480" height="305" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/robert-downey-jr-marvel-iron-man-lXo8uSnIkaB9e">via GIPHY</a></p>
    }

    if ( level === 20 ) {
        $('.description').text('War-Machine joined')
        //<iframe src="https://giphy.com/embed/rgNQDcVkS4pj2" width="480" height="392" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/iron-man-guns-badass-rgNQDcVkS4pj2">via GIPHY</a></p>
    }

    if ( level === 30 ) {
        $('.description').text('Iron-Woman joined')
        //<iframe src="https://giphy.com/embed/Yr0WpfGegdgcdqZXcL" width="480" height="204" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/boxofficebuz-ironman-avengers-endgame-pepper-potts-Yr0WpfGegdgcdqZXcL">via GIPHY</a></p>
    }

    if ( level === 40 ) {
        $('.description').text('hulk burster, ready to go')
        //<iframe src="https://giphy.com/embed/3oxHQATtRER8NkKGOc" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/marvelstudios-marvel-avengers-3oxHQATtRER8NkKGOc">via GIPHY</a></p>
    }

    if ( level === 50 ) {
        $('.description').text('Avengers, Assemble!')
        //<iframe src="https://giphy.com/embed/j2pWZpr5RlpCodOB0d" width="480" height="202" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nerdist-marvel-endgame-avengers-j2pWZpr5RlpCodOB0d">via GIPHY</a></p>
    }

    if ( level === 60 ) {
        $('.description').text('Thanos got retired')
        //<iframe src="https://giphy.com/embed/QyseiNCTb6ZNiCEgpF" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/morphin-champagne-thanos-endgame-QyseiNCTb6ZNiCEgpF">via GIPHY</a></p>
    }
}