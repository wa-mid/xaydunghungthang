
(function ($) {
    var myVar = setInterval(myTimer, 1000 * 60);
    function myTimer() {
        $.get("~/services/resetSession.ashx", function (data) { });
    };

    if ($(".onav-sticky").length > 0 && $('#oMenu').length > 0) {
        $(window).scroll(function (e) {
            var scroller_anchor = $(".onav-sticky").offset().top;
            if ($(this).scrollTop() >= scroller_anchor && $('#oMenu').css('position') != 'fixed') {
                $('#oMenu').addClass("sticked");
                $('.onav-sticky').css('height', $('#oMenu').height());
            } else if ($(this).scrollTop() < scroller_anchor && $('#oMenu').css('position') != 'relative') {
                $('.onav-sticky').css('height', '0');
                $('#oMenu').removeClass("sticked");
            }
        });
    }

    if ($("#shareBtn").length > 0) {
        window.fbAsyncInit = function () {
            FB.init({
                appId: '117493618946165',
                xfbml: true,
                version: 'v2.10'
            });
            FB.AppEvents.logPageView();
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        document.getElementById('shareBtn').onclick = function () {
            FB.ui({
                method: 'share',
                mobile_iframe: true,
                href: window.location.href,
            }, function (response) { });
        }
    }

    if ($(".scroller_anchor").length > 0 && $('.SerInfo').length > 0) {
        $(window).scroll(function (e) {
            var scroller_anchor = $(".scroller_anchor").offset().top;
            if ($(this).scrollTop() >= scroller_anchor && $('.SerInfo').css('position') != 'fixed') {
                $('.SerInfo').css({ 'position': 'fixed', 'top': '60px', 'width': $(".col_left").width(), });
            } else if ($(this).scrollTop() < scroller_anchor && $('.SerInfo').css('position') != 'relative') {
                $('.scroller_anchor').css('height', '0px');
                $('.SerInfo').css({ 'position': 'relative', 'top': '0', });
            }
        });
    }


    $(document).ready(function ($) {
        //Check to see if the window is top if not then display button
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });
    
        //Click event to scroll to top
        $('.scrollToTop').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });

        try {
            var owl = $('.carousel-one1');
            owl.owlCarousel({
                items:1,
                loop:true,
                margin: 20,
                dots: false,
                autoplay: true,
                autoplayHoverPause: true,
                nav: true
            });
        } catch(err) {
        }

        try {
            var owl = $('.owl-server');
            owl.owlCarousel({
                items: 1,
                loop: true,
                dots: false,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                autoplay: true
            });
        } catch (err) {
        }

        try {
            var owl = $('.owl-album');
            owl.owlCarousel({
                items: 1,
                thumbs: true,
                thumbImage: true,
                nav: true,
                dots: false,
                autoplay: true
            });
        } catch (err) {
        }
    
        try {
            var owl = $('.carousel-4');
            owl.owlCarousel({
                //autoWidth: true,
                margin: 20,
                loop: true,
                dots: false,
                nav: true,
                responsiveClass: true,
                responsive: {
                    0: { items: 2 },
                    640: { items: 3 },
                    768: { items: 4, margin: 30, }
                }
            });
        } catch(err) {
        }

        if ($("#dk-form").length > 0) {
            var validk = new Validation('dk-form', { immediate: true });
        };
        if ($("#search-form").length > 0) {
            var valisearch = new Validation('search-form', { immediate: true });
        };

        if ($("#contacts-form").length > 0) {
            var valicontacts = new Validation('contacts-form', { immediate: true });
        };
        if ($("#contacts2-form").length > 0) {
            var valicontacts = new Validation('contacts2-form', {immediate: true });
        };
    });
})(jQuery);