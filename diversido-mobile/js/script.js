$(document).ready(function(){
    $("div#crash_button").click(function(){
        $(".crash").toggle();

        if ($(this).hasClass('crash_button'))
        {
            $(this).removeClass('crash_button').addClass( 'button_click');
        }
        else{
            if ($(this).hasClass('button_click'))
            {
                $(this).removeClass('button_click').addClass( 'crash_button');

            }
        }
    });
});