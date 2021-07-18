
/*
  Задание:
  Написать скрипт который:
    1. Собирает данные с формы (3 разных полей), конвертирует их в json и выводит в консоль.
  ->  2. Сделать отдельный инпут который выполняет JSON.parse(); на ту строку что вы туда ввели и выводит результат в консоль.

  Array.from(HTMLNodeColection); -> Arary

  <form>
    <input name="name" />
    <input name="age"/>
    <input name="password"/>
    <button></button>
  </form>

  <form>
    <input />
    <button></button>
  </form>
  -> '{"name" : !"23123", "age": 15, "password": "*****" }'

*/

let form = document.getElementById('formGet');
let content = '';

 form.addEventListener('submit',function(event){
    event.preventDefault();

    let data = {
        "name":this.name.value,
        "age":this.age.value,
        "password":this.password.value
    };

   content = JSON.stringify(data);

   console.log(content);
});



let formParseJson = document.getElementById('parseJson');

formParseJson.addEventListener('submit',jsonParse);

function jsonParse (event){
    event.preventDefault();

    let convertToObjectInfo = JSON.parse(content);

    console.log(convertToObjectInfo);

};