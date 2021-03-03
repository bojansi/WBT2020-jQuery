$(document).ready(function(){

  $(".btnCopy").each(function(key, element){
      $(element).click(function(){
        let text = $('.tab-content > .active > .pils-link').eq(key).text();
        copyText(text);
      })
  });
      

     function copyText(text){
      if(!text){
        return;
      }
      let elementText = text; 

      let inputElement = document.createElement('input');
      inputElement.setAttribute('value', elementText);
      document.body.appendChild(inputElement);
      inputElement.select();
      document.execCommand('copy')
      inputElement.parentNode.removeChild(inputElement)

    }
});

