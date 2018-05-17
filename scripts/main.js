$(document).ready(function() {
  url =
    "https://opentdb.com/api.php?amount=1&category=15&difficulty=easy&type=multiple";

  $("#questionBtn").click(function() {
    $.getJSON(url)
      .done(function(data) {
        var q = data.results[0].question;
        var wrongAnswer = data.results[0].incorrect_answers;
        var correctAnswer = data.results[0].correct_answer;

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

        $("#a").text(wrongAnswer[0]);
        $("#b").text(wrongAnswer[1]);
        $("#c").text(wrongAnswer[2]);
        $("#d").text(correctAnswer);
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
