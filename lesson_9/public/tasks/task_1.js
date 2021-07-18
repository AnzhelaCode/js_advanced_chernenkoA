/*

    Задание 1:
    Написать скрипт, который по клику на кнопку рандомит цвет и записывает его в localStorage
    После перезагрузки страницы, цвет должен сохранится.

*/
let superButton = document.createElement('button');
superButton.innerHTML = "Rand color";
document.body.append(superButton);
superButton.addEventListener("click", colorGenerator);

    function colorGenerator(e){
        e.preventDefault();
        let min = 0;
        let max = 255;
        let r = +getRandomIntInclusive(min, max);
        let g = +getRandomIntInclusive(min,max);
        let b = +getRandomIntInclusive(min,max);
        let colorObj = {
            red: r,
            green: g,
            blue: b
        }

        localStorage.setItem('randColor',JSON.stringify(colorObj));

        build();
    }

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function build(){
        let getColorObg = localStorage.getItem('randColor');
        if(getColorObg !== null){
            let rgbObj = JSON.parse(getColorObg)
            document.body.style.background = `rgb(${rgbObj['red']},${rgbObj['green']},${rgbObj['blue']})`;
        }
    }
    build();
