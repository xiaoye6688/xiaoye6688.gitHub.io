// 入口函数
$(document).ready(function () {
    $(function () {
        // 鼠标移入事件
        // $("body").mouseenter(function () {
        //     $(this).css("cursor", "url(img/选择.svg), auto");
        // })
        $("#middleBottom>div").mouseenter(function () {
            $(this).css("opacity", "0.5");
            $(this).css("cursor", "pointer");
        })
        $("#middleBottom>div").mouseleave(function () {
            $(this).css("opacity", "1");
            $(this).css("cursor", "default");
        })
    })
});

