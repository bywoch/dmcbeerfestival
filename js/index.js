$(function () {

    $(function (win, $) {

        var $html = $("html");

        var deviceSize = {
            pc: 1024,
            tablet: 768,
            mobile: 480
        };

        function scrollShowHide(status) {
            $html.css({
                "overflow-y": status
            });
            return $html.width();
        }

        var sc_w1 = scrollShowHide("hidden"),
            sc_w2 = scrollShowHide("scroll"),
            sc_w3 = sc_w1 - sc_w2;

        if (sc_w3 > 0) {
            deviceSize.pc = deviceSize.pc - sc_w3;
            deviceSize.tablet = deviceSize.tablet - sc_w3;
            deviceSize.mobile = deviceSize.mobile - sc_w3;
        }
        //console.log(deviceSize.pc);

        $(win).on("resize", function () {
            var w_size = $(win).width();
            if (w_size >= deviceSize.pc &&
                !$("html").hasClass("pc")) {
                $html.removeClass("mobile tablet").addClass("pc");
                scrollShowHide("scroll");
            } else if (w_size < deviceSize.pc &&
                w_size >= deviceSize.tablet &&
                !$("html").hasClass("tablet")) {
                $html.removeClass("mobile pc").addClass("tablet");
                scrollShowHide("scroll");
            } else if (w_size <= deviceSize.mobile &&
                !$html.hasClass("mobile")) {
                $html.removeClass("pc tablet").addClass("mobile");
                var menu_pos = parseInt($(".mobile-menu-wrap").css("left"));
                if (menu_pos >= 0) {
                    scrollShowHide("hidden");
                }
            }
        });

    }(window, jQuery));

    /* -------------------- .ited_allbox Area -------------------- */

    $('.itw_01 .itw01_sub').show();

    $('.itw01_title').click(function () {
        $('.itw_01 .itw01_sub').slideToggle(200);
        $('.itw_02 .itw02_sub').slideUp(200);
        $('.itw_03 .itw03_sub').slideUp(200);
        $('#container .main_visual .mv_wrap .mv_ctt_01').slideUp(200);
    });
    $('.itw02_title').click(function () {
        $('.itw_02 .itw02_sub').slideToggle(200);
        $('.itw_01 .itw01_sub').slideUp(200);
        $('.itw_03 .itw03_sub').slideUp(200);
        $('#container .main_visual .mv_wrap .mv_ctt_01').slideUp(200);
    });
    $('.itw03_title').click(function () {
        $('.itw_03 .itw03_sub').slideToggle(200);
        $('.itw_01 .itw01_sub').slideUp(200);
        $('.itw_02 .itw02_sub').slideUp(200);
        $('#container .main_visual .mv_wrap .mv_ctt_01').slideUp(200);
    });
    $('#container .section_top_txt').click(function () {
        $('#container .main_visual .mv_wrap .mv_ctt_01').slideToggle(200);
        $('.itw_01 .itw01_sub').slideUp(200);
        $('.itw_02 .itw02_sub').slideUp(200);
        $('.itw_03 .itw03_sub').slideUp(200);
    });

    /* -------------------- Nav Area -------------------- */

    $("#header .nav_op_btn").on("click", function () {
        $("#header .nav_bx").animate({
            "right": 0
        }, 200);
    });
    $("#header .nav .nav_cl_btn").on("click", function () {
        $("#header .nav_bx").animate({
            "right": "-100%"
        }, 200);
    });

    $('.nav_lst_01').click(function () {
        $('#container .main_visual .mv_wrap .mv_ctt_01').slideDown(200);
        $('.itw_01 .itw01_sub').slideUp(200);
        $('.itw_02 .itw02_sub').slideUp(200);
        $('.itw_03 .itw03_sub').slideUp(200);
    });
    $('.nav_lst_02').click(function () {
        $('.itw_01 .itw01_sub').slideDown(200);
        $('.itw_02 .itw02_sub').slideUp(200);
        $('.itw_03 .itw03_sub').slideUp(200);
        $('#container .main_visual .mv_wrap .mv_ctt_01').slideUp(200);
    });
    $('.nav_lst_03').click(function () {
        $('.itw_02 .itw02_sub').slideDown(200);
        $('.itw_01 .itw01_sub').slideUp(200);
        $('.itw_03 .itw03_sub').slideUp(200);
        $('#container .main_visual .mv_wrap .mv_ctt_01').slideUp(200);
    });
    $('.nav_lst_04').click(function () {
        $('.itw_03 .itw03_sub').slideDown(200);
        $('.itw_01 .itw01_sub').slideUp(200);
        $('.itw_02 .itw02_sub').slideUp(200);
        $('#container .main_visual .mv_wrap .mv_ctt_01').slideUp(200);
    });

    /* -------------------- LINE-UP Content Area -------------------- */

    $('.itrd_wrap .itrd_ctt_box .h_m p').addClass('on');
    $('.itrd_wrap .itrd_ctt_box .h_m span').addClass('on');
    $('.itrd_wrap .itrd_ctt_box .h_m').click(function () {
        $('.itrd_wrap .itrd_ctt_box .h_m p').addClass('on');
        $('.itrd_wrap .itrd_ctt_box .c_s p').removeClass('on');
        $('.itrd_wrap .itrd_ctt_box .h_m span').addClass('on');
        $('.itrd_wrap .itrd_ctt_box .c_s span').removeClass('on');
        $('.itrd_wrap .itrd_ctt_box .line_beer').show();
        $('.itrd_wrap .itrd_ctt_box .line_atst').hide();
    });
    $('.itrd_wrap .itrd_ctt_box .c_s').click(function () {
        $('.itrd_wrap .itrd_ctt_box .c_s p').addClass('on');
        $('.itrd_wrap .itrd_ctt_box .h_m p').removeClass('on');
        $('.itrd_wrap .itrd_ctt_box .c_s span').addClass('on');
        $('.itrd_wrap .itrd_ctt_box .h_m span').removeClass('on');
        $('.itrd_wrap .itrd_ctt_box .line_atst').show();
        $('.itrd_wrap .itrd_ctt_box .line_beer').hide();
    });

    /* -------------------- POP-UP Button Area -------------------- */

    $(".pop_up .pu_cb").on("click", function () {
        $(".pop_up").hide();
    });

    $(window).resize(function () {
        if ($(window).width() > 768) {
            $('.itw_02 .itw02_sub .tm_tbl img').attr('src', 'http://www.dmcbeerfestival.com/images/event/timetable_img_04.jpg');
            $("#header .nav_bx").css('right', '0');
            //$('.spsr_wrap .spsr_banner').attr('src', 'http://www.dmcbeerfestival.com/images/event/banner_pc01.jpg');
        } else {
            $('.itw_02 .itw02_sub .tm_tbl img').attr('src', 'http://www.dmcbeerfestival.com/images/event/timetable_img_m04.jpg');
            $("#header .nav_bx").css('right', '-100%');
            //$('.spsr_wrap .spsr_banner').attr('src', 'http://www.dmcbeerfestival.com/images/event/banner_m01.jpg');
        }
    });

});