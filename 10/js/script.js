$(".gnb li").hover(
    function(){
        $(this).children(".sub").stop().slideDown();
    },
    function(){
        $(this).children(".sub").stop().slideUp();
    },
);
$(".open").click(
    function(){
        $("#popup").show();
    }
);
$(".close").click(
    function(){
        $("#popup").hide();
    }
)

// $(".gnb li").click(
//     function(){ 
//         $(".sub").stop().slideUp();
//         $(this).children(".sub").stop().slideToggle();
//     },
// );