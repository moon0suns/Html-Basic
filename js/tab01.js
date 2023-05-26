$(function () {

    $('.tab_link li').on('click', function (event) {
        event.preventDefault();
        let idx = ($(this).index()) //0,1,2


        // 2-5 html on붙인거 기능
        $(this).addClass('on')
            .siblings().removeClass('on');

        //$('.tab_content .con').removeClass('on');
        //$('.tab_content .con').eq(idx).addClass('on')

        $('.tab_content .con').eq(idx).addClass('on')
            .siblings().removeClass('on');

        // eq(2)들어가는 번호에 따라 나올게 결정됨
        // eq($(this).index()) 번호에 따라서 나옴

        console.log(event, event.target, event.currentTarget, $(this), $(this).index())

    });


    $('.tab_map_link li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.tab_map_location li').eq(idx).addClass('on').siblings().removeClass('on');
    });



})

// 5 <javascript 자료형>
// const 자료 = {name: "박혜림"}
// const 자료2 = [name: "박혜림"]
// 자료.name; === 자료["name"]
// 자료2[0]

// 캡쳐링 버블링 event target
// tab_link li이지만 a도 선택된다
// 막는거
//curenTarget
//{namem: ""}