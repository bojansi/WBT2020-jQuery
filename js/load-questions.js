$(document).ready(function(){

  $(".questions").hide();
  $(".load-button").click(function(){
    let level = $(".load-button").attr("data-level");
    $(".start-message").slideUp(500);
    loadQuestions(level);
    setTimeout(function(){
      $(".questions").slideDown(1000);
    },500);
    
  });  

});

function loadQuestions(level){
  $.get("./quiz-questions/" + level + ".json", function(data){
    let q = "";
    data.forEach((element, key) => {
      console.log(element.question);
      q += "<div class='col-lg-6 py-3'>";
      q += "<div class='question h-100'>";
      q += "<h3 class='py-3'>" + element.question + "</h3>";
      element.answers.forEach((element2, key2) => {
        q += "<div><input class='form-check-input' type='radio' name='radio"+(key+1)+"' id='radioId"+(key+1)+(key2+1)+"'>";
        q += "<label class='form-check-label' for='radioId"+(key+1)+(key2+1)+"'>&nbsp&nbsp"+element2+"</label></div>";
      })     
      q += "</div></div>";
    });

    q+="<div class='col-lg-12 my-3 text-center'>";
    q+="<button class='btn btn-primary w-50 '>Submit Answers</button>";
    q+="</div>";

    $(".questions").append(q);

  });
}