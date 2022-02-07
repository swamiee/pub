$(".gnb").hover(
    function(){
        $(".sub").stop().slideDown(600);
        $(".nav_back").stop().slideDown();
    },
    function(){
        $(".sub").stop().slideUp(300);
         $(".nav_back").stop().slideUp();
    }
   
);

$(".open").click(
    function(){
        $("#popup").fadeIn();
    }
);
$(".close").click(
    function(){
        $("#popup").fadeOut();
    }
);