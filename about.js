$(document).ready(function () {

    $("#pageUpBtn").on('click', function(){
        // $("#pageUpBtn").animate({opacity: "0"}, 300);
        console.log("testing");
        
    });

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $(window).scroll(function () {

        console.log("Nav Height: " + $("nav").innerHeight());

        console.log("Hero Height: " + $(".heroSection").innerHeight());
        console.log("Current Scroll: " + $(window).scrollTop());

        if ($(window).scrollTop() > 0) {

            var about = $("#expandAbout");
            var work = $("#expandWork");
            var contact = $("#expandContact");

            var facebook = $("#fbLink");
            var linkedln = $("#linkedLink");
            var github = $("#gitLink");
            var email = $("#mailLink");
            var twitter = $("#tweetLink");

            $(".bars").removeClass("clicked");
            $(".expandNav-closed").removeClass("expandNav-open");
            $(".bars").css("pointer-events", "auto");

            work.animate({ opacity: '0', left: '200px' }, 0);
            about.animate({ opacity: '0', left: '200px' }, 0);
            contact.animate({ opacity: '0', left: '200px' }, 0);

            facebook.animate({ opacity: '0', left: '50px' }, 0);
            linkedln.animate({ opacity: '0', left: '50px' }, 0);
            github.animate({ opacity: '0', left: '50px' }, 0);
            email.animate({ opacity: '0', left: '50px' }, 0);
            twitter.animate({ opacity: '0', left: '50px' }, 0);
        }

        if ($(window).scrollTop() > ($(".heroSection").innerHeight() / 2)) {
            var card1 = $(".work #card1");
            var card2 = $(".work #card2");
            var card3 = $(".work #card3");

            card1.delay(300).animate({ opacity: '1' }, 500);
            card2.delay(900).animate({ opacity: '1' }, 500);
            card3.delay(1500).animate({ opacity: '1' }, 500);
        }

        if ($(window).scrollTop() > ($("nav").innerHeight())){
            $("#pageUpBtn").animate({opacity: "1"}, 500);
        }

    });

    // $("body").css("backgroundColor", "lightBlue");
    checkWidth();
    checkHeight();
    $(window).resize(checkWidth);
    $(window).resize(checkHeight);

    $(".bars").on('click', function () {
        $(".bars").toggleClass("clicked");
        $(".expandNav-closed").toggleClass("expandNav-open");

        var about = $("#expandAbout");
        var work = $("#expandWork");
        var contact = $("#expandContact");

        var facebook = $("#fbLink");
        var linkedln = $("#linkedLink");
        var github = $("#gitLink");
        var email = $("#mailLink");
        var twitter = $("#tweetLink");

        if ($(".expandNav-closed").hasClass("expandNav-open")) {

            $(".bars").css("pointer-events", "none");

            work.delay(300).animate({ opacity: '1', left: '0' }, 400);
            about.delay(600).animate({ opacity: '1', left: '0' }, 400);
            contact.delay(900).animate({ opacity: '1', left: '0' }, 400);

            facebook.delay(1200).animate({opacity: '1', left: '0' }, 200);
            linkedln.delay(1350).animate({opacity: '1', left: '0' }, 200);
            github.delay(1500).animate({opacity: '1', left: '0' }, 200);
            email.delay(1650).animate({opacity: '1', left: '0' }, 200);
            twitter.delay(1800).animate({ opacity: '1', left: '0' }, 200).promise().done(function () {
                $(".bars").css("pointer-events", "auto");
            });


        }
        else {

            // LEFT OFF WORK HERE!!

            about.animate({ opacity: '0', left: '200px' }, 00);
            work.animate({ opacity: '0', left: '200px' }, 00);
            contact.animate({ opacity: '0', left: '200px' }, 00);

            facebook.animate({ opacity: '0', left: '50px' }, 00);
            linkedln.animate({ opacity: '0', left: '50px' }, 00);
            github.animate({ opacity: '0', left: '50px' }, 00);
            email.animate({ opacity: '0', left: '50px' }, 00);
            twitter.animate({ opacity: '0', left: '50px' }, 00);

        }


    });

});

function checkWidth() {

    console.log("Width: " + $("body").innerWidth());

    var curWidth = $("body").innerWidth();

    if (curWidth < 1000) {
        $(".navList").addClass("navItem-collapse");
        $(".bars").removeClass("navItem-collapse");
    }
    else {
        $(".navList").removeClass("navItem-collapse");
        $(".bars").addClass("navItem-collapse");
        $(".expandNav-closed").removeClass("expandNav-open");
    }
}

function checkHeight() {

    console.log("Height: " + $(window).innerHeight());

    var height = $(window).innerHeight();

    if (height < 550){
        $(".heroPara").css({
            top: "25px"
        });
    }
    else {
        $(".heroPara").css({
            top: "100px"
        });
    }

    if (height < 600) {
        $(".expandNav-closed .profilePic").css({
            height: "40%"
        });
        $(".expandNav-closed .navList").css({
            height: "40%",
            fontSize: "0.7rem"
        });
        $(".expandNav-closed .navList .navItem").css({
            padding: "10px 0"
        });
        $(".expandNav-closed .profilePic .circle").css({
            height: "100px",
            width: "100px"
        });
    }
    else {
        $(".expandNav-closed .profilePic").css({
            height: "50%"
        });
        $(".expandNav-closed .navList").css({
            height: "35%",
            fontSize: "1.5rem"
        });
        $(".expandNav-closed .navList .navItem").css({
            padding: "10px 0"
        });
        $(".expandNav-closed .profilePic .circle").css({
            height: "200px",
            width: "200px"
        });
    }

}
