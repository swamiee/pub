$(".gnb").hover(
    function(){ 
        $(".sub").stop().slideDown();

    },
    function(){
        $(".sub").stop().slideUp();
        
    }
);

/* tap */

$(".tap1").click( //공지사항 클릭하면
    function(){
        $(".notice").show();
        $(".gallery").hide();
    }

);

$(".tap2").click( //갤러리 클릭하면
    function(){
        $(".notice").hide();
        $(".gallery").show();
    }

);

/* 팝업 */
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