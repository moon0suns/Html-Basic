$(function () {



    // 하트눌렀을때 색깔 
    $('.lnk .wish').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('on');
    })

    // 카트 눌렀을때 카운트 숫자되기 
    let cartNum = 0;


    $('.lnk .cart').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('on')) {
            alert('이미 장바구니에 담았어요')
            return;
        } else {
            cartNum = cartNum + 1;
        }
        $(this).addClass('on');
        $('#header .service i small').text(cartNum);
    })


})

// e.preventDefault() 리셋되게
//  alert 창띄우기 작은 팝업창