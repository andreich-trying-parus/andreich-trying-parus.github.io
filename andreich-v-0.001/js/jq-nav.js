(function(s) {
    var n;
    s(".tab").on("click", "li:not(.tab--active)", function() {
        n = s(this).parents(".tabs-wrapper"), s(this).shitTab(n)
    }), s.fn.shitTab = function(n) {
        s(this).addClass("tab--active").siblings().removeClass("tab--active"), n.find(".box").eq(s(this).index()).show(1, function() {
            s(this).addClass("box--jq-visible")
        }).siblings(".box").hide(1, function() {
            s(this).removeClass("box--jq-visible")
        })
    }
})(jQuery);