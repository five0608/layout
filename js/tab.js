$(function(){
    $(".tab-content>li>a").click(function(){
        $(".active").hide();
        $(this.hash).show().css({display:"flex"})
        $(".tab-content>li>a").removeClass("active");
        $(this).addClass("active")
    });
})