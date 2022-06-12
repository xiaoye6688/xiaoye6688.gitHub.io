// 入口函数
$(document).ready(function () {
    $(function () {
        // 鼠标单击事件
        $(".zl").click(function () {
            // 除了当前点击的元素，清除其他元素的样式
            $(".zl").removeClass("xuanzhong");
            $(this).addClass("xuanzhong");
        })
        $(".zl").mouseenter(function () {
            // 鼠标进入变成小手
            $(this).css("cursor", "pointer");
         })
        $(".zl").mouseleave(function () {
            // 鼠标移出变成默认
            $(this).css("cursor", "default");
        })

    })
});
