$(document).ready(function() {

    var remember = $.cookie('remember');
    if (remember == 'true')
    {
        var username = $.cookie('username');
    }
    $("#login").submit(function() {
        if ($('#remember').is(':checked')) {
                var username = $('#username').val();
                $.cookie('username', username);
               var user=getUserName();
               $('#helloMessage').html("Hellow " + user + "!");
               $('#helloMessage').css('display', 'block');
        }
        else
        {
            // reset cookies
            $.cookie('email', null);
            $.cookie('password', null);
            $.cookie('remember', null);
        }
    });
});

function getUserName(){
    var username=$ .cookie ('username');
    if(username!=null){
        return username;
    }else {
        $('#username').addClass('empty_field');
        return "";
    }
}