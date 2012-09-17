(function($){

    window.getip = function(data){
        $('[name="ip"]').val(data['ip']);
    };

    $(function(){
        $('[name="user_agent"]').val(navigator.userAgent);
        $('textarea').bind('click', function(evt){
            $(this).focus().select();
        });
    });

})(jQuery);