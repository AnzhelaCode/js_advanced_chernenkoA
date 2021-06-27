/*

  Задание написать простой слайдер.

    Есть массив с картинками из которых должен состоять наш слайдер.
    По умолчанию выводим первый элмемнт нашего слайдера в блок с id='slider'
    ( window.onload = func(){...} // window.addEventListener('load', function(){...}) )
    По клику на PrevSlide/NextSlide показываем предыдущий или следующий сладй соответствено.

    Для этого необходимо написать 4 функции которые будут:

    1. Срабатывать на событие load обьекта window и загружать наш слайд по умолчанию.
    2. RenderImage -> Очищать текущий контент блока #slider. Создавать нашу картинку и через метод аппенд чайлд вставлять её в слайдер.
    3. NextSlide -> По клику на NextSilde передавать currentPosition текущего слайда + 1 в функцию рендера
    4. PrevSlide -> Тоже самое что предыдущий вариант, но на кнопку PrevSlide и передавать currentPosition - 1
      + бонус сделать так что бы при достижении последнего и первого слада вас после кидало на первый и последний слайд соответственно.
      + бонсу анимация появления слайдов через навешивание дополнительных стилей

*/

  let OurSliderImages = [
    'images/cat1.jpg',
    'images/cat2.jpg',
    'images/cat3.jpg',
    'images/cat4.jpg',
    'images/cat5.jpg',
    'images/cat6.jpg',
    'images/cat7.jpg',
    'images/cat8.jpg'
  ];
 let currentPosition = 0;

 window.addEventListener('load', function(){
  let loader = document.querySelector('.loader');
  loader.classList.add('hidden');
});

let img = document.createElement('img');
img.className = 'pictureItem';
img.src = OurSliderImages[currentPosition];

let sliderItem = document.getElementById('slider');
 sliderItem.append(img);

let NextSilde = document.getElementById('NextSilde');
let PrevSilde = document.getElementById('PrevSilde');

PrevSilde.addEventListener('click',prevFunction);
NextSilde.addEventListener('click',nextFunction);

function nextFunction(){
  currentPosition++;
  RenderImage();

  if(currentPosition < OurSliderImages.length){

    img.src = OurSliderImages[currentPosition];
    sliderItem.append(img);

    console.log(currentPosition);
  }else {
    currentPosition = 0;
    sliderItem.append(img);
  }

}
function prevFunction(){
  currentPosition--;
  RenderImage();
  if(currentPosition < OurSliderImages.length && currentPosition > 0){
    img.src = OurSliderImages[currentPosition];
    sliderItem.append(img);
    console.log(currentPosition);
  }else {
    currentPosition = OurSliderImages.length;
    sliderItem.append(img);
  }
}

function RenderImage(){
  img.remove();
}