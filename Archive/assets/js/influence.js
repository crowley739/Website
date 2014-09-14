/*
 * Theme name: Influence - One Page
 * Description: Additional scripts
 * Version: 1.3
 * Last update:  5.8. 2014
 * Author: Jiri Cermak
 * */

/*
 * ===================================
 * Separate scripts
 * ===================================
 * */

/*===	Back To Top		===*/
jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery(".back-to-top").fadeIn(duration);
        } else {
            jQuery(".back-to-top").fadeOut(duration);
        }
    });

    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    });
});

/* Smooth scrooling - from href to id
 * Must add the "scroll" class to the link - <a href="#someID" class="scroll">
 * */
$(function() {
    $('a.scroll').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

/* Remove conflict - example: when click on filter, it will be removed class of starting animation  */
$(document).ready(function() {
    $(".filter").on("click", function() {
        $(".hover-content").removeClass("easeUp");
    });
    $(".t2").on("click", function() {
        $(".profile").removeClass("openIn");
        $(".addAnimation").addClass("fadeIn").addClass("animated");
    });
});

/* Modal Window Animations and actions */
$(document).ready(function() {
    //Open modal actions
    $(".md-trigger").on("click", function() {
        $("body")
            .queue(function(next) {
                $(this).css({
                    "overflow": "hidden"
                });
                next();
            });
    });
    //Close modal actions
    $(".md-close").on("click", function() {
        $("body")
            .queue(function(next) {
                $(this).css({
                    "overflow": "auto"
                });
                next();
            });
    });
});

/* Style Switcher */
$(document).ready(function() {
    $(".switcher-icon").on("click", function() {
        $(".style-switcher").toggleClass("switcher-active");
        $(".switcher-icon").removeClass("switcher-anim");
    });
});

/* Colors Themes */ 

jQuery(document).ready(function($) {

    var allID = $("#gk, #yk, #rk, #lbk, #bk");
    //gk = green knob - when you choose a color theme, this function will hide all other ID of the knobs

    $(".light-blue").click(function() {
        $("#colors").attr("href", "assets/css/themes/light-blue.min.css");
        allID.hide();
        $("#lbk").show();
        return false;
    });

    $(".blue").on("click", function() {
        $("#colors").attr("href", "assets/css/themes/blue.min.css");
        allID.hide();
        $("#bk").show();
        return false;
    });
    $(".red").on("click", function() {
        $("#colors").attr("href", "assets/css/themes/red.min.css");
        allID.hide();
        $("#rk").show();
        return false;
    });
    $(".yellow").click(function() {
        $("#colors").attr("href", "assets/css/themes/yellow.min.css");
        allID.hide();
        $("#yk").show();
        return false;
    });
    $(".green").click(function() {
        $("#colors").attr("href", "assets/css/themes/green.min.css");
        allID.hide();
        $("#gk").show();
        return false;
    });

});


/*
 * ===================================
 * Custom Settings for plugins
 * ===================================
 * */

/* Main Navigation */
$(document).ready(function() {
    $('#nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 1000,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'easeInOutCubic'
    });
});

/* Loading/starting animations */
new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: false
}).init();

/* Grid filter */
$(function() {
    $('#Grid').mixitup();
});

/* Slideshow */
jQuery('#aboutus-slideshow').slippry({
    slideWrapper: '<div class="normal sy-slides-wrap" />',
    transition: 'fade',
    auto: true,
    useCSS: true,
    pause: 5000
});


/* Google Maps */
$('#map').initMap({
    markers: {
        marker1: {
            position: [50.0858402, 14.4203916, 17]
        }
    },
    options: {
        zoom: 17,
        scrollwheel: false
    },
    type: 'roadmap',
    center: [50.0858402, 14.4203916]
});

