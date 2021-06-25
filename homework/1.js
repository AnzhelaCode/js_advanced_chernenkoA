
  /*

    Задание 1.

    Написать скрипт который будет будет переключать вкладки по нажатию
    на кнопки в хедере.

    Главное условие - изменять файл HTML нельзя.

    Алгоритм:
      1. Выбрать каждую кнопку в шапке
         + бонус выбрать одним селектором

      2. Повесить кнопку онклик
          button1.onclick = function(event) {

          }
          + бонус: один обработчик на все три кнопки

      3. Написать функцию которая выбирает соответствующую вкладку
         и добавляет к ней класс active

      4. Написать функцию hideAllTabs которая прячет все вкладки.
         Удаляя класс active со всех вкладок

    Методы для работы:

      getElementById
      querySelector
      classList
      classList.add
      forEach
      onclick

      element.onclick = function(event) {
        // do stuff ...
      }

  */
let buttonList = document.querySelectorAll('.showButton');
let tabContainer = document.querySelectorAll("#tabContainer .tab");

  buttonList.forEach(function(e,hideFun) {

      e.addEventListener('click', function(item) {

        for(let i =0; i < tabContainer.length; i++){
            hideAllTabs(tabContainer[i]);

           if(item.target.dataset['tab'] === tabContainer[i].dataset['tab']){
               tabContainer[i].classList.toggle('active');
               tabContainer[i].style.cssText = 'visibility:visible;opacity:1;';
            }
        }

      });

  });

  function hideAllTabs(item){
      item.classList.remove('active');
      item.style.cssText = 'visibility:hidden;opacity:0;';
  }