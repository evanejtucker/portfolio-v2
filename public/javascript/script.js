
$(document).ready(function() {
    console.log('welcome to the console');
    

    var toggler = function() {
        // $('.content').hide();

        $('.project-btn').on('click', function() {
            // if($(this).siblings().is(":hidden")) {
            //     $(this).siblings().show();
            // }
            // if($(this).siblings().is(":visible")) {
            //     $(this).siblings().hide();
            // }
            if ($(this).siblings().css('display') !== 'none') {
                console.log('display');
                $(this).siblings().hide();
                return;
            } else {
                console.log('no dispaly');
                $(this).siblings().show();
                return;
            }
        });
    }

    function myFunction(x) {
        if (x.matches) { // If media query matches
            $('.project-btn').attr('disabled', false);
            $('.content').hide();
            toggler();
        } else {
            $('.content').show();
            $('.project-btn').attr('disabled', true);
            

        }
    }
    
    var x = window.matchMedia("(max-width: 700px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
    // opens project detail if closed, and vice versa
    
    
    
    
});