$(document).ready(function(){

  $.each($(".cards-images > .row > .col-lg-4").children(), function(key, element){
    
    $(element).click(function(){
      if($(this).css("height") != "700px"){
      $(this).animate({
        height:"700px"
      }, "fast" , function(){
        $(this).children(".author-content").slideDown(100);
      }); 
    }
    else{
      $(this).animate({
        height:"400px"
      }, "fast" , function(){
        $(this).children(".author-content").slideUp(1000);
      }); 
    }      
    });
  });  
});