$(".gnb").hover(
    function(){
        $(".sub").stop().slideDown();
        $(".nav_back").stop().slideDown();
    },
    function(){
        $(".sub").stop().slideUp();
        $(".nav_back").stop().slideUp();
    }
)

$(".tab li:eq(0)").click(
    function(){
        $(".notice").show();
        $(".gallery").hide();
    }
)