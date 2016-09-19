// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

//Navigation

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


//Smooth Scrolling
$('nav').localScroll();
