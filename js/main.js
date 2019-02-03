$(window).on('load',function(){

  // fade-in
    $(window).scroll(function (){
        $('.fade-in').each(function(){
            var POS = $(this).offset().top;  //fade-inがついている要素の位置
            var scroll = $(window).scrollTop();  //スクロール一
            var windowHeight = $(window).height();  //ウィンドウの高さ

            if (scroll > POS - windowHeight + windowHeight/2.0){
                $(this).css("opacity","1" );
            } else {
                $(this).css("opacity","0" );
            }
        });
    });
});


    /*
     * Back-toTop button (Smooth scroll)
     */
    $(document).on('click','.back-to-top', function () {

        // Smooth Scroll プラグインを実行
        $.smoothScroll({
            easing: 'easeOutExpo', // イージングの種類
            speed: 500             // 所要時間
        });
    });
