$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'kVDeQQidJjA',
        // 유튜브 링크 넣기
        containment: '#main_visual',
        // 선택자 
        autoPlay: true,
        showControls: false,
        // mute: true,
        // startAt: 0,
        // opacity: 1
        // 기본옵션이라 지워도 됨

        playOnlyIfVisible: true,
        // 옵션필수 : 내렸을때 동영상재생되게 없어지면 멈추게 하기
    });

    $('#conVideo').YTPlayer({
        videoURL: 'kVDeQQidJjA',
        containment: '#bgm1',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,
    });


    $('#conVideo2').YTPlayer({
        videoURL: 'kVDeQQidJjA',
        containment: '#bgm2',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,

    });

    $('#conVideo3').YTPlayer({
        videoURL: 'kVDeQQidJjA',
        containment: '#bgm3',
        autoPlay: true,
        showControls: false,
        playOnlyIfVisible: true,

    });



    // 정지 재생 버튼 
    $('#main_visual .pause').on('click', function () {
        $('#bgndVideo').YTPPause();
    })

    $('#main_visual .play').on('click', function () {
        $('#bgndVideo').YTPPlay();
    })
})

