
$(document).ready(function () {
    $(".sub-number").click(function () {
        var pro_price = 0;
        var $val = parseInt($(this).next().val());
        if ($val != 0) {
            $(this).next().val($val - 1);
        } else {
            $(this).css("disabled", "disabled");
        }
        getTotalMoney();
    })
    $(".add-number").click(function () {
        var $val = parseInt($(this).prev().val());
        $(this).prev().val($val + 1);
        getTotalMoney();
    })
    //记件
    function getTotalMoney() {
        var total = 0;
        $(".txt-num").each(function () {
            var num = $(this).val();
            total = num;

        });
        $(".jian").text(num);
    }

    //结算
    function getTotalMoney() {
        var total = 0;
        $(".txt-num").each(function () {
            var price = $(this).parent().parent().parent().find(".info-5").text();
            total += parseInt($(this).val()) * parseInt(price);
        });
        $(".totalMoey").text(total);
    }
})