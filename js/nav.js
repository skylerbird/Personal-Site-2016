//Toggle opening navigation upon clicking button
$("#toggleS").click(function(){
    $("nav").toggleClass("open");
});

//Toggle button position upon click
$("#toggleS").click(function(){
    $("#toggleS").toggleClass("down");
});

//Close navigation after picking a link
$("li").click(function(){
    $("nav").removeClass("open");
});

//Hide navigation after clicking outside of it
$(".section").click(function(){
    $("nav").removeClass("open");
});

//Reposition button after hiding navigation
$(".section").click(function(){
    $("#toggleS").removeClass("down");
});

//Reposition button after clicking a link
$("li").click(function(){
    $("#toggleS").removeClass("down");
});
