!function(n){"use strict";"object"!=typeof qodef&&(window.qodef={}),window.qodefCore={},qodefCore.shortcodes={},qodefCore.listShortcodesScripts={qodefSwiper:qodef.qodefSwiper,qodefPagination:qodef.qodefPagination,qodefFilter:qodef.qodefFilter,qodefMasonryLayout:qodef.qodefMasonryLayout,qodefJustifiedGallery:qodef.qodefJustifiedGallery},qodefCore.body=n("body"),qodefCore.html=n("html"),qodefCore.windowWidth=n(window).width(),qodefCore.windowHeight=n(window).height(),qodefCore.scroll=0,n(document).ready(function(){qodefCore.scroll=n(window).scrollTop(),e.init()}),n(window).resize(function(){qodefCore.windowWidth=n(window).width(),qodefCore.windowHeight=n(window).height()}),n(window).scroll(function(){qodefCore.scroll=n(window).scrollTop()});var t={disable:function(){window.addEventListener&&window.addEventListener("wheel",t.preventDefaultValue,{passive:!1}),document.onkeydown=t.keyDown},enable:function(){window.removeEventListener&&window.removeEventListener("wheel",t.preventDefaultValue,{passive:!1}),window.onmousewheel=document.onmousewheel=document.onkeydown=null},preventDefaultValue:function(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1},keyDown:function(e){for(var o=[37,38,39,40],n=o.length;n--;)if(e.keyCode===o[n])return void t.preventDefaultValue(e)}};qodefCore.qodefScroll=t;var o={init:function(e){e.length&&o.qodefInitScroll(e)},qodefInitScroll:function(e){var o=new PerfectScrollbar(e.selector,{wheelSpeed:.6,suppressScrollX:!0});n(window).resize(function(){o.update()})}};qodefCore.qodefPerfectScrollbar=o;var e={init:function(){if(this.holder=n("#mellifera-core-page-inline-style"),this.holder.length){var e=this.holder.data("style");e.length&&n("head").append('<style type="text/css">'+e+"</style>")}}}}(jQuery),function(i){"use strict";i(document).ready(function(){d.init()});var d={init:function(){this.holder=i("#qodef-back-to-top"),this.holder.length&&(this.holder.on("click",function(e){e.preventDefault(),d.animateScrollToTop()}),d.showHideBackToTop())},animateScrollToTop:function(){var o,n=qodef.scroll,t=qodef.scroll,r=function(){if(0!==t){t<1e-4&&(t=0);var e=d.easingFunction((n-t)/n);i("html, body").scrollTop(n-(n-t)*e),t*=.9,o=requestAnimationFrame(r)}};r(),i(window).one("wheel touchstart",function(){cancelAnimationFrame(o)})},easingFunction:function(e){return 0==e?0:Math.pow(1024,e-1)},showHideBackToTop:function(){i(window).scroll(function(){var e=i(this),o=e.scrollTop(),n=e.height();(0<o?o+n/2:1)<1e3?d.addClass("off"):d.addClass("on")})},addClass:function(e){this.holder.removeClass("qodef--off qodef--on"),"on"===e?this.holder.addClass("qodef--on"):this.holder.addClass("qodef--off")}}}(jQuery),function(n){"use strict";n(window).load(function(){e.init()});var e={holder:"",init:function(){this.holder=n("#qodef-page-footer.qodef--uncover"),this.holder.length&&!qodefCore.html.hasClass("touchevents")&&(e.addClass(),e.setHeight(this.holder),n(window).resize(function(){e.setHeight(e.holder)}))},setHeight:function(e){e.css("height","auto");var o=e.outerHeight();0<o&&(n("#qodef-page-outer").css({"margin-bottom":o,"background-color":qodefCore.body.css("backgroundColor")}),e.css("height",o))},addClass:function(){qodefCore.body.addClass("qodef-page-footer--uncover")}}}(jQuery),function(n){"use strict";n(document).ready(function(){t.init()});var t={init:function(){var e=n("a.qodef-fullscreen-menu-opener"),o=n("#qodef-fullscreen-area nav ul li a");e.on("click",function(e){e.preventDefault(),qodefCore.body.hasClass("qodef-fullscreen-menu--opened")?t.closeFullscreen():(t.openFullscreen(),n(document).keyup(function(e){27===e.keyCode&&t.closeFullscreen()}))}),o.on("tap click",function(e){var o=n(this);o.parent().hasClass("menu-item-has-children")?(e.preventDefault(),t.clickItemWithChild(o)):"http://#"!==n(this).attr("href")&&"#"!==n(this).attr("href")&&t.closeFullscreen()})},openFullscreen:function(){qodefCore.body.removeClass("qodef-fullscreen-menu-animate--out").addClass("qodef-fullscreen-menu--opened qodef-fullscreen-menu-animate--in"),qodefCore.qodefScroll.disable()},closeFullscreen:function(){qodefCore.body.removeClass("qodef-fullscreen-menu--opened qodef-fullscreen-menu-animate--in").addClass("qodef-fullscreen-menu-animate--out"),qodefCore.qodefScroll.enable(),n("nav.qodef-fullscreen-menu ul.sub_menu").slideUp(200)},clickItemWithChild:function(e){var o=e.parent(),n=o.find(".sub-menu").first();n.is(":visible")?n.slideUp(300):(n.slideDown(300),o.siblings().find(".sub-menu").slideUp(400))}}}(jQuery),function(){"use strict";jQuery(document).ready(function(){e.init()});var e={appearanceType:function(){return-1!==qodefCore.body.attr("class").indexOf("qodef-header-appearance--")?qodefCore.body.attr("class").match(/qodef-header-appearance--([\w]+)/)[1]:""},init:function(){var e=this.appearanceType();""!==e&&"none"!==e&&qodefCore[e+"HeaderAppearance"]()}}}(),function(i){"use strict";function e(){i(document).on("click",".qodef-like",function(){var o=i(this),e=o.attr("id"),n=o.data("post-id"),t="";if(o.hasClass("liked"))return!1;void 0!==o.data("type")&&(t=o.data("type"));var r={action:"mellifera_core_action_like",likes_id:e,type:t,like_nonce:i("#qodef_like_nonce_"+n).val()};i.post(qodefGlobal.vars.qodefAjaxUrl,r,function(e){o.html(e).addClass("liked").attr("title","You already like this!")});return!1})}i(document).ready(e)}(jQuery),function(t){"use strict";t(document).ready(function(){r.init()});var r={init:function(){if(qodefCore.body.hasClass("qodef-mobile-header-appearance--sticky")){var e=qodefCore.scroll,o=qodefGlobal.vars.mobileHeaderHeight+qodefGlobal.vars.adminBarHeight,n=t("#qodef-page-outer");r.showHideMobileHeader(e,o,n),t(window).scroll(function(){r.showHideMobileHeader(e,o,n),e=qodefCore.scroll}),t(window).resize(function(){n.css("padding-top",0),r.showHideMobileHeader(e,o,n)})}},showHideMobileHeader:function(e,o,n){qodefCore.windowWidth<=1024&&(qodefCore.scroll>2*o?(qodefCore.body.addClass("qodef-mobile-header--sticky"),setTimeout(function(){qodefCore.body.addClass("qodef-mobile-header--sticky-animation")},300),n.css("padding-top",qodefGlobal.vars.mobileHeaderHeight)):(qodefCore.body.removeClass("qodef-mobile-header--sticky"),setTimeout(function(){qodefCore.body.removeClass("qodef-mobile-header--sticky-animation")},300),n.css("padding-top",0)),qodefCore.scroll>e&&qodefCore.scroll>o||qodefCore.scroll<3*o?qodefCore.body.removeClass("qodef-mobile-header--sticky-display"):qodefCore.body.addClass("qodef-mobile-header--sticky-display"))}}}(jQuery),function(a){"use strict";a(document).ready(function(){e.init()});var e={init:function(){e.dropdownBehavior(),e.wideDropdownPosition(),e.dropdownPosition()},dropdownBehavior:function(){a(".qodef-header-navigation > ul > li").each(function(){var r=a(this);r.find(".qodef-drop-down-second").length&&r.waitForImages(function(){var e=r.find(".qodef-drop-down-second"),o=e.find(".qodef-drop-down-second-inner ul").outerHeight();if(navigator.userAgent.match(/(iPod|iPhone|iPad)/))r.on("touchstart mouseenter",function(){e.css({height:o,overflow:"visible",visibility:"visible",opacity:"1"})}).on("mouseleave",function(){e.css({height:"0px",overflow:"hidden",visibility:"hidden",opacity:"0"})});else if(qodefCore.body.hasClass("qodef-drop-down-second--animate-height")){var n={interval:0,over:function(){setTimeout(function(){e.addClass("qodef-drop-down--start").css({visibility:"visible",height:"0",opacity:"1"}),e.stop().animate({height:o},400,"easeInOutQuint",function(){e.css("overflow","visible")})},100)},timeout:100,out:function(){e.stop().animate({height:"0",opacity:0},100,function(){e.css({overflow:"hidden",visibility:"hidden"})}),e.removeClass("qodef-drop-down--start")}};r.hoverIntent(n)}else{var t={interval:0,over:function(){setTimeout(function(){e.addClass("qodef-drop-down--start").stop().css({height:o})},150)},timeout:150,out:function(){e.stop().css({height:"0"}).removeClass("qodef-drop-down--start")}};r.hoverIntent(t)}})})},wideDropdownPosition:function(){var e=a(".qodef-header-navigation > ul > li.qodef-menu-item--wide");e.length&&e.each(function(){var e=a(this).find(".qodef-drop-down-second");if(e.length){e.css("left",0);var o=e.offset().left;if(qodefCore.body.hasClass("qodef--boxed")){var n=a(".qodef--boxed #qodef-page-wrapper").outerWidth();o-=(qodefCore.windowWidth-n)/2,e.css({left:-o,width:n})}else qodefCore.body.hasClass("qodef-drop-down-second--full-width")?e.css({left:-o}):e.css({left:-o+(qodefCore.windowWidth-e.width())/2})}})},dropdownPosition:function(){var e=a(".qodef-header-navigation > ul > li.qodef-menu-item--narrow.menu-item-has-children");e.length&&e.each(function(){var e,o=a(this),n=o.offset().left,t=o.find(".qodef-drop-down-second"),r=t.find(".qodef-drop-down-second-inner ul"),i=r.outerWidth(),d=a(window).width()-n;qodef.body.hasClass("qodef--boxed")&&(d=a(".qodef--boxed #qodef-page-wrapper").outerWidth()-n);0<o.find("li.menu-item-has-children").length&&(e=d-i),t.removeClass("qodef-drop-down--right"),r.removeClass("qodef-drop-down--right"),(d<i||e<i)&&(t.addClass("qodef-drop-down--right"),r.addClass("qodef-drop-down--right"))})}}}(jQuery),function(t){"use strict";t(window).load(function(){d.init()});var d={init:function(e){this.$sections=t(".qodef-parallax"),t.extend(this.$sections,e);var o=!qodefCore.html.hasClass("touchevents")&&!qodefCore.body.hasClass("qodef-browser--edge")&&!qodefCore.body.hasClass("qodef-browser--ms-explorer");this.$sections.length&&o&&this.$sections.each(function(){d.ready(t(this))})},ready:function(e){e.$imgHolder=e.find(".qodef-parallax-img-holder"),e.$imgWrapper=e.find(".qodef-parallax-img-wrapper"),e.$img=e.find("img");var o=e.height(),n=e.$imgWrapper.height();e.movement=100*(n-o)/o/2,e.buffer=window.pageYOffset,e.scrollBuffer=null,requestAnimationFrame(function(){e.$imgHolder.animate({opacity:1},100),d.calc(e),d.loop(e)}),t(window).on("resize",function(){d.calc(e)})},calc:function(e){var o=e.$imgWrapper.height(),n=e.$imgWrapper.width();e.$img.width()<n&&e.$img.css({width:"100%",height:"auto"}),e.$img.height()<o&&e.$img.css({height:"100%",width:"auto","max-width":"unset"})},loop:function(e){if(e.scrollBuffer===Math.round(window.pageYOffset))return requestAnimationFrame(function(){d.loop(e)}),!1;e.scrollBuffer=Math.round(window.pageYOffset);var o=window.outerHeight,n=e.offset().top,t=e.height();if(e.scrollBuffer+1.2*o>n&&e.scrollBuffer<n+t){var r=(Math.abs(e.scrollBuffer+o-n)/(o+t)).toFixed(4),i=(r*e.movement).toFixed(4);e.buffer!==r&&e.$imgWrapper.css("transform","translate3d(0,"+i+"%, 0)"),e.buffer=r}requestAnimationFrame(function(){d.loop(e)})}};qodefCore.qodefParallaxBackground=d}(jQuery),function(t){"use strict";t(document).ready(function(){r.init()});var r={init:function(){var e=t("a.qodef-side-area-opener"),o=t("#qodef-side-area-close"),n=t("#qodef-side-area");r.openerHoverColor(e),e.on("click",function(e){e.preventDefault(),qodefCore.body.hasClass("qodef-side-area--opened")?r.closeSideArea():(r.openSideArea(),t(document).keyup(function(e){27===e.keyCode&&r.closeSideArea()}))}),o.on("click",function(e){e.preventDefault(),r.closeSideArea()}),n.length&&"object"==typeof qodefCore.qodefPerfectScrollbar&&qodefCore.qodefPerfectScrollbar.init(n)},openSideArea:function(){var e=t("#qodef-page-wrapper"),o=t(window).scrollTop();t(".qodef-side-area-cover").remove(),e.prepend('<div class="qodef-side-area-cover"/>'),qodefCore.body.removeClass("qodef-side-area-animate--out").addClass("qodef-side-area--opened qodef-side-area-animate--in"),t(".qodef-side-area-cover").on("click",function(e){e.preventDefault(),r.closeSideArea()}),t(window).scroll(function(){400<Math.abs(qodefCore.scroll-o)&&r.closeSideArea()})},closeSideArea:function(){qodefCore.body.removeClass("qodef-side-area--opened qodef-side-area-animate--in").addClass("qodef-side-area-animate--out")},openerHoverColor:function(e){if(void 0!==e.data("hover-color")){var o=e.data("hover-color"),n=e.css("color");e.on("mouseenter",function(){e.css("color",o)}).on("mouseleave",function(){e.css("color",n)})}}}}(jQuery),function(r){"use strict";r(window).on("elementor/frontend/init",function(){Boolean(elementorFrontend.isEditMode())&&t.fadeOutLoader(r("#qodef-page-spinner:not(.qodef--custom-spinner)"))}),r(document).ready(function(){t.init()});var t={init:function(){this.holder=r("#qodef-page-spinner:not(.qodef--custom-spinner)"),this.holder.length&&(t.animateSpinner(this.holder),t.fadeOutAnimation())},animateSpinner:function(e){e.hasClass("qodef-layout--bee-svg")&&e.find(".qodef-m-predefined").addClass("qodef-spinner-animate");var o=r(".qodef-landing-intro"),n=r(".qodef-landing-intro-holder");r(window).on("load",function(){t.fadeOutLoader(e),setTimeout(function(){e.find(".qodef-m-predefined").removeClass("qodef-spinner-animate")},4e3),o.length&&setTimeout(function(){o.addClass("qodef-landing-intro--appeared")},3500),n.length&&setTimeout(function(){n.addClass("qodef-landing-intro-holder--appeared")},4700)})},fadeOutLoader:function(o,n,e,t){n=n||600,e=e||3500,t=t||"swing",o.delay(e).fadeOut(n,t),r(window).on("bind","pageshow",function(e){e.originalEvent.persisted&&o.fadeOut(n,t)})},fadeOutAnimation:function(){if(qodefCore.body.hasClass("qodef-spinner--fade-out")){var n=r("#qodef-page-wrapper"),e=r("a");window.addEventListener("pageshow",function(e){(e.persisted||void 0!==window.performance&&2===window.performance.navigation.type)&&!n.is(":visible")&&n.show()}),e.on("click",function(e){var o=r(this);1===e.which&&0<=o.attr("href").indexOf(window.location.host)&&!o.hasClass("remove")&&o.parent(".product-remove").length<=0&&o.parents(".woocommerce-product-gallery__image").length<=0&&void 0===o.data("rel")&&void 0===o.attr("rel")&&!o.hasClass("lightbox-active")&&(void 0===o.attr("target")||"_self"===o.attr("target"))&&o.attr("href").split("#")[0]!==window.location.href.split("#")[0]&&(e.preventDefault(),n.fadeOut(600,"easeOutSine",function(){window.location=o.attr("href")}))})}}}}(jQuery),function(t){"use strict";qodefCore.shortcodes.mellifera_core_accordion={},t(document).ready(function(){o.init()});var o={init:function(){this.holder=t(".qodef-accordion"),this.holder.length&&this.holder.each(function(){var e=t(this);e.hasClass("qodef-behavior--accordion")&&o.initAccordion(e),e.hasClass("qodef-behavior--toggle")&&o.initToggle(e),e.addClass("qodef--init")})},initAccordion:function(e){e.accordion({animate:"swing",collapsible:!0,active:0,icons:"",heightStyle:"content"})},initToggle:function(e){var o=e.find(".qodef-accordion-title"),n=o.next();e.addClass("accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset"),o.addClass("ui-accordion-header ui-state-default ui-corner-top ui-corner-bottom"),n.addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(),o.each(function(){var e=t(this);e.hover(function(){e.toggleClass("ui-state-hover")}),e.on("click",function(){e.toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom"),e.next().toggleClass("ui-accordion-content-active").slideToggle(400)})})}};qodefCore.shortcodes.mellifera_core_accordion.qodefAccordion=o}(jQuery),function(o){"use strict";qodefCore.shortcodes.mellifera_core_button={},o(document).ready(function(){t.init()});var t={init:function(){this.buttons=o(".qodef-button"),this.buttons.length&&this.buttons.each(function(){var e=o(this);t.buttonHoverColor(e),t.buttonHoverBgColor(e),t.buttonHoverBorderColor(e)})},buttonHoverColor:function(e){if(void 0!==e.data("hover-color")){var o=e.data("hover-color"),n=e.css("color");e.on("mouseenter",function(){t.changeColor(e,"color",o)}),e.on("mouseleave",function(){t.changeColor(e,"color",n)})}},buttonHoverBgColor:function(e){if(void 0!==e.data("hover-background-color")){var o=e.data("hover-background-color"),n=e.css("background-color");e.on("mouseenter",function(){t.changeColor(e,"background-color",o)}),e.on("mouseleave",function(){t.changeColor(e,"background-color",n)})}},buttonHoverBorderColor:function(e){if(void 0!==e.data("hover-border-color")){var o=e.data("hover-border-color"),n=e.css("borderTopColor");e.on("mouseenter",function(){t.changeColor(e,"border-color",o)}),e.on("mouseleave",function(){t.changeColor(e,"border-color",n)})}},changeColor:function(e,o,n){e.css(o,n)}};qodefCore.shortcodes.mellifera_core_button.qodefButton=t}(jQuery),function(i){"use strict";qodefCore.shortcodes.mellifera_core_counter={},i(document).ready(function(){t.init()});var t={init:function(){this.counters=i(".qodef-counter"),this.counters.length&&this.counters.each(function(){var e=i(this),o=e.find(".qodef-m-digit"),n=t.generateOptions(e);t.counterScript(o,n)})},generateOptions:function(e){var o={};return o.start=void 0!==e.data("start-digit")&&""!==e.data("start-digit")?e.data("start-digit"):0,o.end=void 0!==e.data("end-digit")&&""!==e.data("end-digit")?e.data("end-digit"):null,o.step=void 0!==e.data("step-digit")&&""!==e.data("step-digit")?e.data("step-digit"):1,o.delay=void 0!==e.data("step-delay")&&""!==e.data("step-delay")?parseInt(e.data("step-delay"),10):100,o.txt=void 0!==e.data("digit-label")&&""!==e.data("digit-label")?e.data("digit-label"):"",o},counterScript:function(e,o){var n=i.extend({start:0,end:null,step:1,delay:100,txt:""},o||{}),t=n.start,r=n.end;e.text(t+n.txt);setInterval(function(){null!==r&&r<=t||(t+=n.step,r<=t&&(t=r),e.text(t+n.txt))},n.delay)}};qodefCore.shortcodes.mellifera_core_counter.qodefCounter=t}(jQuery),function(e){"use strict";qodefCore.shortcodes.mellifera_core_google_map={},e(document).ready(function(){o.init()});var o={init:function(){this.holder=e(".qodef-google-map"),this.holder.length&&this.holder.each(function(){void 0!==window.qodefGoogleMap&&window.qodefGoogleMap.initMap(e(this).find(".qodef-m-map"))})}};qodefCore.shortcodes.mellifera_core_google_map.qodefGoogleMap=o}(jQuery),function(o){"use strict";qodefCore.shortcodes.mellifera_core_icon={},o(document).ready(function(){r.init()});var r={init:function(){this.icons=o(".qodef-icon-holder"),this.icons.length&&this.icons.each(function(){var e=o(this);r.iconHoverColor(e),r.iconHoverBgColor(e),r.iconHoverBorderColor(e)})},iconHoverColor:function(e){if(void 0!==e.data("hover-color")){var o=e.find("span"),n=o.css("color"),t=e.data("hover-color");e.on("mouseenter",function(){r.changeColor(o,"color",t)}),e.on("mouseleave",function(){r.changeColor(o,"color",n)})}},iconHoverBgColor:function(e){if(void 0!==e.data("hover-background-color")){var o=e.data("hover-background-color"),n=e.css("background-color");e.on("mouseenter",function(){r.changeColor(e,"background-color",o)}),e.on("mouseleave",function(){r.changeColor(e,"background-color",n)})}},iconHoverBorderColor:function(e){if(void 0!==e.data("hover-border-color")){var o=e.data("hover-border-color"),n=e.css("borderTopColor");e.on("mouseenter",function(){r.changeColor(e,"border-color",o)}),e.on("mouseleave",function(){r.changeColor(e,"border-color",n)})}},changeColor:function(e,o,n){e.css(o,n)}};qodefCore.shortcodes.mellifera_core_icon.qodefIcon=r}(jQuery),function(){"use strict";qodefCore.shortcodes.mellifera_core_image_gallery={},qodefCore.shortcodes.mellifera_core_image_gallery.qodefSwiper=qodef.qodefSwiper,qodefCore.shortcodes.mellifera_core_image_gallery.qodefMasonryLayout=qodef.qodefMasonryLayout}(jQuery),function(){"use strict";qodefCore.shortcodes.mellifera_core_info_box={},qodefCore.shortcodes.mellifera_core_info_box.qodefAppear=qodef.qodefAppear}(jQuery),function(){"use strict";qodefCore.shortcodes.mellifera_interactive_showcase_section={},qodefCore.shortcodes.mellifera_interactive_showcase_section.qodefAppear=qodef.qodefAppear}(jQuery),function(e){"use strict";qodefCore.shortcodes.mellifera_core_progress_bar={},e(document).ready(function(){i.init()});var i={init:function(){this.holder=e(".qodef-progress-bar"),this.holder.length&&this.holder.each(function(){var t=e(this),r=t.data("layout");t.appear(function(){t.addClass("qodef--init");var e=t.find(".qodef-m-canvas"),o=i.generateBarData(t,r),n=t.data("number")/100;switch(r){case"circle":i.initCircleBar(e,o,n);break;case"semi-circle":i.initSemiCircleBar(e,o,n);break;case"line":o=i.generateLineData(t,n),i.initLineBar(e,o);break;case"custom":i.initCustomBar(e,o,n)}})})},generateBarData:function(e,n){var o=e.data("active-line-width"),t=e.data("active-line-color"),r=e.data("inactive-line-width"),i=e.data("inactive-line-color");return{strokeWidth:o,color:t,trailWidth:r,trailColor:i,easing:"linear",duration:void 0!==e.data("duration")&&""!==e.data("duration")?parseInt(e.data("duration"),10):1600,svgStyle:{width:"100%",height:"100%"},text:{style:{color:e.data("text-color")},autoStyleContainer:!1},from:{color:i},to:{color:t},step:function(e,o){"custom"!==n&&o.setText(Math.round(100*o.value())+"%")}}},generateLineData:function(e,o){var n=e.data("active-line-width"),t=e.data("active-line-color"),r=e.data("inactive-line-width"),i=e.data("inactive-line-color"),d=void 0!==e.data("duration")&&""!==e.data("duration")?parseInt(e.data("duration"),10):1600,a=e.data("text-color");return{percentage:100*o,duration:d,fillBackgroundColor:t,backgroundColor:i,height:n,inactiveHeight:r,followText:e.hasClass("qodef-percentage--floating"),textColor:a}},initCircleBar:function(e,o,n){i.checkBar(e)&&new ProgressBar.Circle(e[0],o).animate(n)},initSemiCircleBar:function(e,o,n){i.checkBar(e)&&new ProgressBar.SemiCircle(e[0],o).animate(n)},initCustomBar:function(e,o,n){if(i.checkBar(e)){var t=new ProgressBar.Path(e[0],o);t.set(0),t.animate(n)}},initLineBar:function(e,o){e.LineProgressbar(o)},checkBar:function(e){return!e.find("svg").length}};qodefCore.shortcodes.mellifera_core_progress_bar.qodefProgressBar=i}(jQuery),function(i){"use strict";qodefCore.shortcodes.mellifera_core_tabs={},i(document).ready(function(){e.init()});var e={init:function(){this.holder=i(".qodef-tabs"),this.holder.length&&this.holder.each(function(){e.initTabs(i(this))})},initTabs:function(e){e.children(".qodef-tabs-content").each(function(e){e+=1;var o=i(this),n=o.attr("id"),t=o.parent().find(".qodef-tabs-navigation li:nth-child("+e+") a"),r=t.attr("href");-1<(n="#"+n).indexOf(r)&&t.attr("href",n)}),e.addClass("qodef--init").tabs()}};qodefCore.shortcodes.mellifera_core_tabs.qodefTabs=e}(jQuery),function(e){"use strict";var n="mellifera_core_blog_list";qodefCore.shortcodes[n]={},"object"==typeof qodefCore.listShortcodesScripts&&e.each(qodefCore.listShortcodesScripts,function(e,o){qodefCore.shortcodes[n][e]=o})}(jQuery),function(d){"use strict";d(document).ready(function(){n.init()});var n={initNavigation:function(e){var o=e.find(".qodef-header-vertical-navigation");o.hasClass("qodef-vertical-drop-down--below")?n.dropdownClickToggle(o):o.hasClass("qodef-vertical-drop-down--side")&&n.dropdownFloat(o)},dropdownClickToggle:function(e){var i=e.find("ul li.menu-item-has-children");i.each(function(){var o=d(this).find(" > .qodef-drop-down-second, > ul"),n=this,t=d(this).find("> a"),r="fast";t.on("click tap",function(e){e.preventDefault(),e.stopPropagation(),o.is(":visible")?(d(n).removeClass("qodef-menu-item--open"),o.slideUp(r)):(t.parent().parent().children().hasClass("qodef-menu-item--open")&&t.parent().parent().parent().hasClass("qodef-vertical-menu")?(d(this).parent().parent().children().removeClass("qodef-menu-item--open"),d(this).parent().parent().children().find(" > .qodef-drop-down-second").slideUp(r)):(d(this).parents("li").hasClass("qodef-menu-item--open")||(i.removeClass("qodef-menu-item--open"),i.find(" > .qodef-drop-down-second, > ul").slideUp(r)),d(this).parent().parent().children().hasClass("qodef-menu-item--open")&&(d(this).parent().parent().children().removeClass("qodef-menu-item--open"),d(this).parent().parent().children().find(" > .qodef-drop-down-second, > ul").slideUp(r))),d(n).addClass("qodef-menu-item--open"),o.slideDown("slow"))})})},dropdownFloat:function(e){var t=e.find("ul li.menu-item-has-children"),r=t.find(" > .qodef-drop-down-second > .qodef-drop-down-second-inner > ul, > ul");t.each(function(){var o=d(this).find(" > .qodef-drop-down-second > .qodef-drop-down-second-inner > ul, > ul"),n=this;Modernizr.touch?d(this).find("> a").on("click tap",function(e){e.preventDefault(),e.stopPropagation(),o.hasClass("qodef-float--open")?(o.removeClass("qodef-float--open"),d(n).removeClass("qodef-menu-item--open")):(d(this).parents("li").hasClass("qodef-menu-item--open")||(t.removeClass("qodef-menu-item--open"),r.removeClass("qodef-float--open")),o.addClass("qodef-float--open"),d(n).addClass("qodef-menu-item--open"))}):d(this).hoverIntent({over:function(){o.addClass("qodef-float--open"),d(n).addClass("qodef-menu-item--open")},out:function(){o.removeClass("qodef-float--open"),d(n).removeClass("qodef-menu-item--open")},timeout:300})})},verticalAreaScrollable:function(e){return e.hasClass("qodef-with-scroll")},initVerticalAreaScroll:function(e){n.verticalAreaScrollable(e)&&"object"==typeof qodefCore.qodefPerfectScrollbar&&qodefCore.qodefPerfectScrollbar.init(e)},init:function(){var e=d(".qodef-header--vertical #qodef-page-header");e.length&&(n.initNavigation(e),n.initVerticalAreaScroll(e))}}}(jQuery),function(n){"use strict";var t={showHideHeader:function(e,o){1024<qodefCore.windowWidth&&(qodefCore.scroll<=0?(qodefCore.body.removeClass("qodef-header--fixed-display"),e.css("padding-top","0"),o.css("margin-top","0")):(qodefCore.body.addClass("qodef-header--fixed-display"),e.css("padding-top",parseInt(qodefGlobal.vars.headerHeight+qodefGlobal.vars.topAreaHeight)+"px"),o.css("margin-top",parseInt(qodefGlobal.vars.topAreaHeight)+"px")))},init:function(){if(!qodefCore.body.hasClass("qodef-header--vertical")){var e=n("#qodef-page-outer"),o=n("#qodef-page-header");t.showHideHeader(e,o),n(window).scroll(function(){t.showHideHeader(e,o)}),n(window).resize(function(){e.css("padding-top","0"),t.showHideHeader(e,o)})}}};qodefCore.fixedHeaderAppearance=t.init}(jQuery),function(o){"use strict";var n={displayAmount:function(){return 0!==qodefGlobal.vars.qodefStickyHeaderScrollAmount?parseInt(qodefGlobal.vars.qodefStickyHeaderScrollAmount,10):parseInt(qodefGlobal.vars.headerHeight+qodefGlobal.vars.adminBarHeight,10)},showHideHeader:function(e){qodefCore.scroll<e?qodefCore.body.removeClass("qodef-header--sticky-display"):qodefCore.body.addClass("qodef-header--sticky-display")},init:function(){var e=n.displayAmount();n.showHideHeader(e),o(window).scroll(function(){n.showHideHeader(e)})}};qodefCore.stickyHeaderAppearance=n.init}(jQuery),function(t){"use strict";t(document).ready(function(){r.init()});var r={init:function(){var e=t("a.qodef-search-opener"),o=t(".qodef-search-cover-form"),n=o.find(".qodef-m-close");e.length&&o.length&&(e.on("click",function(e){e.preventDefault(),qodefCore.body.hasClass("qodef-covers-search--opened")?r.closeCoversHeader(o):r.openCoversHeader(o)}),n.on("click",function(e){e.preventDefault(),r.closeCoversHeader(o)}),t(document).mouseup(function(e){!qodefCore.body.hasClass("qodef-covers-search--opened")||o.is(e.target)||o.find("input").is(e.target)||o.find(".qodef-m-inner").is(e.target)||r.closeCoversHeader(o)}))},openCoversHeader:function(e){qodefCore.body.addClass("qodef-covers-search--opened qodef-covers-search--fadein"),qodefCore.body.removeClass("qodef-covers-search--fadeout"),setTimeout(function(){e.find(".qodef-m-form-field").focus()},300)},closeCoversHeader:function(e){qodefCore.body.removeClass("qodef-covers-search--opened qodef-covers-search--fadein"),qodefCore.body.addClass("qodef-covers-search--fadeout"),setTimeout(function(){e.find(".qodef-m-form-field").val(""),e.find(".qodef-m-form-field").blur(),qodefCore.body.removeClass("qodef-covers-search--fadeout")},300)}}}(jQuery),function(t){"use strict";t(document).ready(function(){r.init()});var r={init:function(){var e=t("a.qodef-search-opener"),o=t(".qodef-fullscreen-search-holder"),n=o.find(".qodef-m-close");e.length&&o.length&&(e.on("click",function(e){e.preventDefault(),qodefCore.body.hasClass("qodef-fullscreen-search--opened")?r.closeFullscreen(o):r.openFullscreen(o)}),n.on("click",function(e){e.preventDefault(),r.closeFullscreen(o)}),t(document).keyup(function(e){27===e.keyCode&&r.closeFullscreen(o)}))},openFullscreen:function(e){qodefCore.body.removeClass("qodef-fullscreen-search--fadeout"),qodefCore.body.addClass("qodef-fullscreen-search--opened qodef-fullscreen-search--fadein"),setTimeout(function(){e.find(".qodef-m-form-field").focus()},900),qodefCore.qodefScroll.disable()},closeFullscreen:function(e){qodefCore.body.removeClass("qodef-fullscreen-search--opened qodef-fullscreen-search--fadein"),qodefCore.body.addClass("qodef-fullscreen-search--fadeout"),setTimeout(function(){e.find(".qodef-m-form-field").val(""),e.find(".qodef-m-form-field").blur(),qodefCore.body.removeClass("qodef-fullscreen-search--fadeout")},300),qodefCore.qodefScroll.enable()}}}(jQuery),function(o){"use strict";o(document).ready(function(){n.init()});var n={init:function(){this.search=o("a.qodef-search-opener"),this.search.length&&this.search.each(function(){var e=o(this);n.searchHoverColor(e)})},searchHoverColor:function(e){if(void 0!==e.data("hover-color")){var o=e.data("hover-color"),n=e.css("color");e.on("mouseenter",function(){e.css("color",o)}).on("mouseleave",function(){e.css("color",n)})}}}}(jQuery),function(d){"use strict";d(document).ready(function(){a.init()});var a={percentNumber:0,init:function(){this.holder=d("#qodef-page-spinner.qodef-layout--progress-bar"),this.holder.length&&a.animateSpinner(this.holder)},animateSpinner:function(e){var o,n=e.find(".qodef-m-spinner-number-label"),t=e.find(".qodef-m-spinner-line-front"),r=!1;t.animate({width:"100%"},1e4,"linear");var i=setInterval(function(){a.animatePercent(n,a.percentNumber),r&&clearInterval(i)},100);d(window).on("load",function(){r=!0,o=setInterval(function(){100<=a.percentNumber?(clearInterval(o),t.stop().animate({width:"100%"},500),setTimeout(function(){e.addClass("qodef--finished"),setTimeout(function(){a.fadeOutLoader(e)},1e3)},600)):a.animatePercent(n,a.percentNumber)},6)})},animatePercent:function(e,o){o<100&&(o+=5,e.text(o),a.percentNumber=o)},fadeOutLoader:function(o,n,e,t){n=n||600,e=e||0,t=t||"swing",o.delay(e).fadeOut(n,t),d(window).on("bind","pageshow",function(e){e.originalEvent.persisted&&o.fadeOut(n,t)})}}}(jQuery),function(r){"use strict";qodefCore.shortcodes.mellifera_core_instagram_list={},r(document).ready(function(){e.init()});var e={init:function(){this.holder=r(".sbi.qodef-instagram-swiper-container"),this.holder.length&&this.holder.each(function(){var e=r(this),o=e.parent().attr("data-options"),n=e.find(".sbi_item.sbi_type_image"),t=e.find("#sbi_images");e.attr("data-options",o),t.addClass("swiper-wrapper"),n.length&&n.each(function(){r(this).addClass("qodef-e qodef-image-wrapper swiper-slide")}),"object"==typeof qodef.qodefSwiper&&qodef.qodefSwiper.init(e)})}};qodefCore.shortcodes.mellifera_core_instagram_list.qodefInstagram=e,qodefCore.shortcodes.mellifera_core_instagram_list.qodefSwiper=qodef.qodefSwiper}(jQuery),function(){"use strict";jQuery(document).on("yith_wccl_product_gallery_loaded",function(){"function"==typeof qodefCore.qodefWooMagnificPopup&&qodefCore.qodefWooMagnificPopup.init()})}(),function(r){"use strict";r(document).ready(function(){i.init()});var i={init:function(){var e=r(".qodef-woo-side-area-cart");e.length&&e.each(function(){var e=r(this);680<qodefCore.windowWidth&&(i.trigger(e),qodefCore.body.on("added_to_cart",function(){i.trigger(e)}))})},trigger:function(o){var e=o.find(".qodef-m-opener"),n=o.find(".qodef-m-close"),t=o.find(".qodef-m-items");e.on("click",function(e){e.preventDefault(),o.hasClass("qodef--opened")?i.closeSideArea(o):(i.openSideArea(o),r(document).keyup(function(e){27===e.keyCode&&i.closeSideArea(o)}))}),n.on("click",function(e){e.preventDefault(),i.closeSideArea(o)}),t.length&&"object"==typeof qodefCore.qodefPerfectScrollbar&&qodefCore.qodefPerfectScrollbar.init(t)},openSideArea:function(o){qodefCore.qodefScroll.disable(),o.addClass("qodef--opened"),r("#qodef-page-wrapper").prepend('<div class="qodef-woo-side-area-cart-cover"/>'),r(".qodef-woo-side-area-cart-cover").on("click",function(e){e.preventDefault(),i.closeSideArea(o)})},closeSideArea:function(e){e.hasClass("qodef--opened")&&(qodefCore.qodefScroll.enable(),e.removeClass("qodef--opened"),r(".qodef-woo-side-area-cart-cover").remove())}}}(jQuery),function(e){"use strict";var n="mellifera_core_product_list";qodefCore.shortcodes[n]={},"object"==typeof qodefCore.listShortcodesScripts&&e.each(qodefCore.listShortcodesScripts,function(e,o){qodefCore.shortcodes[n][e]=o}),qodefCore.shortcodes[n].qodefAppear=qodef.qodefAppear}(jQuery),function(e){"use strict";var n="mellifera_core_portfolio_list";qodefCore.shortcodes[n]={},"object"==typeof qodefCore.listShortcodesScripts&&e.each(qodefCore.listShortcodesScripts,function(e,o){qodefCore.shortcodes[n][e]=o})}(jQuery),function(e){"use strict";var n="mellifera_core_team_list";qodefCore.shortcodes[n]={},"object"==typeof qodefCore.listShortcodesScripts&&e.each(qodefCore.listShortcodesScripts,function(e,o){qodefCore.shortcodes[n][e]=o})}(jQuery),function(){"use strict";qodefCore.shortcodes.mellifera_core_testimonials_list={},qodefCore.shortcodes.mellifera_core_testimonials_list.qodefSwiper=qodef.qodefSwiper}(jQuery);