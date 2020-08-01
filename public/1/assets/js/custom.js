/*------------------------------------------------------------------
    Template Name:  Vizeon
    Version: 1.0
    Author: Layerdrops
    Author Email: layerdrops@gmail.com

    [Table of Content]
    -01 PreLoader
    -02 Header Slider
    -03 Skills
    -04 Toggle Nav Menu
    -05 Lightbox
    -06 CounterUP
    -07 Custom Radio Button
    -08 Header Sliders
    -09 Testimonial Slider
    -10 Service Slider
    -11 Clients Logos
    -12 Google Maps
    -13 Custom Owl-carousel dots and testimonial
    -14 Pie Chart
    -15 Select Box Dropdown Menu

*/

(function ($) {
    'use strict';

    /*** =====================================
     * -01 PreLoader
     * =====================================***/
    $(window).on('load', function(){
        $('.spinner').delay('300').fadeOut(2000);
        $('.header_svg_home').delay('500').addClass('active');
    });
    $(document).on('ready', function () {

        /*** =====================================
         * -02 Header Slider
         * =====================================***/
        const nav = document.querySelector('.scroll_fixed');
        const topOfNav = nav.offsetTop;
        $(window).on('scroll', function(){
            if ($(window).scrollTop() >= topOfNav) {
                $('body').addClass('fixed-nav');
                document.body.style.paddingTop = nav.offsetHeight + 'px';
                document.body.classList.add('fixed-nav');
            }
            else {
                document.body.style.paddingTop = 0;
                document.body.classList.remove('fixed-nav');
            }


            if ($(window).scrollTop() >= 20) {
                $('body').addClass('responsive_device');
            } else {
                $('body').removeClass('responsive_device');
            }
        });


        /*** =====================================
         * -03 Skills
         * =====================================***/
        $(window).on('scroll', function () {
            var my_skills = ("#progress_bar .skill");
            if ($(my_skills).length){
                spy_scroll(my_skills);
            }
        });

        /*** =====================================
         * -04 Toggle Nav Menu
         * =====================================***/
        $(document).on('click','.main_menu_area .navbar-nav li > .responsive_icon:not(:only-child)', function (e) {
            $(this).siblings('.dropdown-menu').toggle();
            $('.dropdown-menu').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        $(document).on('click', '.main_menu_area .navbar .navbar-toggler', function () {
            $(".main_menu_area .collapse").toggleClass('active');
        });
        $(document).on('click', '.main_menu_area .navbar .collapse .close_menu', function () {
            $(".main_menu_area .collapse").removeClass('active');
        });

        /*** =====================================
         * -05 Lightbox
         * =====================================***/
        if($(".lightbox").length) {
            $('.lightbox').topbox({
                effect: 'fade',
            });
        }

        /*** =====================================
         * -06 CounterUP
         * =====================================***/
        if($(".counterup").length) {
            $('.counterup').counterUp({
                delay: 10,
                time: 3000
            });
        }

        /*** =====================================
         * -07 Custom Radio Button
         * =====================================***/
        if($(".custom_radio_btn").length) {
            $(document).on('click', '.custom_radio_btn.radio_1 li', function () {
                $(".custom_radio_btn.radio_1 li").removeClass('active');
                $(this).addClass('active');
            });
            $(document).on('click', '.custom_radio_btn.radio_3 li', function () {
                $(".custom_radio_btn.radio_3 li").removeClass('active');
                $(this).addClass('active');
            });
            $(document).on('click', '.custom_radio_btn.radio_2 li', function () {
                $(".custom_radio_btn.radio_2 li").removeClass('active');
                $(this).addClass('active');
            });
        }

        /*** =====================================
         * -08 Header Sliders
         * =====================================***/
        if($(".header_slider").length) {
            $('.header_slider').owlCarousel({
                items: 1,
                autoHeight: true,
                autoplay: true,
                loop: true,
                nav: false,
                dots: false,
                slideSpeed: 1000,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                autoplayTimeout: 7000,
            });
        }
        if($(".header_slider_style_2").length) {
            $('.header_slider_style_2').owlCarousel({
                items: 1,
                autoHeight: true,
                autoplay: true,
                loop: true,
                nav: true,
                navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
                dots: false,
                slideSpeed: 1000,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                autoplayTimeout: 7000,
            });
        }

        /*** =====================================
         * -09 Testimonial Slider
         * =====================================***/
        if($(".testimonial_slider").length) {
            $('.testimonial_slider').owlCarousel({
                autoHeight: true,
                autoplay: true,
                loop: true,
                nav: false,
                margin: 30,
                dots: true,
                slideSpeed: 2000,
                autoplayTimeout: 5000,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    },
                    1000: {
                        items: 3,
                    }
                }
            });
        }

        /*** =====================================
         * -10 Service Slider
         * =====================================***/
        if($(".service_slider").length) {
            $('.service_slider').owlCarousel({
                autoHeight: true,
                autoplay: true,
                loop: true,
                nav: false,
                autoplayTimeout: 4000,
                dots: true,
                margin: 30,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    },
                    1000: {
                        items: 3,
                    }
                }
            });
        }

        /*** =====================================
         * -11 Clients Logos
         * =====================================***/
        if($(".client_slider").length) {
            $('.client_slider').owlCarousel({
                autoHeight: true,
                autoplay: true,
                loop: true,
                nav: false,
                autoplayTimeout: 3000,
                dots: false,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 3,
                    },
                    1000: {
                        items: 5,
                    }
                }
            });
        }

        /*** =====================================
         * -12 Google Maps
         * =====================================***/
        if($("#map").length) {
            initMap('map', 40.717499, -74.044113, 'assets/images/map-marker.png');
        }

        /*** =====================================
         * -13 Custom Owl-carousel dots and testimonial
         * =====================================***/
        $(document).on('click','#custom_owl_carousel_dots > li', function(){
            $('#custom_owl_carousel_dots > li.active').removeClass('active');
            $(this).addClass('active');
        });
        if($(".testimonial_slider_st_2").length) {
            let Owl = {
                init: function () {
                    Owl.carousel();
                },
                carousel: function () {
                    let owl;
                    owl = $('.testimonial_slider_st_2').owlCarousel({
                        items: 1,
                        dots: true,
                        center: true,
                        autoplay: true,
                        addClassActive: true,
                        nav: false,
                        loop: true,
                        margin: 10,
                        animateOut: 'fadeOutDown',
                        animateIn: 'fadeInDown'
                    });

                    $('#custom_owl_carousel_dots').on('click', 'li', function () {
                        owl.trigger('to.owl.carousel', [$(this).index(), 300]);
                    });
                }
            };
            Owl.init();
            let testimonial_slider = $(".testimonial_slider_st_2");
            testimonial_slider.on('changed.owl.carousel', function (e) {
                if (e.relatedTarget.current() === 2) {
                    $('#custom_owl_carousel_dots > li.testimonial1').addClass('active');
                } else {
                    $('#custom_owl_carousel_dots > li.testimonial1').removeClass('active');
                }
                if (e.relatedTarget.current() === 3) {
                    $('#custom_owl_carousel_dots > li.testimonial2').addClass('active');
                } else {
                    $('#custom_owl_carousel_dots > li.testimonial2').removeClass('active');
                }
                if (e.relatedTarget.current() === 4) {
                    $('#custom_owl_carousel_dots > li.testimonial3').addClass('active');
                } else {
                    $('#custom_owl_carousel_dots > li.testimonial3').removeClass('active');
                }
                if (e.relatedTarget.current() === 5) {
                    $('#custom_owl_carousel_dots > li.testimonial4').addClass('active');
                } else {
                    $('#custom_owl_carousel_dots > li.testimonial4').removeClass('active');
                }
                if (e.relatedTarget.current() === 6) {
                    $('#custom_owl_carousel_dots > li.testimonial5').addClass('active');
                } else {
                    $('#custom_owl_carousel_dots > li.testimonial5').removeClass('active');
                }
                if (e.relatedTarget.current() === 7) {
                    $('#custom_owl_carousel_dots > li.testimonial6').addClass('active');
                } else {
                    $('#custom_owl_carousel_dots > li.testimonial6').removeClass('active');
                }
            });
        }

        /*** =====================================
         * -14 Pie Chart
         * =====================================***/
        if($("#chart").length) {
            //doughut chart
            var ctx = document.getElementById( "doughutChart" );
            Chart.defaults.global.defaultFontFamily = 'Montserrat';
            Chart.defaults.global.defaultFontSize = 14;
            Chart.defaults.global.defaultFontStyle = '700';
            Chart.defaults.global.defaultFontColor = '#222232';
            // ctx.height = 100;
            var myChart = new Chart( ctx, {
                type: 'doughnut',
                data: {
                    datasets: [ {
                        data: [ 34, 42, 25 ],
                        backgroundColor: [
                            "rgb(240, 234, 198)",
                            "rgb(242, 210, 211)",
                            "rgb(209, 218, 233)"
                        ],
                        hoverBackgroundColor: [
                            "rgb(240, 234, 198)",
                            "rgb(242, 210, 211)",
                            "rgb(209, 218, 233)"
                        ],
                        borderWidth: 3

                    } ],
                    labels: [
                        "one",
                        "two",
                        "three"
                    ]
                },
                options: {
                    responsive: true,
                    tooltips: {
                        custom: function(tooltip) {
                            if (!tooltip) return;
                            // disable displaying the color box;
                            tooltip.displayColors = false;
                        },
                        mode: 'index',
                        titleFontSize: 56,
                        titleFontColor: '#222232',
                        bodyFontColor: '#222232',
                        bodyFontStyle: '500',
                        backgroundColor: '#fff',
                        titleFontFamily: 'Montserrat',
                        bodyFontFamily: 'Montserrat',
                        cornerRadius: 5,
                        caretSize: 0,
                        xPadding: 20,
                        yPadding: 20,
                        borderWidth: 3,
                        borderColor:  "rgba(0, 0, 0, .9)"
                    },
                    legend: {
                        display:false,
                        position: 'bottom',
                        labels: {
                            fontSize: 13,
                            fontStyle: 'bold',
                            fontColor: '#7c7c82',
                            boxWidth: 50,
                            padding: 13,
                            bodyFontStyle: 'bold',
                            fontFamily: 'Montserrat',
                            usePointStyle: true
                        }
                    }
                }
            } );
        }

        /*** =====================================
         * -15 Select Box Dropdown Menu
         * =====================================***/
        if($("#select_img_op").length) {
            $(".select_dropdown_menu li a").on('click', function () {
                var selText = $(this).text();
                var imgSource = $(this).find('img').attr('src');
                var img = '<img src="' + imgSource + '"/>';
                $(this).parents('.select_btn_group').find('.select_dropdown_toggle').html(img + ' ' + selText + ' <i class="fa fa-angle-down"></i>');
            });

            $(document).on('click', '.select_dropdown_toggle', function () {
                $(".select_dropdown_menu").toggleClass('open');
            });
            $(document).on('click', '.select_dropdown_menu li a', function () {
                $(".select_dropdown_menu").removeClass('open');
            });

        }

    });


})(jQuery);
