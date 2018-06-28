(function($) {

    $.fn.collapse = function( options ) {

        // Establish our default settings
        var settings = $.extend({
            headColor         : '#000',
            headBackground    : '#ccc',
            desColor          :   '#000',
            desBackground     :   '#fff'
        }, options);

        return this.each( function() {
            var rootObj=$(this);
            rootObj.find("p").css({"display":"none",'color':settings.desColor,'background-color':settings.desBackground,"border-color":settings.headBackground});
            rootObj.find("h2").css({'color':settings.headColor,'background-color':settings.headBackground});
            $(document).on('click',"h2",function(event){
               if($(this).parent().hasClass("active")){

               }else{
                rootObj.find(".wrapper").removeClass("active");
                rootObj.find("p").slideUp();
                $(this).parent().addClass("active");
                $(this).parent().find("p").slideDown();
               }
            });
        });

    }

}(jQuery));