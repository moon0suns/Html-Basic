
$(function () {

    let btn = true;

    // 재생멈추기 하나의 버튼으로 기능
    $('.ctr').on('click', function () {
        $(this).toggleClass('on');
        if (btn) {
            $('.main_visual video').trigger('pause');
        } else {
            $('.main_visual video').trigger('play');
        }
        btn = !btn;
        console.log(btn);

    })

    // 3. 클릭했을때 재생 멈추기
    $('.case01 .pause').on('click', function () {
        $('.case01 video').trigger('pause');
    });

    $('.case01 .play').on('click', function () {
        $('.case01 video').trigger('play');
    });

})
