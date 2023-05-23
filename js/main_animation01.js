$(function () {

    const model = ['KONA', 'CASPER', 'SONATA']

    $('.main_slide').on('init afterChange', function (e, s, c) {
        let _this = $(this).find('.slick-current')
        _this.addClass('on').siblings().removeClass('on');
        $('#main_visual .num').text(c ? c + 1 : 1);
        $('#main_visual .model').text(c ? model[(c + 1) % model.length] : model[1]);
    });
    // 슬라이드마다 숫자 /이름/이미지 바껴서 자동으로 나오는 것

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false
    });

    $('#main_visual .model').on('click', function () {
        $('.main_slide').slick('slickNext');
    })

})

// init(슬라이드가 있으면) : 앞에씀 $('.main_slide').slick();