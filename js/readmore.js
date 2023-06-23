var showNum = 6, // 最初に表示しておく件数
    addNum = 6,  // クリックごとに表示したい件数
    target = '.target',
    btn = $('.btn-more');

$(target + ':nth-child(n + ' + (showNum + 1) + ')').addClass('is-hidden');

btn.on('click', function () {
    $(target + '.is-hidden').slice(0, addNum).removeClass('is-hidden').addClass('is-show'); // アニメーション用にis-showクラスを追加

    if ($(target + '.is-hidden').length == 0) {
        btn.fadeOut();
    }
});