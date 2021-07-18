/*
  Задача:
1. При помощи fetch получить данные:
     http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2

  2. Полученый ответ преобразовать в json вызвав метод .json с объекта ответа
  3. Выбрать случайного человека и передать в следующий чейн промиса
  4. Сделать дополнительный запрос на получение списка друзей человека
     http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2
     И дальше передать обьект:
      {
        name: userName,
        ...
        friends: friendsData
      }

     Подсказка нужно вызвать дополнительный fecth из текущего чейна.
     Для того что бы передать результат выполнения доп. запроса
     в наш первый промис используйте констуркцию:

      .then(
        response1 => {
          return fetch(...)
            .then(
              response2 => {
                ...
                формируете обьект в котором будут данные человека с
                первого запроса, например его name response1.name
                и друзья которые пришли из доп. запроса
              }
            )
        }
      )

  5. Вывести результат на страничку



*/


  // fetch(url)
  //   .then(testFunc)
  //   .then(test2Func)
  //   .then( res => {
  //      return fetch()
  //       .then( friendsResponse)
  //       .then()
  //   })
  //   .then( func)
let id = '';
let index = '';

fetch('http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2')
    .then(
        (res) => {
            return res.json();
        }
    )
    .then(
        (res)=>{

            let rendNum = Math.floor(Math.random()*(res.length - 0)+0);
            id = res[rendNum]['guid'];
            index = parseInt(res[rendNum]['index']);

        return id, index;
        }
    )
    .then(
        response1 => {

            return fetch("http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2", {id,index})
                .then(
                    response2 => {
                        return response2.json();
                    }
                )
                .then(
                    response2 => {
                        return response2[index];
                    }
                )
        }
    )
.then(dataInfo);

function dataInfo(data){
    console.log( 'json', data );

    let wrapper = document.getElementById('userInfo');

    wrapper.innerHTML = `
        ${data.name} have friends : 
    `;
    let ul = document.createElement('ul');
    wrapper.append(ul);

    data.friends.map( item => {
        let li = document.createElement('li');
        ul.append(li);
        li.innerHTML = `${item.name}`;


    } )

}