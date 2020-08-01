if($("#rev_slider_1").length){
    var tpj=jQuery;

    var revapi1078;
    tpj(document).on('ready',function() {
    if(tpj("#rev_slider_1078_1").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_1078_1");
    }else{
        revapi1078 = tpj("#rev_slider_1078_1").show().revolution({
            sliderType:"standard",
            jsFileLocation:"/revolution/js/",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay: 7000,
            navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                mouseScrollReverse:"default",
                onHoverStop:"on",
                touch:{
                    touchenabled:"on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                }
                ,
                arrows: {
                    style:"zeus",
                    enable:true,
                    hide_onmobile:true,
                    hide_under:600,
                    hide_onleave:true,
                    hide_delay:200,
                    hide_delay_mobile:1200,
                    tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                    left: {
                        h_align:"left",
                        v_align:"center",
                        h_offset:120,
                        v_offset:0
                    },
                    right: {
                        h_align:"right",
                        v_align:"center",
                        h_offset:120,
                        v_offset:0
                    }
                }
                ,
                bullets: {
                    enable:true,
                    hide_onmobile:true,
                    hide_under:600,
                    style:"metis",
                    hide_onleave:true,
                    hide_delay:200,
                    hide_delay_mobile:1200,
                    direction:"horizontal",
                    h_align:"center",
                    v_align:"bottom",
                    h_offset:0,
                    v_offset:60,
                    space:1.5,
                    tmp:'<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'
                }
            },
            viewPort: {
                enable:true,
                outof:"pause",
                visible_area:"80%",
                presize:false
            },
            responsiveLevels:[1240,1240,778,480],
            visibilityLevels:[1240,1240,778,480],
            gridwidth:[1240,1200,778,480],
            gridheight:[1024,1000,800,700],
            lazyType:"none",
            parallax: {
                type:"mouse",
                origo:"enterpoint",
                // origo:"slidercenter",
                speed:2000,
                levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
            },
            shadow:0,
            spinner:"off",
            stopLoop:"on",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
        });
    }
});	/*ready*/
}

if($("#rev_slider_2").length){
    var tpj2=jQuery;

    var revapi10782;
    tpj2(document).on('ready',function() {
        if(tpj2("#rev_slider_1078_1").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_1078_1");
        }else{
            revapi10782 = tpj2("#rev_slider_1078_1").show().revolution({
                sliderType:"standard",
                jsFileLocation:"/revolution/js/",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay: 7000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                    mouseScrollReverse:"default",
                    onHoverStop:"on",
                    touch:{
                        touchenabled:"on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    }
                    ,
                    arrows: {
                        style:"zeus",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:600,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:120,
                            v_offset:0
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:120,
                            v_offset:0
                        }
                    }
                    ,
                    bullets: {
                        enable:true,
                        hide_onmobile:true,
                        hide_under:600,
                        style:"metis",
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        direction:"horizontal",
                        h_align:"center",
                        v_align:"bottom",
                        h_offset:0,
                        v_offset:60,
                        space:1.5,
                        tmp:'<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'
                    }
                },
                viewPort: {
                    enable:true,
                    outof:"pause",
                    visible_area:"80%",
                    presize:false
                },
                responsiveLevels:[1240,1240,778,480],
                visibilityLevels:[1240,1240,778,480],
                gridwidth:[1240,1200,778,480],
                gridheight:[840,840,600,500],
                lazyType:"none",
                parallax: {
                    type:"mouse",
                    origo:"enterpoint",
                    // origo:"slidercenter",
                    speed:2000,
                    levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
                },
                shadow:0,
                spinner:"off",
                stopLoop:"on",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                autoHeight:"off",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }
    });	/*ready*/
}





/*
if (setREVStartSize!==undefined) setREVStartSize(
    {c: '#rev_slider_1_1', responsiveLevels: [1240,1240,778,480], gridwidth: [1170,1170,778,480], gridheight: [1000,1000,600,500], sliderLayout: 'auto'});

var revapi1,
    tpj;
// (function() {
    // if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded",onLoad); else onLoad();
    // function onLoad() {
        /!*if (tpj===undefined) { tpj = jQuery; if("off" == "on") tpj.noConflict();}
        if(tpj("#rev_slider_1_1").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_1_1");
        }else{*!/
            revapi1 = tpj("#rev_slider_1_1").show().revolution({
                sliderType:"standard",
                jsFileLocation:"/revolution/js/",
                sliderLayout:"auto",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                    mouseScrollReverse:"default",
                    onHoverStop:"on",
                    arrows: {
                        style:"gyges",
                        enable:true,
                        hide_onmobile:false,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        tmp:'',
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:20,
                            v_offset:0
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:20,
                            v_offset:0
                        }
                    }
                    ,
                    bullets: {
                        enable:true,
                        hide_onmobile:false,
                        style:"hermes",
                        hide_onleave:false,
                        direction:"horizontal",
                        h_align:"center",
                        v_align:"bottom",
                        h_offset:0,
                        v_offset:20,
                        space:10,
                        tmp:''
                    }
                },
                responsiveLevels:[1240,1240,778,480],
                visibilityLevels:[1240,1240,778,480],
                gridwidth:[1170,1170,778,480],
                gridheight:[1000,1000,600,500],
                lazyType:"none",
                parallax: {
                    type:"mouse",
                    origo:"enterpoint",
                    speed:400,
                    speedbg:0,
                    speedls:0,
                    levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
                },
                shadow:0,
                spinner:"spinner0",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                autoHeight:"off",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        // }; /!* END OF revapi call *!/

    // }; /!* END OF ON LOAD FUNCTION *!/
// }()); /!* END OF WRAPPING FUNCTION *!/*/

