$(function(){
  var html = $('#test').html();
  var dt = {

       name: 'Alina Sova',

       who:'Студентка ДонНТУ',

       profile: 'img/1.jpg',

       section:[
         {
               hr: 'first_hr',
               title:'Изучаю Front-end потому, что',
               list: [
                   {text: 'Возможность развиваться'},
                   {text: 'Креативная деятельность'},
                   {text: 'Большой выбор вакансий'}
               ],
           },
           {
               hr: 'second_hr',
               title:'Мой контактный телефон',
               content: '+380506690573'
           },
           {
               hr: 'third_hr',
               title:'Мой профиль Вконтакте',
               content: '<a href="http://vk.com/id57166927">vk.com</a>'
           },
           {
               hr: 'fourth_hr',
               title:'Мой фидбек',
               content: 'Быстро учусь, буду ценным сотрудником на вашей фирме'
           }

       ]
   };

   var portfolio = tmpl(html, dt);

   $('.templating').append(portfolio);
});
