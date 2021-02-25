$(document).ready(function(){
    
  /*--------------------HEADER RIGHT HEADING TYPING ANIMATION---------------------------*/ 
    let i = 0;
    let text  = "write less, do more";
  
    function typeWriter() {
      if (i < (text.length)) {
       document.querySelector(".header-right > h1").innerHTML = text.substring(0, i+1) +'<span id="caret" aria-hidden="true"></span>';
  
        setTimeout(function() {
          typeWriter(text, i++)
        }, 150);
      }
    }
    setTimeout(function(){
      typeWriter();
    }, 1500);
    
    setInterval(function(){
      i=0;
      typeWriter();
    }, 15000);    

    /*-----------------------------------------------------------------------------------*/

  });