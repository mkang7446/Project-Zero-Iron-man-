
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
};

const updateLevel = () => {
    level++;
    $(".petlevel").text(`LeveL: ${level}`);

    if ( level === 10 ) {
        $('.description').text('finally made first suit')
        $(".giphy-initial").attr("src", `https://giphy.com/embed/lXo8uSnIkaB9e`)
    }

    if ( level === 20 ) {
        $(".giphy-initial").attr("src", `https://giphy.com/embed/rgNQDcVkS4pj2`)
    }

    if ( level === 30 ) {
        $(".giphy-initial").attr("src", `https://giphy.com/embed/Yr0WpfGegdgcdqZXcL`)
    }

    if ( level === 40 ) {
        $(".giphy-initial").attr("src", `https://giphy.com/embed/3oxHQATtRER8NkKGOc`)
    }

    if ( level === 50 ) {
        $(".giphy-initial").attr("src", `https://giphy.com/embed/j2pWZpr5RlpCodOB0d`)
    }

    if ( level === 60 ) {
        $(".giphy-initial").attr("src", `https://giphy.com/embed/QyseiNCTb6ZNiCEgpF`)
    }
};

const updateHungerTimer = () => {
    hunger++;
    $(".hunger").text(`hunger: ${hunger}`);
    if ( hunger === 10 ) {
        gameOver();
        // $(".modal fade").modal('show');
    }
};

const updateSleepinessTimer = () => {
    sleepiness++;
    $(".sleepiness").text(`sleepiness: ${sleepiness}`);
    if ( sleepiness === 10 ) {
        gameOver();
        // $(".modal fade").modal('show');
    }
};

const updateBoredomTimer = () => {
    boredom++;
    $(".boredom").text(`boredom: ${boredom}`);
    if ( boredom === 10 ) {
        gameOver();
        // $(".modal fade").modal('show');
    }
};


    $(document).ready(function(){
        $("#myModal").modal('show');
    });

    $(".btn-primary").on('click', (event) => {

        event.preventDefault();

        $("#myModal").modal('hide')

        const userInput = $(".form-control").val();

        $(".petname").text(`name: ${userInput}`)

        setInterval( updateHungerTimer, updateStatus() )
        setInterval( updateSleepinessTimer, updateStatus() )
        setInterval( updateBoredomTimer, updateStatus() )
        setInterval( updateLevel, 2000)

    });


const gameOver = (event) => {

    clearInterval( setInterval( updateHungerTimer, updateStatus() ))
    clearInterval( setInterval( updateHungerTimer, updateStatus() ))
    clearInterval( setInterval( updateHungerTimer, updateStatus() ))
    clearInterval( setInterval( updateHungerTimer, updateStatus() ))

    // $(".btn_playagain").on('click', (event) => {

        // setInterval( updateHungerTimer, updateStatus() )
        // setInterval( updateHungerTimer, updateStatus() )
        // setInterval( updateHungerTimer, updateStatus() )
        // setInterval( updateHungerTimer, updateStatus() )

    //     event.preventDefault();

        
    // })

};

$('.button_feed').on('click', (event) => {
    hunger --;
});

$('.button_sleep').on('click', (event) => {
    sleepiness --;
});

$('.button_play').on('click', (event) => {
    boredom --;
});