/* Smooth scrolling */
$(document).ready(
    function() {
        $("html").niceScroll({
            cursorcolor: "#999",
            cursorwidth: "8px",
            cursorborder: "none",
            cursorborderradius: "0px",
            scrollspeed: 60,
            mousescrollstep: 15 * 3,
            hwacceleration: true,
            background: "#ddd",
            preservenativescrolling: true,
            bouncescroll: true,
            spacebarenabled: true,
            disableoutline: true,
            smoothscroll: true,
            sensitiverail: true,
            hidecursordelay: 500,
            cursordragspeed: 0.3,
            zindex: 999999
        });
    }
);

/* Knobs - Graphs of skills */
//Special setting for color themes, each color need its own setting
$(".blueKnob").knob({
    fgColor: "#1a99aa",
    min: 0,
    max: 100,
    step: 5,
    angleOffset: 0,
    angleArc: 360,
    stopper: true,
    readOnly: true,
    cursor: false,
    lineCap: 'none',
    thickness: '0.03',
    width: 150,
    displayInput: true,
    displayPrevious: true,
    inputColor: '#999999',
    font: 'Lato',
    fontWeight: 'normal',
    bgColor: '#EEEEEE',
    draw: function() {
        if (this.$.data('skin') == 'tron') {
            var a = this.angle(this.cv), // Angle

                sa = this.startAngle, // Previous start angle

                sat = this.startAngle, // Start angle

                ea, // Previous end angle
                eat = sat + a, // End angle

                r = 1;
            this.g.lineWidth = this.lineWidth;
            this.o.cursor && (sat = eat - 0.3) && (eat = eat + 0.3);
            if (this.o.displayPrevious) {
                ea = this.startAngle + this.angle(this.v);
                this.o.cursor && (sa = ea - 0.3) && (ea = ea + 0.3);
                this.g.beginPath();
                this.g.strokeStyle = this.pColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                this.g.stroke();
            }
            this.g.beginPath();
            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
            this.g.stroke();
            this.g.lineWidth = 2;
            this.g.beginPath();
            this.g.strokeStyle = this.o.fgColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
            this.g.stroke();
            return false;
        }

    }
});

$(".greenKnob").knob({
    fgColor: "#3c948b",
    min: 0,
    max: 100,
    step: 5,
    angleOffset: 0,
    angleArc: 360,
    stopper: true,
    readOnly: true,
    cursor: false,
    lineCap: 'none',
    thickness: '0.03',
    width: 150,
    displayInput: true,
    displayPrevious: true,
    inputColor: '#999999',
    font: 'Lato',
    fontWeight: 'normal',
    bgColor: '#EEEEEE',
    draw: function() {
        if (this.$.data('skin') == 'tron') {
            var a = this.angle(this.cv), // Angle

                sa = this.startAngle, // Previous start angle

                sat = this.startAngle, // Start angle

                ea, // Previous end angle
                eat = sat + a, // End angle

                r = 1;
            this.g.lineWidth = this.lineWidth;
            this.o.cursor && (sat = eat - 0.3) && (eat = eat + 0.3);
            if (this.o.displayPrevious) {
                ea = this.startAngle + this.angle(this.v);
                this.o.cursor && (sa = ea - 0.3) && (ea = ea + 0.3);
                this.g.beginPath();
                this.g.strokeStyle = this.pColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                this.g.stroke();
            }
            this.g.beginPath();
            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
            this.g.stroke();
            this.g.lineWidth = 2;
            this.g.beginPath();
            this.g.strokeStyle = this.o.fgColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
            this.g.stroke();
            return false;
        }
    }
});

