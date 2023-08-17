$(function() {
    var loading = $("#js-loading");

    //ページの読み込みが完了後にアニメーションを非表示・MVの高さを調整
    $(window).on("load", function () {
        var windowHeight = $(window).height();
        $(".mv").height(windowHeight);
        loading.delay("1000").fadeOut("2000");
    });

    //ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
    setTimeout(function () {
        loading.fadeOut("3000");
    }, 8000);

    // 画面サイズ時にMVの高さを調整
    $(window).resize(function () {
        var windowHeight = $(window).height();
        $(".mv").height(windowHeight);
    });

    // ページスクロール
    $('a[href^="#"]').on('click', function() {
        var speed = 300;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "html" : href);
        var position = target.offset().top;
        $("html, body").animate(
            {
                scrollTop: position,
            },
            speed,
            "swing"
        );
        return false;
    });

    //SP用のCTAボタンの表示
    if (window.matchMedia("(max-width: 768px)").matches) {
        $spCTA = $(".spCTA");
        $spCTA.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $spCTA.fadeIn();
        } else {
            $spCTA.fadeOut();
        }
        });
        $spCTA.on("click", function () {
        $("body,html").animate({ scrollTop: 0 }, 300);
        return false;
        });
        }

    // オーディオの再生と停止
    var audio = $("#js-audio").get(0);
    var isPlaying = false;
    audio.volume = 0.5;

    $("#js-audio-play").click(function() {
        if (isPlaying) {
            audio.pause();
            $(".audioSwitch").removeClass("on");
            $(".audioSwitch-text").html("SOUND OFF");
        } else {
            audio.play();
            $(".audioSwitch").addClass("on");
            $(".audioSwitch-text").html("SOUND ON");
        }
    });
    audio.onplaying = function () {
        isPlaying = true;
    };
    audio.onpause = function() {
        isPlaying = false;
    };
});