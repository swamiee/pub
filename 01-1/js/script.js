$(".gnb").hover(
    function(){
        $(".sub").stop().slideDown();
       
    },
    function(){
        $(".sub").stop().slideUp();
        
    }
   
);

$(".tab li:eq(0)").click(
    function(){
        $(".notice").show();
        $(".gallery").hide();
    
    },
);

$(".tab li:eq(1)").click(
    function(){
        $(".notice").hide();
        $(".gallery").show();
    }
);

$(".tab li a").click(
    function(){
        $(".tab li a").removeClass("on");
        $(this).addClass("on");
    }
);
$(".open").click(
    function(){
        $("#popup").fadeIn();
    },
    );
$(".close").click(
    function(){
        $("#popup").fadeOut();
    }
);