$(function(){
  var html = $('#test').html();
  var dt = {
    title: 'hello world'
  };
  var content = tmpl(html, dt);
  $('.article').append(content);
  // var template = $('#test').html();
  // console.log('template',template);
  // $('.article').append(template);
});