$(".redKnob").knob({
    fgColor: "#df6c4f",
    min: 0,
    max: 100,
    step: 5,
    angleOffset: 0,
    angleArc: 360,
    stopper: true,
    readOnly: true,
    cursor: false,
    lineCap: 'none',
    thickness: '0.03',
    width: 150,
    displayInput: true,
    displayPrevious: true,
    inputColor: '#999999',
    font: 'Lato',
    fontWeight: 'normal',
    bgColor: '#EEEEEE',
    draw: function() {
        if (this.$.data('skin') == 'tron') {
            var a = this.angle(this.cv), // Angle

                sa = this.startAngle, // Previous start angle

                sat = this.startAngle, // Start angle

                ea, // Previous end angle
                eat = sat + a, // End angle

                r = 1;
            this.g.lineWidth = this.lineWidth;
            this.o.cursor && (sat = eat - 0.3) && (eat = eat + 0.3);
            if (this.o.displayPrevious) {
                ea = this.startAngle + this.angle(this.v);
                this.o.cursor && (sa = ea - 0.3) && (ea = ea + 0.3);
                this.g.beginPath();
                this.g.strokeStyle = this.pColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                this.g.stroke();
            }
            this.g.beginPath();
            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
            this.g.stroke();
            this.g.lineWidth = 2;
            this.g.beginPath();
            this.g.strokeStyle = this.o.fgColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
            this.g.stroke();
            return false;
        }
    }
});

$(".yellowKnob").knob({
    fgColor: "#ecd06f",
    min: 0,
    max: 100,
    step: 5,
    angleOffset: 0,
    angleArc: 360,
    stopper: true,
    readOnly: true,
    cursor: false,
    lineCap: 'none',
    thickness: '0.03',
    width: 150,
    displayInput: true,
    displayPrevious: true,
    inputColor: '#999999',
    font: 'Lato',
    fontWeight: 'normal',
    bgColor: '#EEEEEE',
    draw: function() {
        if (this.$.data('skin') == 'tron') {
            var a = this.angle(this.cv), // Angle

                sa = this.startAngle, // Previous start angle

                sat = this.startAngle, // Start angle

                ea, // Previous end angle
                eat = sat + a, // End angle

                r = 1;
            this.g.lineWidth = this.lineWidth;
            this.o.cursor && (sat = eat - 0.3) && (eat = eat + 0.3);
            if (this.o.displayPrevious) {
                ea = this.startAngle + this.angle(this.v);
                this.o.cursor && (sa = ea - 0.3) && (ea = ea + 0.3);
                this.g.beginPath();
                this.g.strokeStyle = this.pColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                this.g.stroke();
            }
            this.g.beginPath();
            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
            this.g.stroke();
            this.g.lineWidth = 2;
            this.g.beginPath();
            this.g.strokeStyle = this.o.fgColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
            this.g.stroke();
            return false;
        }
    }
});

$(".lightblueKnob").knob({
    fgColor: "#1eb9c1",
    min: 0,
    max: 100,
    step: 5,
    angleOffset: 0,
    angleArc: 360,
    stopper: true,
    readOnly: true,
    cursor: false,
    lineCap: 'none',
    thickness: '0.03',
    width: 150,
    displayInput: true,
    displayPrevious: true,
    inputColor: '#999999',
    font: 'Lato',
    fontWeight: 'normal',
    bgColor: '#EEEEEE',
    draw: function() {
        if (this.$.data('skin') == 'tron') {
            var a = this.angle(this.cv), // Angle

                sa = this.startAngle, // Previous start angle

                sat = this.startAngle, // Start angle

                ea, // Previous end angle
                eat = sat + a, // End angle

                r = 1;
            this.g.lineWidth = this.lineWidth;
            this.o.cursor && (sat = eat - 0.3) && (eat = eat + 0.3);
            if (this.o.displayPrevious) {
                ea = this.startAngle + this.angle(this.v);
                this.o.cursor && (sa = ea - 0.3) && (ea = ea + 0.3);
                this.g.beginPath();
                this.g.strokeStyle = this.pColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                this.g.stroke();
            }
            this.g.beginPath();
            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
            this.g.stroke();
            this.g.lineWidth = 2;
            this.g.beginPath();
            this.g.strokeStyle = this.o.fgColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
            this.g.stroke();
            return false;
        }
    }
});