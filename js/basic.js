$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500)
    });
});

// 스크롤하면 위로 올라가지는거 화살표 업