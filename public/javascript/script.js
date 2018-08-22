
$(document).ready(function() {

// global Variables
// ------------------------------------------------------------------->
    
    var x = window.matchMedia("(max-width: 820px)");

    var projectsArray = [];

// functions
// ------------------------------------------------------------------->

    function Project(title, image, description, techs, pageLink, repoLink) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.techs = [techs];
        this.pageLink = pageLink;
        this.repoLink = repoLink;
        projectsArray.push(this);
    }

    var hangmanGame = new Project(
        'Hangman Game', 
        'images/hangman-game.jpg',
        'Use the keyboard to guess the hidden hero or villain',
        ['javascript', 'jQuery', 'bootstrap'],
        'https://evanejtucker.github.io/Hangman-Game/',
        'https://github.com/evanejtucker/Hangman-Game'
    )

    // toggles the display of the project box's content
    var toggler = function() {
        $('.project-btn').on('click', function() {
            if ($(this).siblings().css('display') !== 'none') {
                console.log('display');
                // hide content
                $(this).siblings().hide(1000);
                // change the icon from minus to plus
                $(this).children("span").children('i').removeClass('fa-minus-square');
                $(this).children("span").children('i').addClass('fa-plus-square');
                return;
            } else {
                console.log('no dispaly');
                // show content 
                $(this).siblings().show(1000);
                // change icon from plus to minus
                $(this).children("span").children('i').removeClass('fa-plus-square');
                $(this).children("span").children('i').addClass('fa-minus-square');
                return;
            }
        });
    }

    // checks if screen is less than 700px, then calls the toggler function 
    var checkWidth = function(x) {
        if (x.matches) { // If media query matches
            $('.project-btn').attr('disabled', false);
            $('.content').hide();
            // toggler();
        } else {
            $('.content').show();
            $('.project-btn').attr('disabled', true);
        }
    }

    function submitMessage() {
        event.preventDefault();
        var email = $('#inputEmail').val().trim();
        var subject = $('#inputSubject').val().trim();
        var message = $('#inputMessage').val().trim();
        $.each($(".email-form"), function() {
            $(this).removeClass('empty-field');
            if($(this).val() === '') {
                console.log('empty')
                $(this).addClass('empty-field');
            }
        });

        if (email && subject && message ) {
            console.log('every has been filled out');
            var email = {
                email: email,
                subject: subject,
                message: message
            }

            $.ajax({
                url: '/api/email',
                method: 'post',
                data: email
            }).done(function(data) {
                console.log('post successful!');

                $('#inputEmail').val('');
                $('#inputSubject').val('');
                $('#inputMessage').val('');

                // add logic to let user know the message was sent
            });
        }
        
    }


// main process
// ------------------------------------------------------------------->
    

    // Call listener function when page loads
    checkWidth(x) 
    toggler();
    // call checkWidth function on state changes
    x.addListener(checkWidth) 

    $('.important-link').on('click', function() {
        window.open(($(this).attr('url')));
    });

    $('#messageSubmit').on('click', function() {
        submitMessage();
    });

    $('#name-tag').on('click', function() {
        window.open('/');
    });
    
    
});