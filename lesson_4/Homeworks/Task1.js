

    /*

        Документация:
        
        https://developer.mozilla.org/ru/docs/HTML/HTML5/Constraint_validation
        
        form.checkValidity() > Проверка всех полей формы на валидость
        form.reportValidity() > Проверяет все поля на валидность и выводит сообщение с ошибкой

        formElement.validity > Объект с параметрами валидности поля 
        formElement.setCustomValidity(message) > Метод который задаст validity.valid = false, и при попытке отправки
            сообщения выведет message в браузерный попал

        Классы для стилизации состояния элемента
        input:valid{}
        input:invalid{}

        
        Задание:
        
        - Имя пользователя: type:text -> validation: required; minlength = 2;
            Если пустое выввести сообщение: "Как тебя зовут дружище?!"

        - Email: type: email -> validation: required; minlength = 3; validEmail;
            Если эмейл не валидный вывести сообщение "Ну и зря, не получишь бандероль с яблоками!"
        - Пароль: type: password -> validation: required; minlength = 8; maxlength=16;
            Если пустой вывести сообщение: "Я никому не скажу наш секрет";
        - Количество сьеденых яблок: type: number -> validation: required; minlength = 1; validNumber;
            Если количество 0 вывести эррор с сообщением "Ну хоть покушай немного... Яблочки вкусные"
        - Напиши спасибо за яблоки: type: text -> validation: required;
            Если текст !== "спасибо" вывести эррор с сообщением "Фу, неблагодарный(-ая)!" используя setCustomValidity();

        - Согласен на обучение: type: checkbox -> validation: required;
            Если не выбран вывести эррор с сообщение: "Необразованные живут дольше! Хорошо подумай!"

        Внизу две кнопки:

        1) Обычный submit который отправит форму, если она валидна.
        2) Кнопка Validate(Проверить) которая запускает методы:
            - yourForm.checkValidity: и выводит на страницу сообщение с результатом проверки
            - yourForm.reportValidity: вызывает проверку всех правил и вывод сообщения с ошибкой, если такая есть
        */


    let formItem = [...document.forms['first'].elements];
    let form = document.forms['first'];
    let name = document.getElementById('name');
    let email = document.getElementById('email');

    let agree = document.getElementById('agree');
    let apple = document.getElementById('apple');

    let validateBtn = document.getElementById('validate');
    validateBtn.addEventListener('click',function (e){
        e.preventDefault();
        let report = form.reportValidity();
        if(report){

        let submitBtn = document.createElement('button');
            submitBtn.type = 'submit';
            submitBtn.id = 'submit'
            submitBtn.innerHTML = 'Send';

            validateBtn.after(submitBtn);
        }else {
            if ( !agree.checked  ){
                agree.setCustomValidity("Необразованные живут дольше! Хорошо подумай!");
            }
            else {
                agree.setCustomValidity('');
            }
            if(document.getElementById('submit')){
                document.getElementById('submit').remove();
            }

        }


    })


    formItem.forEach(function (e){
        e.addEventListener('input', function (){
            if ( this.validity.tooShort  ){
                if(this.getAttribute("name") == 'name'){
                    this.setCustomValidity("Как тебя зовут дружище?!");
                }else if(this.getAttribute("name") == 'email'){
                    this.setCustomValidity("Ну и зря, не получишь бандероль с яблоками!");
                }else if (this.getAttribute("name") == 'password'){
                    this.setCustomValidity("Я никому не скажу наш секрет");
                }

            }else if (this.getAttribute("name") === 'appleThanks' && this.value !== "Cпасибо"){
                this.setCustomValidity("Фу, неблагодарный(-ая)!");
            }else if (this.getAttribute("name") === 'apple' && this.value <= 0){
                this.setCustomValidity("Ну хоть покушай немного... Яблочки вкусные");
            }

            else {
                this.setCustomValidity('');
            }

        })
    })















