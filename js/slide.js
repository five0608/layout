$(function(){
    var currentIndex=0;
    setInterval(function(){
        if(currentIndex<2){
            currentIndex++;
        }else{
            currentIndex=0;
        }
        $(".slide").eq(currentIndex).siblings().fadeOut();
        $(".slide").eq(currentIndex).fadeIn();
    },3000);
})