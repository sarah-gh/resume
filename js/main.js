jQuery(document).ready(function($) {

    $("#triangle1").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#section1").offset().top - 140
        }, 500);
    });

    $("#triangle2").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#section2").offset().top - 160
        }, 500);
    });

    $("#triangle3").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#section3").offset().top - 120
        }, 500);
    });


    $("#triangle4").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#team").offset().top - 120
        }, 500);
    });

    $("#triangle5").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#section4").offset().top - 120
        }, 500);
    });
    $("#sectionBtn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: 0
        }, 1000);
    });
    $("#section1Btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#section1").offset().top - 140
        }, 1000);
    });
    $("#section2Btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#section2").offset().top - 110
        }, 1000);
    });
    $("#section3Btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#section3").offset().top - 110
        }, 1000);
    });
    $("#section4Btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#section4").offset().top - 110
        }, 1000);
    });

    $("#section5Btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#team").offset().top - 150
        }, 1000);
    });

    $("#section6Btn").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#custome").offset().top - 110
        }, 1000);
    });

    let scroll_w;
    $("#sectionBtn").addClass("active-nav");
    console.log($("#team").offset().top);
    $(window).scroll(function() {
        scroll_w = window.scrollY;
        console.log(scroll_w);
        if (scroll_w <= $("#section1").offset().top) {
            $("#sectionBtn").addClass("active-nav");
            $("#section1Btn").removeClass("active-nav");
            $("#section2Btn").removeClass("active-nav");
            $("#section3Btn").removeClass("active-nav");
            $("#section4Btn").removeClass("active-nav");
        }
        if (scroll_w >= $("#section1").offset().top - 300 && scroll_w <= $("#section2").offset().top - 300) {
            $("#section1Btn").addClass("active-nav");
            $("#sectionBtn").removeClass("active-nav");
            $("#section2Btn").removeClass("active-nav");
            $("#section3Btn").removeClass("active-nav");
            $("#section4Btn").removeClass("active-nav");
        }
        if (scroll_w >= $("#section2").offset().top - 300 && scroll_w <= $("#section3").offset().top - 300) {
            $("#section2Btn").addClass("active-nav");
            $("#sectionBtn").removeClass("active-nav");
            $("#section1Btn").removeClass("active-nav");
            $("#section3Btn").removeClass("active-nav");
            $("#section4Btn").removeClass("active-nav");
        }
        if (scroll_w >= $("#section3").offset().top - 300 && scroll_w <= $("#section4").offset().top - 800) {
            $("#section3Btn").addClass("active-nav");
            $("#sectionBtn").removeClass("active-nav");
            $("#section1Btn").removeClass("active-nav");
            $("#section2Btn").removeClass("active-nav");
            $("#section4Btn").removeClass("active-nav");
        }

        if (scroll_w >= $("#section4").offset().top - 800 && scroll_w <= $("footer").offset().top) {
            $("#section4Btn").addClass("active-nav");
            $("#sectionBtn").removeClass("active-nav");
            $("#section1Btn").removeClass("active-nav");
            $("#section3Btn").removeClass("active-nav");
            $("#section2Btn").removeClass("active-nav");
        }
    });

    $(".gallery .pic").fadeOut();
    $("#item1-gallery").click(function() {
        $("#item1-gallery").addClass("active-item");
        $("#item2-gallery").removeClass("active-item");
        $(".gallery .pic").fadeOut(0);
        $(".gallery .project").fadeIn(1000);
    });
    $("#item2-gallery").click(function() {
        $("#item2-gallery").addClass("active-item");
        $("#item1-gallery").removeClass("active-item");
        $(".gallery .project").fadeOut(0);
        $(".gallery .pic").fadeIn(1000);
    });


    let services = [true, true, true, true, true, true, true, true]
    for (let i = 1; i < 9; i++) {
        $(".services-after" + i).fadeOut(0);
    }
    let servicesClassName, servicesNum;
    $(".i-services").click(function() {
        servicesClassName = this.className;
        servicesNum = servicesClassName.charAt(servicesClassName.length - 1);
        let i = servicesNum;
        if (services[i - 1] == true) {
            $(".services-before" + i).first().fadeOut(0);
            $(".services-after" + i).fadeIn(300);
            $(".i-services" + i).css({ 'transform': 'rotate(180deg)' });
            console.log('services' + i);
            services[i - 1] = false;
            console.log(services[i - 1]);
        } else {
            $(".services-after" + i).first().fadeOut(0);
            $(".services-before" + i).fadeIn(300);
            $(".i-services" + i).css({ 'transform': 'rotate(0deg)' });
            console.log('services' + i);
            services[i - 1] = true;
            console.log(services[i - 1]);
        }
    });

    let event = [true, true, true];
    for (let i = 1; i < 9; i++) {
        $(".event-after" + i).fadeOut(0);
    }
    let eventClassName, eventNum;

    $(".i-event").click(function() {
        eventClassName = this.className;
        eventNum = eventClassName.charAt(eventClassName.length - 1);
        let i = eventNum;
        if (event[i - 1] === true) {
            $(".event-before" + i).fadeOut(0);
            $(".event-after" + i).fadeIn(500);
            $(".i-event" + i).css({
                'transform': 'rotate(180deg)'
            });
            console.log('event');
            event[i - 1] = false;
            setTimeout(function() {
                $(".event-before" + i).fadeIn("slow");
                $(".event-after" + i).fadeOut(0);
                $(".i-event" + i).css({
                    'transform': 'rotate(0deg)'
                });
                console.log('event');
                event[i - 1] = true;
            }, 5000);

        } else if (event[i - 1] === false) {
            $(".event-before" + i).fadeIn("slow");
            $(".event-after" + i).fadeOut(0);
            $(".i-event" + i).css({
                'transform': 'rotate(0deg)'
            });
            console.log('event');
            event[i - 1] = true;

        }
    });

    // let projects = [true, true, true];
    // for (let i = 1; i < 9; i++) {
    //     $(".project-after" + i).fadeOut(0);
    // }
    // let projectClassName, projectNum;

    // $(".i-project").click(function() {
    //     projectClassName = this.className;
    //     projectNum = projectClassName.charAt(projectClassName.length - 1);
    //     let i = projectNum;
    //     if (projects[i - 1] === true) {
    //         $(".project-before" + i).fadeOut(0);
    //         $(".project-after" + i).fadeIn(1000);
    //         $(".i-project" + i).css({
    //             'transform': 'rotate(180deg)'
    //         });
    //         console.log('project');
    //         projects[i - 1] = false;
    //         setTimeout(function() {
    //             $(".project-before" + i).fadeIn("slow");
    //             $(".project-after" + i).fadeOut(0);
    //             $(".i-project" + i).css({
    //                 'transform': 'rotate(0deg)'
    //             });
    //             console.log('project');
    //             projects[i - 1] = true;
    //         }, 5000);

    //     } else if (projects[i - 1] === false) {
    //         $(".project-before" + i).fadeIn("slow");
    //         $(".project-after" + i).fadeOut(0);
    //         $(".i-project" + i).css({
    //             'transform': 'rotate(0deg)'
    //         });
    //         console.log('project');
    //         projects[i - 1] = true;

    //     }
    // });

});


$('#carousel2 div').click(function() {
    moveToSelected($(this));
});

$('#prev2').click(function() {
    moveToSelected('prev');
});

$('#next2').click(function() {
    moveToSelected('next');
});