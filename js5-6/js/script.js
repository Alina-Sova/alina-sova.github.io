var timer;
var i=0;
var time = document.getElementById('time');
var h = '00', min = '00', sec = '00', ms ='00';
time.innerHTML = h + ':' + min + ':' + sec + '.' + ms;
var elem = document.querySelectorAll('button');

elem[0].onclick = function ()  {
  if(elem[0].innerHTML === 'Start'){
    timer = setTimeout(startTime, 10);
    elem[0].innerHTML = 'Pause';
  } else{
    clearTimeout(timer);
    elem[0].innerHTML = 'Start';
    i++;
    var lbl = document.getElementById('lbl');
        lbl.innerHTML = lbl.innerHTML  + '<br>' + 'Stop #'+ i + ' ' + document.getElementById('time').innerHTML;
  }
}

  function startTime(){
    ms++;
    if (ms<10){
      ms = '0'+ ms;
    }
    if(ms==99){
      ms=0;
      sec++;
      if (sec<10){
        sec = '0'+ sec;
      }
      if(sec==59){
        sec=0;
        min++;
        if (min<10){
          min = '0'+ min;
        }
        if(min==59){
          min = 0;
          h++;
          if (h<10){
            h = '0'+ h;
          }
        }
      }
    }
    time.innerHTML = h + ':' + min + ':' + sec + '.' + ms;
    timer = setTimeout(startTime, 10);
  }
// }
elem[2].onclick = function(){
  time.innerHTML = '00:00:00.00';
  i=0;
  clearTimeout(timer);
  h = min = sec = ms ='00';
  document.getElementById('lbl').innerHTML = '';
  if(elem[0].innerHTML === 'Pause'){
    elem[0].innerHTML = 'Start'
  }
}
elem[1].onclick = function(){
  if(elem[0].innerHTML === 'Pause'){
    i++;
    var lbl = document.getElementById('lbl');
        lbl.innerHTML = lbl.innerHTML  + '<br>' + 'Stop #'+ i + ' ' +  document.getElementById('time').innerHTML;
  }
}
