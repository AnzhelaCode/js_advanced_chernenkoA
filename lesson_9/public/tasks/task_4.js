  /*
    Задание:
    Скопировать текст из файла RegExp.txt на сайт https://regexr.com/
    Написать регулярное выражение которое найдет:
      1. Все слова. 
      2. Все совпадения букв от a до e,
      3. Года, например 2004
      4. Слова обернутые в [квадратныеКавычки]
      5. Все форматы файлов .jpg / .png / .gif
      6. Все email com.ua
      7. Все слова написанные с большой буквы
      8. Найти телефон написаный по паттерну +00 (000) 000-00-00, 
         где вместо 0 может быть любое число
  */

  let text = "RegExr was email +38 (066) 111-22-33 created 1458741by gskinner.com.ua, .jpg / .png / .gif 2024and is proudly 145 hosted.png by Media [apple]Temple.Edit the Expression & Text to see matches. [cat] Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode.The side bar includes a Cheatsheet, full Reference, and Help. You can also Save & Share with the Community, and view patterns you create or favorite in My Patterns.Explore results with the Tools below. Replace & List output custom results. Details lists capture groups. Explain describes your expression in plain English.";
  let reg1 = /\w+/g;
  let result1 = text.match(reg1).join();
  //console.log(result1);

  let reg2 = /[a-eA-e]/g;
  let result2 = text.match(reg2).join();
  //console.log(result2);

  let reg3 = /\d{4}/g;
  let result3 = text.match(reg3).join();
  //console.log(result3);

  let reg4 = /\[\w+\]/g;
  let result4 = text.match(reg4).join();
  //console.log(result4);

  let reg5 = /\.jpg|\.png|\.gif/g;
  let result5 = text.match(reg5).join();
  //console.log(result5);

  let reg6 = /\bemail\b|\bcom\.ua\b/g;
  let result6 = text.match(reg6).join();
  //console.log(result6);


  let reg7 = /\b[A-Z].*?\b/g;
  let result7 = text.match(reg7).join();
  //console.log(result7);


  let reg8 = /\+\d{2}\s\(\d{3}\)\s\d{3}\-\d{2}\-\d{2}/g;
  let result8 = text.match(reg8).join();
  console.log(result8);
