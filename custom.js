$(function(){//document.ready
    const visual = $("#brandVisual > ul > li");
    const button = $("#btnList > li");

    let current = 0;
    let timer;

    button.click(function(){
        let i = $(this).index();
        button.removeClass("on");
        $(this).addClass("on");
        move(i);
    });
    timer = setInterval(function(){
        let n = current+1;
        if(n == visual.length){
            n = 0;
        }
        button.eq(n).trigger("click");
    },4000);

    function move(i){
        if(current == i) return;
        let currentEl = visual.eq(current);
        let nextEl = visual.eq(i);
        currentEl.css("left",0).stop().animate({"left":"-100%"},500);
        nextEl.css("left","100%").stop().animate({"left":0},500);
        current = i;

        visual.mouseover(function(){
            clearInterval(timer);
        })
    }
});
    
//offer 슬라이드
var itemsHeight = $("#offer").height();
//alert(itemsHeight);
$("#arrow").css("top",itemsHeight/2+"px");
		
$("#left_arr").click(function() {
	$("#slide_img").stop().animate({
		"left": "-=400px"
	}, function() {
		$("#slide_img div:first-child").appendTo("#slide_img");
		$("#slide_img").css({
		"left": "-400px"
		});
	});
});

$("#right_arr").click(function() {
	$("#slide_img").stop().animate({
		"left": "0"
}, function() {
	$("#slide_img div:nth-child(6)").prependTo("#slide_img");
	$("#slide_img").css({
		"left": "-400px"
	});
});
});