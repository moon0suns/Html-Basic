$(function () {
    // 2-5 기능시켜줌
    $('.top_banner .btn').on('click', function () {
        $('.top_banner').toggleClass('on')
    })
    // toggleClass : 누르면 올라가고 누르면 내려가게 하는 기능
    // class요소들 add/remove/has
    $('.right_banner .btn').on('click', function () {
        $('.right_banner').toggleClass('on')
    })

    $('.left_banner .btn').on('click', function () {
        $('.left_banner').toggleClass('on')
    })
})

// js에다가 css변하게해주는것