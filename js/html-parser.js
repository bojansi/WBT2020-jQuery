$(document).ready(function(){
const first = document.querySelector(".first");
const iframe = document.querySelector(".second");
const btn = document.querySelector(".run");

const tags=['html','style','head','body','meta','title','script','h1','h2','h3','h4','h5','h6','h7','DOCTYPE'];

const examples = [
  ['<head>','\t<script src="https://code.jquery.com/jquery-3.5.0.js"></script>','\t<style>','\t.oboji{','\t\tcolor:red;','\t}','\t.podvuci{','\t\ttext-decoration:underline;','\t}','\t.smanji{','\t\tfont-size:18px;','\t}','\t</style>','<body>','\t<h1>Prvi naslov</h1>','\t<h1>Drugi naslov</h1>','\t<h1>Treci naslov</h1>','\t<script>','\t\t$("h1").addClass("podvuci");','\t\t$("h1:nth-of-type(3)").addClass("oboji smanji");','\t</script>','</body>'],

  ['<head>','\t<script src="https://code.jquery.com/jquery-3.5.0.js"></script>','\t<style>','\t.oboji{','\t\tcolor:red;','\t}','\t.podvuci{','\t\ttext-decoration:underline;','\t}','\t.smanji{','\t\tfont-size:18px;','\t}','\t</style>','<body>','\t<h1 class="oboji smanji">Prvi naslov</h1>','\t<h1 class="podvuci smanji">Drugi naslov</h1>','\t<h1 class="oboji podvuci">Treci naslov</h1>','\t<script>','\t\t$("h1").removeClass("podvuci");','\t\t$("h1:nth-of-type(1)").removeClass("oboji smanji");','\t</script>','</body>'],

  ['<head>','\t<script src="https://code.jquery.com/jquery-3.5.0.js"></script>','\t<style>','\t.oboji{','\t\tcolor:red;','\t}','\t.podvuci{','\t\ttext-decoration:underline;','\t}','\t.smanji{','\t\tfont-size:18px;','\t}','\t</style>','<body>','\t<h1 class="oboji">Prvi naslov</h1>','\t<h1>Drugi naslov</h1>','\t<h1 class="smanji">Treci naslov</h1>','\t<script>','\t\t$("h1").click(function(){','\t\t$(this).toggleClass("oboji podvuci");});','\t</script>','</body>'],

  ['<head>','\t<script src="https://code.jquery.com/jquery-3.5.0.js"></script>','\t<style>','\t.oboji{','\t\tcolor:red;','\t}','\t.podvuci{','\t\ttext-decoration:underline;','\t}','\t.smanji{','\t\tfont-size:22px;','\t}','\t</style>','<body>','\t<h1 class="smanji">Prvi naslov</h1>','\t<h2>Drugi naslov</h2>','\t<h3 class="oboji">Treci naslov</h3>','\t<script>','\t\t$( "h1" ).text( $( "h1" ).hasClass("smanji").toString() );','\t\t$( "h2" ).text( $( "h2" ).hasClass("oboji").toString() );','\t\t$( "h3" ).text( $( "h3" ).hasClass("podvuci").toString() );','\t</script>','</body>'],

  ['<head>','\t<script src="https://code.jquery.com/jquery-3.5.0.js"></script>','\t<style>','\t.oboji{','\t\tcolor:red;','\t}','\t.podvuci{','\t\ttext-decoration:underline;','\t}','\t.smanji{','\t\tfont-size:22px;','\t}','\t</style>','<body>','\t<h1 class="oboji">Prvi naslov</h1>','\t<h2>Drugi naslov</h2>','\t<h3 class="smanji">Treci naslov</h3>','\t<script>','\t\t$( "h1" ).text( $( "h1" ).css("color") );','\t\t$( "h2" ).css("border", "5px solid black");','\t\t$( "h2" ).css("border-radius", "20px");','\t\t$( "h3" ).append(" Font size: " + $( "h3" ).css("font-size"));','\t\t$( "h3" ).css("font-family", "Arial");','\t</script>','</body>']
];

$(".first").text('');

$.each(examples, function(key, element){
  $.each(element, function(key2, element2){
    $(".first[data-index='"+(key+1)+"']").append(document.createTextNode(element2));
    $(".first[data-index='"+(key+1)+"']").append('<br>');
  }); 
  $(".second[data-index="+(key+1)+"]").attr("src","data:text/html;charset=utf-8," + encodeURI($(".first[data-index='"+(key+1)+"']").text()));
});

$.each(tags, function(key, element){
  highlightTags(element);
});


$(".first").keydown(function(e){
  if (e.keyCode === 9) {
    e.preventDefault(); 
    document.execCommand('insertHTML', false, '&#009');
  }
});

first.addEventListener('keyup',()=>{
  tags.forEach(function(element){
    highlightTags(element);
  });
})

    first.addEventListener("paste", function(e) {
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