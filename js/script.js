// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';

$(window).on("scroll", function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 80) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header')
    }
});

//Doc Ready
$(document).ready(function () {

    //Typed
    new Typed('#type-it', {
        strings: ['Designer', 'Developer', 'Freelancer'],
        typeSpeed: 80,
        loop: true
    });

    //Owl
    $('.owl-carousel').owlCarousel({
        dots: true,
        loop: true,
        margin: 30,
        items: 2,
        stagePadding: 2,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            900: {
                items: 2
            },
        }
    });

    //scroll
    $.scrollIt({
        easing: 'linear',
        topOffset: -70
    });
});

//Email JS
function sendEmail() {
    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_59esgog", "template_121hkrg", templateParams).then(() => alert("Email Sent Successfully!"));
    })
}
