/*

  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>

*/

function comment(name, text, link ){
    this.name = name;
    this.text = text;
    this.link = link;
    this.likes = 0;
}

let myComment1 = new comment("Anna", 'Gool!', "https://www.carters.com/on/demandware.static/-/Sites-Carters-Library/default/dw4c02e07a/content/carters/cslp/sbc/040121/CAR_Q2_2021_TG_ShopAll.jpg");
let myComment2 = new comment("Bill", 'Perfect!', "https://www.carters.com/on/demandware.static/-/Sites-Carters-Library/default/dwd892b114/content/carters/cslp/sbc/040121/CAR_Q2_2021_KB_ShopAll.jpg");
let myComment3 = new comment("Olga", 'Great!', "https://images.medicinenet.com/images/article/main_image/puberty-in-girls.jpg");
let myComment4 = new comment("Kirill", 'Excellent!', "https://image.freepik.com/free-photo/little-boy-smiling-happiness-studio-portrait_53876-38570.jpg");

let CommentsArray = [myComment1,myComment2,myComment3,myComment4];

function showComment (arr){
    this.arr = arr;
    let CommentsFeed = document.getElementById('CommentsFeed');


    for(let i = 0; i < this.arr.length; i++){
        let h2 = document.createElement('h2');
        h2.innerHTML =`Name: ${this.arr[i]['name']}`;
        CommentsFeed.append(h2);

        let info = document.createElement('p');
        info.innerHTML =`Comment: ${this.arr[i]['text']}`;
        CommentsFeed.append(info);

        let avatar = document.createElement('img');
        avatar.style.cssText = 'width:250px;height:250px;';
        avatar.src = `${this.arr[i]['link']}`;

        CommentsFeed.append(avatar);

    }
}
showComment (CommentsArray);



