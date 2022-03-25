$(".tab li:eq(0)").click(
    function(){
    $(".notice").show();
    $(".gallery").hide(); },
);
$(".tab li:eq(1)").click(
    function(){
    $(".notice").hide();
    $(".gallery").show(); },
);

$(".tab li a").click(
    function(){
        $(".tab li a").removeClass("on");
        $(this).addClass("on");
    }
)

$(".gnb li").hover(
    function(){
        $(this).children(".sub").stop().slideDown();
        
    },
    function(){
        $(this).children(".sub").stop().slideUp();
    }
);
