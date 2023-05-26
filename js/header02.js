//클릭했을때 모바일에서 메뉴나타나기

$(function () {
    $('#header .gnb>ul>li').on('click', function (e) {
        if ($('#header .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).addClass('on').siblings().removeClass('on');
        }

    });

    $('.mopen').on('click', function () {
        $('#header .gnb').toggleClass('on');
        $('#header').toggleClass('on');
    })

    // 사이즈 늘어나면 메뉴 꺼지고 켜지고
    $(window).on('resize', function () {
        $('#header .gnb').hasClass('on');
    })
})