/*

    Задание 2.

    Напишите фунцию, которая изменяет цвет-фона и цвет текста, присваивая к новым цветам
    значение из this.color, this.background
    А так же добавляет элемент h1 с текстом "I know how binding works in JS"

    1.1 Ф-я принимает один аргумент,
    второй попадает в него через метод .call(obj)

    1.2 Ф-я не принимает никаких аргументов,
    а необходимые настройки полностью передаются через bind

    1.3 Ф-я принимает фразу для заголовка,
    обьект с настройками передаем через .apply();

*/
  let colors = {
    background: 'purple',
    color: 'white'
  }

 function myCall( color ){
    let title = document.createElement('h1');
   title.innerHTML = 'I know how binding works in JS';
   document.body.append(title);

    document.body.style.background = this.background;
    document.body.style.color = color;
  }
  myCall.call( colors, 'red' );




function secondFunction(  ){
  let title = document.createElement('h1');
  title.innerHTML = 'I know how binding works in JS';
  document.body.append(title);

  document.body.style.background = this.background;
  document.body.style.color = this.color;
}
let mysecondFunction = secondFunction.bind( colors );
mysecondFunction();




function thirdFunction( text ){
  let title = document.createElement('h1');
  title.innerHTML = text;
  document.body.append(title);

  document.body.style.background = this.background;
  document.body.style.color = this.color;
}
thirdFunction.apply( colors, ["I know how binding works in JS"] );
