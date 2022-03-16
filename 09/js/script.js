$(".gnb li").hover(
    function(){
        $(this).children(".sub").stop().slideDown();
    },
    function(){
        $(this).children(".sub").stop().slideUp();
    }
);

$(".tab li:eq(0)").click(
    function(){
        $(".notice").show();
        $(".gallery").hide();
    }
);

$(".tab li:eq(1)").click(
    function(){
        $(".notice").hide();
        $(".gallery").show();
    }
);

/* 추가사항 tab*/
$(".tab li a").click(
    function(){
        $(".tab li a").removeClass("on"); /* on class 초기화 */
        $(this).addClass("on");
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
)