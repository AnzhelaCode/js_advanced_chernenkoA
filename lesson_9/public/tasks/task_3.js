/*

    Задание 3:


    Написать класс Posts в котором есть данные:

    _id
    isActive,
    title,
    about,
    likes,
    created_at

    У класса должен быть метод addLike и render.

    Нужно сделать так чтобы:
    - После добавления поста, данные о нем записываются в localStorage.
    - После перезагрузки страницы, данные должны сохраниться.
    - Можно было предзагрузить данные в класс из апи: http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2

*/

class Posts{
    constructor(_id, isActive, title, about, likes, created_at) {
        this.id = _id;
        this.isActive = isActive;
        this.title = title;
        this.about = about;
        this.likes = likes;
        this.created_at = created_at;
    }

    addLike(){

    }

    render(){

    }
}

