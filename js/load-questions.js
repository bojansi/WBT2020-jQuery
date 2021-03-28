$(document).ready(function(){

  let allQuestions;

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
    allQuestions = data;
    shuffleArray(data);
    let q = "";
    data.forEach((element, key) => {
      if(key < 10){
        q += "<div class='col-lg-6 py-3'>";
        q += "<div class='question h-100 '>";
        q += "<span class='d-none' id='q-id'>" + element.id + "</span>";
        q += "<h5 class='py-3 fw-bold'>" + element.question + "</h5>";
        element.answers.forEach((element2, key2) => {
          q += "<div><input class='form-check-input' type='radio' name='radio"+(key+1)+"' id='radioId"+(key+1)+(key2+1)+" required'>";
          q += "<label class='form-check-label' for='radioId"+(key+1)+(key2+1)+"'>&nbsp&nbsp"+element2+"</label></div>";
        })     
        q += "</div></div>";
      }
    }); 

    q+="<div class='col-lg-12 my-3 text-center'>";
    q+="<button class='btn btn-primary w-50 submit-q'>Submit Answers</button>";
    q+="</div>";

    $(".questions").append(q);

    $(".submit-q").click(function(){
      let correct = 0
      let wrong = 0;
      let questions = $(".question");
      let start = true;
      $(questions).each(function(key, element){
        if(start){
        let answer = $(element).find("div > .form-check-input:checked");
        if(answer.length != 0){
          let currentQuestion = allQuestions.find(q => q.id == $(element).find("#q-id").text());
          if(currentQuestion.correctAnswer == $(answer).siblings("label").text().trim()){
            correct+=1;
          }
          else{
            wrong+=1;
          }
        }
        else{
          alert("Popunite sva polja!!!");
          start = false;
          return;
        }
      }
      });
      if((correct+wrong) == 10){
        console.log("tacnih : " + correct + ", netacnih : " + wrong);
        //$(".questions").slideUp(1000);
        $(".end-message > div > .rezultat").html("Vaš rezultat iznosi <br>Tacnih : " + correct + "<br>Netacnih : " + wrong)
        $(".end-message").slideDown(500);
      }
    });

  });
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}