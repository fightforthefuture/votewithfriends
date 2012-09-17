(function($){

    window.getip = function(data){
        $('[name="ip"]').val(data['ip']);
    };

    $(function(){
        $('[name="user_agent"]').val(navigator.userAgent);
        $('textarea').bind('click', function(evt){
            $(this).focus().select();
        });

        var $countdown = $('#countdown'),
            $days = $('#days'),
            $hours = $('#hours'),
            $minutes = $('#minutes'),
            $seconds = $('#seconds'),
            pad = function pad(n, length) {
                var str = '' + n;
                while (str.length < length) {
                    str = '0' + str;
                }
                return str;
            },
            setTime = function(){
                var end = new Date(2012, 9, 25, 0, 0, 0),
                    now = new Date(),
                    difference = (end - now);
                if(difference > 0){
                    $countdown.show();
                }else{
                    $countdown.hide();
                }

                var SECOND = 1000,
                    MINUTE = SECOND * 60,
                    HOUR = MINUTE * 60,
                    DAY = HOUR * 24;

                var days = Math.floor(difference / DAY);
                difference = difference - (days * DAY);
                $days.text(pad(days, 2));

                var hours = Math.floor(difference / HOUR);
                difference = difference - (hours * HOUR);
                $hours.text(pad(hours, 2));

                var minutes = Math.floor(difference / MINUTE);
                difference = difference - (minutes * MINUTE);
                $minutes.text(pad(minutes, 2));

                var seconds = Math.floor(difference / SECOND);
                difference = difference - (seconds * SECOND);
                $seconds.text(pad(seconds, 2));

            };

        setInterval(setTime, 1000);


    });

})(jQuery);