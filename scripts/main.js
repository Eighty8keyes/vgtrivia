$(document).ready(function() {
  url =
    "https://opentdb.com/api.php?amount=1&category=15&difficulty=easy&type=multiple";

  $("#questionBtn").click(function() {
    $.getJSON(url)
      .done(function(data) {
        var q = data.results[0].question;
        var baseAnswer = data.results[0].incorrect_answers;
        var correctAnswer = data.results[0].correct_answer;
        baseAnswer.push(correctAnswer);

        if (
          q.indexOf("&quot;") >= 0 ||
          q.indexOf("&eacute;") >= 0 ||
          q.indexOf("&#039;") >= 0
        ) {
          var res = q
            .replace(/&quot;/g, '"')
            .replace(/&eacute;/g, "e")
            .replace(/&#039;/g, "'");
        } else {
          res = q;
        }
        $("#question").text(res);

        //shuffling the array
        let randomAnswers = function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
          }
          return array;
        };

        $("#answer").text(randomAnswers(baseAnswer));
      })
      .fail(function(err) {
        console.log(err);
      });
  });

  $("#submit").click(function() {
    var choice = $("#submit").value;
    console.log(choice);
  });
});
