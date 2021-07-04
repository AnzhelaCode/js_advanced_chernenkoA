/*

  Задание "Шифр цезаря":

    https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F

    Написать функцию, которая будет принимать в себя слово и количество
    симовлов на которые нужно сделать сдвиг внутри.

    Написать функцию дешефратор которая вернет слово в изначальный вид.

    Сделать статичные функции используя bind и метод частичного
    вызова функции (каррирования), которая будет создавать и дешефровать
    слова с статично забитым шагом от одного до 5.


    const isMobile = document.innerWidth < 768;

    Например:
      encryptCesar( 3, 'Word');
      encryptCesar1(...)
      ...
      encryptCesar5(...)

      decryptCesar1(3, 'Sdwq');
      decryptCesar1(...)
      ...
      decryptCesar5(...)

      "а".charCodeAt(); // 1072
      String.fromCharCode(189, 43, 190, 61) // ½+¾

*/

let alfabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function encryptCesar(index, word){
    let newWord = [];
    let toArray = word.split("");
    let positionNumber = 0;
    let alfabetLength = alfabet.length-1;

    for(let i = 0; i < toArray.length; i++ ){
        for(let j = 0; j < alfabet.length; j++ ){
            if(toArray[i] == alfabet[j]){
                positionNumber = j + index;
                if(positionNumber > alfabetLength){
                    positionNumber = positionNumber - alfabet.length;
                    newWord.push(alfabet[positionNumber]);
                }else {
                    newWord.push(alfabet[positionNumber]);
                }
            }
        }
    }

return newWord.join('');
}
let test = encryptCesar(3, "xena");
console.log(test);

function decryptCesar(index, word){
     let Word = [];
     let toArray = word.split("");
     let positionNumber = 0;

     for(let i = 0; i < toArray.length; i++ ){
         for(let j = 0; j < alfabet.length; j++ ){

             if(toArray[i] == alfabet[j]){

                 positionNumber = j - index;
                 if(positionNumber < 0){
                     positionNumber = positionNumber * (-1);
                     positionNumber = alfabet.length - positionNumber;
                     Word.push(alfabet[positionNumber]);
                 }else {
                     Word.push(alfabet[positionNumber]);
                 }
             }
         }
     }
     return Word.join('');

 }

let test2 = decryptCesar(3, test);
console.log(test2);



//     Сделать статичные функции используя bind и метод частичного
// вызова функции (каррирования), которая будет создавать и дешефровать
// слова с статично забитым шагом от одного до 5.

// function encryptCesar5(){
//     let index =  Math.floor(Math.random()*(5-1)+1);
//
// }
// let encryptCesarStatic = encryptCesar.bind( encryptCesar5,3, "wood" );
// encryptCesarStatic();
// console.log(encryptCesarStatic());