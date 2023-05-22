// 상단메뉴 fix되면서 스크롤되고 색깔 바뀌는 것

// 2
$(function () {
    $(window).on('scroll', function () {
        // 변수에 스크롤한 양을 담는다.
        let sct = $(window).scrollTop();
        console.log(sct)
        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }

    })
})

// function () 과 똑같다 -> ()=>
// .객체 ()함수 {} 중괄호 배열 []
// if 만약에