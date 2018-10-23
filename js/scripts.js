

$(document).ready(function() {
    $("#formInfo").submit(function(event) {
        event.preventDefault();

      var sentenceInput = $("input#phraseInput").val();
      var sentenceArray = sentenceInput.split("");

      for (var index = 0; index <= sentenceArray.length; index += 1) {
        if (sentenceArray[index] === "a") {
          (sentenceArray[index] = sentenceArray[index].replace("a","-"));
        } else if (sentenceArray[index] === "e") {
          (sentenceArray[index] = sentenceArray[index].replace("e","-"));
        } else if (sentenceArray[index] === "i") {
          (sentenceArray[index] = sentenceArray[index].replace("i","-"));
        } else if (sentenceArray[index] === "o") {
          (sentenceArray[index] = sentenceArray[index].replace("o","-"));
        } else if (sentenceArray[index] === "u") {
          (sentenceArray[index] = sentenceArray[index].replace("u","-"));
        };
      };
      $("#output").text(sentenceArray.join(""));

});

});
