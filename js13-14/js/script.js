'use strict;'
$(function() {
  var data = [
    {
      question: 'Question 1',
      answers: ['Answer 1', 'Answer 2', 'Answer 3'],
      correctAnswer: 1
    },
    {
      question: 'Question 2',
      answers: ['Answer 1', 'Answer 2', 'Answer 3'],
      correctAnswer: 2
    },
    {
      question: 'Question 3',
      answers: ['Answer 1', 'Answer 2', 'Answer 3'],
      correctAnswer: 3
    }
  ];
  localStorage.setItem('data', JSON.stringify(data));
  var strQuestions = localStorage.getItem('data');
  var questions = JSON.parse(strQuestions);
  var test = $('#test').html();
  var testContent = tmpl(test, {
    data: questions
  });
  $('.questions__block').append(testContent);
  var $modal;
  var $overlay;
  function showModal(){
      $modal = $('<div class="modal"><p class="results"></p></div>');
    $overlay = $('<div class="overlay"></div>');
    $overlay.on('click', hideModal);
    $('body').append($overlay)
    $('body').append($modal)
  };
  function hideModal(){
    $modal.remove();
    $overlay.remove();
  };
  $('.test__button').on('click', showModal);
  $('.test__button').on('click', function() {
    var $result = true;
    var indx = data.map(function(el, i) {
        return el.correctAnswer - 1 + i * 3
    });
    $("input").each(function(i) {
        if (~indx.indexOf(i) && !this.checked || !~indx.indexOf(i) && this.checked) $result = false
    });
    if ($result) $(".results").html("Everything is correct");
    else {
        $(".results").html("Wrong answer");
        $("input").prop("checked", false)
    }
  });

});
