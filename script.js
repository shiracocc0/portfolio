'use strict';


// ハンバーガーを×にする
document.getElementById('menu-btn').addEventListener('click',(evt) => {
    evt.currentTarget.classList.toggle('close');
    document.getElementById('gnavi').classList.toggle('open');
});

//hobbyのゆっくりスライド
  const swiper = new Swiper(".swiper", {
    loop: true, // ループ有効
    slidesPerView: 5, // 一度に表示する枚数
    speed: 7000, // ループの時間
    allowTouchMove: false, // スワイプ無効
    autoplay: {
      delay: 0, // 途切れなくループ
    },
  });

  //スクロールしたらトップへ戻るボタン
  window.addEventListener('scroll', () => {
    const scroll = window.scrollY; //スクロール値
    console.log(scroll);

    if (scroll >= 600) {
        document.getElementById('page-top').classList.add('open');
    } else {
        document.getElementById('page-top').classList.remove('open');
    }
});

