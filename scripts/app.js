
let level = 1;
let hunger = 0;
let sleepiness = 0;
let boredom = 0;

const updateStatus = () => {
    const randomNum = Math.floor(Math.random() * 5);
    if ( randomNum === 0 ) {
        return 1000;
    } else if ( randomNum === 1 ) {
        return 1100;
    } else if ( randomNum === 2 ) {
        return 1200;
    } else if ( randomNum === 3 ) {
        return 1300;
    } else {
        return 1400;
    }
};

const updateLevel = () => {
    level++;
    $(".petlevel").text(`LEVEL:  ${level}`);

    if ( level === 10 ) {
        // $('.description').text('I built the first Iron-man suit!!, but not enough..')
        $(".giphy-initial").attr("src", `https://giphy.com/embed/lXo8uSnIkaB9e`)
    }

    if ( level === 20 ) {
        // $('.description').text('War-machine created!')
        $(".giphy-initial").attr("src", `https://giphy.com/embed/rgNQDcVkS4pj2`)
    }

    if ( level === 30 ) {
        // $('.description').text('Iron-Women joined the force!')
        $(".giphy-initial").attr("src", `https://giphy.com/embed/Yr0WpfGegdgcdqZXcL`)
    }

    if ( level === 40 ) {
        // $('.description').text('Hulk Buster is here!')
        $(".giphy-initial").attr("src", `https://giphy.com/embed/3oxHQATtRER8NkKGOc`)
    }

    if ( level === 50 ) {
        // $('.description').text('Avengers~ Assemble..!')
        $(".giphy-initial").attr("src", `https://giphy.com/embed/c0NwRD0Vi5Cta`)
    }

    if ( level === 60 ) {
        missionComplete();
        $("#modal_missionCompleted").modal('show');
    }
};

const updateHungerTimer = () => {
    hunger++;
    if ( hunger < 0 ) {
        hunger = 0;
        $(".hunger").text(`hunger: 0`)
    }
    $(".hunger").text(`hunger: ${hunger}`);
    
    if ( hunger === 10 ) {
        gameOver();
        $("#staticBackdrop").modal('show');
    }
};

const updateSleepinessTimer = () => {
    sleepiness++;
    if ( sleepiness < 0 ) {
        sleepiness = 0;
        $(".sleepiness").text(`sleepiness: 0`)
    }
    $(".sleepiness").text(`sleepiness: ${sleepiness}`);
    if ( sleepiness === 10 ) {
        gameOver();
        $("#staticBackdrop").modal('show');
    }
};

const updateBoredomTimer = () => {
    boredom++;
    if ( boredom < 0 ) {
        boredom = 0;
        $(".boredom").text(`boredom: 0`)
    }
    $(".boredom").text(`boredom: ${boredom}`);
    if ( boredom === 10 ) {
        gameOver();
        $("#staticBackdrop").modal('show');
    }
};

    let hungerTimer;
    let sleepTimer;
    let boredomTimer;
    let levelTimer;


    let intervalHunger = function() {
        hungerTimer = setInterval( updateHungerTimer, updateStatus() )
    }

    let intervalSleep = function() {
        sleepTimer = setInterval( updateSleepinessTimer, updateStatus() )
    }

    let intervalBoredom = function() {
        boredomTimer = setInterval( updateBoredomTimer, updateStatus() )
    }

    let intervalLevel = function() {
        levelTimer = setInterval( updateLevel, 800)
    }

    $(document).ready(function(){
        $("#myModal").modal('show');
    });

    $(".btn-primary").on('click', (event) => {

        event.preventDefault();

        $("#myModal").modal('hide')

        const userInput = $(".form-control").val();

        $(".petname").text(`NAME: ${userInput}`)
        if ( userInput === '' ) {
            $(".petname").text(`NAME: IRON-MAN`)
        }

        intervalHunger();
        intervalSleep();
        intervalBoredom();
        intervalLevel();

    });


const gameOver = (event) => {

    clearInterval( hungerTimer )
    clearInterval( sleepTimer )
    clearInterval( boredomTimer )
    clearInterval( levelTimer )

    $(".btn_playagain").on('click', (event) => {

        $("#staticBackdrop").modal('hide')

        level = 1;
        hunger = 0;
        sleepiness = 0;
        boredom = 0;

        $(".giphy-initial").attr("src", `https://giphy.com/embed/116a8zosxwA0SI`)

        $(".hunger").text(`hunger: ${hunger}`);
        $(".sleepiness").text(`sleepiness: ${sleepiness}`);
        $(".boredom").text(`boredom: ${boredom}`);
        $(".petlevel").text(`LEVEL: ${level}`);
        
        
        intervalHunger();
        intervalSleep()
        intervalBoredom()
        intervalLevel()

        event.preventDefault();

        
    })

};

const  missionComplete= (event) => {

    clearInterval( hungerTimer )
    clearInterval( sleepTimer )
    clearInterval( boredomTimer )
    clearInterval( levelTimer )

    $(".btn_missionComplete").on('click', (event) => {

        $("#modal_missionCompleted").modal('hide')

        level = 1;
        hunger = 0;
        sleepiness = 0;
        boredom = 0;

        $(".giphy-initial").attr("src", `https://giphy.com/embed/116a8zosxwA0SI`)

        $(".hunger").text(`HUNGER: ${hunger}`);
        $(".sleepiness").text(`SLEPPINESS: ${sleepiness}`);
        $(".boredom").text(`BOREDOM: ${boredom}`);
        $(".petlevel").text(`LEVEL: ${level}`);
        
        
        intervalHunger();
        intervalSleep()
        intervalBoredom()
        intervalLevel()

        event.preventDefault();

        
    })

};

$('.button_feed').on('click', (event) => {
    hunger --;
    $(".hunger").text(`hunger: ${hunger}`);
});

$('.button_sleep').on('click', (event) => {
    sleepiness --;
    $(".sleepiness").text(`sleepiness: ${sleepiness}`);
});

$('.button_play').on('click', (event) => {
    boredom --;
    $(".boredom").text(`boredom: ${boredom}`);
});