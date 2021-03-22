$(document).ready(function(){

  $.each($(".try-example"), function(key, element){
    var frame = document.querySelector(".second[data-index='"+(key+1)+"']").contentWindow.document;  
      frame.open();
      frame.write($(".first[data-index='"+(key+1)+"']").val());
      frame.close();
    $(element).click(function(){
      var frame = document.querySelector(".second[data-index='"+(key+1)+"']").contentWindow.document;
      frame.open();
      frame.writeln($(".first[data-index='"+(key+1)+"']").val());
      frame.close();
    });  
  });

  $(".first").keydown(function(e){
    if (e.keyCode === 9) {
      e.preventDefault(); 
      document.execCommand('insertHTML', false, '&#009');
    }
  });

  $(".first").on("paste", function(e) {
      e.preventDefault();
      var text = e.clipboardData.getData("text/plain");
      document.execCommand("insertText", false, text);
  }); 

});

function highlightTags(word) {
  var rgxp = new RegExp(word, 'g');
  var repl = '<span class="markerT">' + word + '</span>';
  
  $.each($('.first'), function(key, element){
    $(element).html($(element).html().replaceAll(word, repl));
  });  
}