$(".tab li:eq(0)").click( //공지사항
    function(){
        // $("body").css("background","#ff0");\
        $(".tab li a").removeClass("on")  ;
        $(".tab li:eq(0) a").addClass("on") ;
        $(".notice").show();
        $(".gallery").hide(); 
    
       }
);

$(".tab li:eq(1)").click( //갤러리
    function(){
        // $("body").css("background","#fff");
        $(".tab li a").removeClass("on")  ;
        $(".tab li:eq(1) a").addClass("on")
        $(".notice").hide();
        $(".gallery").show();
        
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