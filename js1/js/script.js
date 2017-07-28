var a = prompt('Введите число', 0);
var b = prompt('Число степени', 0);
var result = 1;
for (var i = 0; i<b; i++){
  result= a*result;
};
console.log('Число = ',a);
console.log('Степень = ',b);
console.log('Результат = ',result);

var names = [];
for (var i=0; i<5; i++) {
  names[i] = prompt('Введите имя', 'Леша');
  console.log('имя №', i+1, ': ', names[i]);
};
var SeаrchName = prompt('Введите имя для сравнения', 'Миша');
var answ = "такого имени нет в списке";
for(var i=0; i<5; i++){
  if(SeаrchName == names[i]){
    answ = SeаrchName + ', вы успешно вошли';
  }
};
alert(answ);
