// 鼠标放上按钮，按钮放大
$('.btn').mouseenter(function () {
    $(this).animate({
        width: '+=10px',
        height: '+=10px'
    }, 200);
}
);