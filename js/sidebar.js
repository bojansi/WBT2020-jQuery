$(document).ready(function(){
  
  $(".content[data-content=0]").animate({width:'toggle'}, 500);        

  $.each($(".dropdown-btn"), function (key, element) {
    $.each($(element).next("div").children("ul").children(), function(key2, element2){
      element2.addEventListener("click", function(){
        $(".content").hide();
        $(".content[data-content=" + (key2+1) + "]").fadeToggle(400);
      });          
    });
  });

  $.each($(".dropdown-btn"), function (key, element) {
    element.addEventListener("click", function () {
      if($(".content[data-content=0]").attr("display")=="none"){
        $(".content").hide();
        $(".content[data-content=0]").animate({width:'toggle'}, 500);  
      }
            

      $(element).animate({
        fontSize: $(element).css('font-size') == '24px' ? "30px" : '24px'
      },{
        duration: 500
      });

      $(element).siblings("p").animate({
        fontSize: '24px'
      },{
        duration: 500
      });
      
      $(element).siblings("p").next("div").hide(300);
      $(element).next("div").first().slideToggle(500);        
    });
  });

});