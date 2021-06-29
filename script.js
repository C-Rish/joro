$('.canada').click(function(){
  $(this).toggleClass('actives');
  if($('.canada').hasClass('actives')){
    $('.usa').removeClass('actives');
    $('.sellers-usa').css("display","none");
    $('.sellers-canada').css("display","block");
  }
});

$('.usa').click(function(){
  $(this).toggleClass('actives');
  if($('.usa').hasClass('actives')){
    $('.canada').removeClass('actives');
    $('.sellers-canada').css("display","none");
    $('.sellers-usa').css("display","block");
  }
});

$(document).ready(function(){
  $('.slider').bxSlider();
})



