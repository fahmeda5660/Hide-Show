$(document).ready(function(){
    $(".btn").click(function(){
        $(".box").hide(1000);
    });
    $(".ptn").click(function(){
        $(".box").show(1000);
    });
    $(".tog").click(function(){
        $(".box").toggle(1000);
    });
    // fade
    $(".fadein").click(function(){
        $(".box_2").fadeIn(1000);
    });
    $(".fadeout").click(function(){
        $(".box_2").fadeOut(1000);
    });
    $(".fadetoggle").click(function(){
        $(".box_2").fadeToggle(1000);
    });
    // fade
    $(".slideup").click(function(){
        $(".box_2").slideUp(1000);
    });
    $(".slidedown").click(function(){
        $(".box_2").slideDown(1000);
    });
    $(".slidetoggle").click(function(){
        $(".box_2").slideToggle(1000);
    });
    // Animate
    $(".animate").click(function(){
        $(".box_3").animate({left:'500px'});
    });
});

$(document).ready(function(){
$(".box_1").css({"height":"100px","width":"100px","background":"#24ad18"});
    $(".box_1_btn").css({"color":"#24ad18"});
    $(".box_2_btn").css({"color":"#24ad18"});

    $(".box_1_btn").click(function(){
        $(".box_1").css({"background":"#e6158f", "transition":"2s"});
        $(".hi").css({"display":"block","color":"white", "text-align":"center"});
        $(".bye").css({"display":"none","color":"white", "text-align":"center"});
    });
    $(".box_2_btn").click(function(){
        $(".box_1").css({"background":"#3386bd", "transition":"2s"});
        $(".hi").css({"display":"none","color":"white", "text-align":"center"});
        $(".bye").css({"display":"block","color":"white", "text-align":"center"});
    });
});