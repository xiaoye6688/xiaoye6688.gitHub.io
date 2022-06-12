// // 入口函数
// $(document).ready(function () {
//     //调用sum函数
//     sum();
//     $(".decrease").click(function () {
//         if ($(this).next().val() > 0) {
//             $(this).next().val(parseInt($(this).next().val()) - 1);
//             sum();
//         }   //如果数量大于0，则减1

//     })
//     $(".increase").click(function () {
//         $(this).prev().val(parseInt($(this).prev().val()) + 1);
//         sum();
//     })
//     // 计算总价函数
//     function sum() {
//         var num = 0;// 定义一个变量，用来存储数量
//         var moneyAll = 0;//定义一个变量，用来存储总价
//         $(".quantity").each(function () {
//             num = parseInt($(this).val());
//             var money1 = parseInt($(this).parent().parent().find(".onlySum").text());
//             var money2 = num * parseInt(money1);
//             moneyAll = moneyAll + parseInt(money2);
//         });
//         $("#onlySum2").text(moneyAll);

//     }
//     // 删除商品函数
//     $("a").click(function () {
//         $(this).parent().parent().remove();
//         sum();
//     })
// });
// 入口函数
$(document).ready(function () {
    //调用sum函数，此处为页面加载时直接给总价赋值
    sum();
    //点击减少按钮
    $(".decrease").click(function () {
        if ($(this).next().val() > 0) {//判断文本框是否大于0，如果大于0，则减1
            $(this).next().val(parseInt($(this).next().val()) - 1);
            sum();//调用sum函数计算商品总价
        }   //如果数量大于0，则减1
    })
    //点击增加按钮
    $(".increase").click(function () {
        $(this).prev().val(parseInt($(this).prev().val()) + 1);
        sum();
    })
    //点击勾选按钮
    $(".check").click(function () {
        sum();//调用sum函数计算商品总价
    })
    // 删除商品函数
    $("a").click(function () {//此处商品按钮我用的是a标签（herf="#"），可以改成其他标签
        $(this).parent().parent().remove();//删除当前按钮的父级的父级，即当前商品
        sum();
    })
    // 计算总价函数
    function sum() {
        var num = 0;// 定义一个变量，用来存储数量
        var moneyAll = 0;//定义一个变量，用来存储总价
        $(".quantity").each(function () {
            if ($(this).parent().parent().find(".check").is(":checked")) {//判断按钮是否选中如果选中，则计算
                num = parseInt($(this).val());//将当前遍历的数量赋值给num
                var money1 = parseInt($(this).parent().parent().find(".onlySum").text());//将当前遍历的单价赋值给money1
                var money2 = num * parseInt(money1);//将当前遍历的数量乘以单价赋值给money2
                moneyAll = moneyAll + parseInt(money2);//将商品总价累加
            }


        });
        $("#onlySum2").text(moneyAll);//将商品总价赋值给总价

    }
});