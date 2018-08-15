
$(document).ready(function() {
    console.log('welcome to the console');

    $('.project-btn').on('click', function() {
        if($(this).siblings("img").is(":hidden")) {
            $(this).siblings().show(1000);
        } else {
            $(this).siblings().hide(1000);
        }
        
    });

});