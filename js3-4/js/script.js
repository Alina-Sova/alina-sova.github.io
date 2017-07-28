var test = {
  elem: function(){
    var elem = document.createElement('form');
    elem.classList.add('elem');
    elem.style.width = '500px'
    document.body.appendChild(elem);
  },
  title: function(){
    var title = document.createElement('p');
    title.classList.add('title');
    title.style.padding = '15px';
    title.style.textAlign = 'center';
    title.innerHTML = 'Тест по программированию';
    var elem = document.querySelector('.elem');
    elem.appendChild(title);
  },
  order: function(){
    var elem = document.querySelector('.elem');
    var order = document.createElement('ol');
    order.classList.add('order');
    elem.appendChild(order);
  },
  items: function(){
    for(var i=0; i<3; i++){
      var item = document.createElement('li');
      item.classList.add('item');
      item.innerHTML = 'Вопрос №'+(i+1);
      var order = document.querySelector('.order');
      order.appendChild(item);
    }
  },
  unorder: function(){
    var item;
    for(var i=0; i<3; i++){
      var unorder = document.createElement('ul');
      unorder.classList.add('unorder');
      unorder.style.padding = '10px';
      item = document.querySelector('.item:nth-child(' + (i + 1) + ')');
      item.appendChild(unorder);
    }
  },
  list: function(){
    var unorder = document.querySelectorAll('.unorder');
    for(var i=0; i<3; i++){
      for(var j=0; j<3; j++){
        var list = document.createElement('li');
        var sp = document.createElement('span');
        list.classList.add('list');
        list.style.listStyle = 'none';
        sp.innerHTML = 'Вариант ответа №'+(j+1);
        unorder[i].appendChild(list);
        list.appendChild(sp);
      }
    }
  },
  check: function(){
  var a = document.querySelectorAll('ul');
    var list = document.querySelectorAll('.list');
    for(var i=0; i<9; i++){
        var check = document.createElement('input');
        check.setAttribute('type', 'checkbox');
        check.style.margin = '0 5px';
        list[i].insertBefore(check, list[i].children[0]);
    }
  },
  button: function(){
    var button = document.createElement('button');
    button.classList.add('button', 'btn-info', 'btn');
    button.style.display = 'block';
    button.style.margin = '0 auto';
    button.style.padding = '5px 20px';
    button.innerHTML = 'Проверить мои результаты';
    var elem = document.querySelector('.elem');
    elem.appendChild(button);
  }
};

test.elem();
test.title();
test.order();
test.items();
test.unorder();
test.list();
test.check();
test.button();
