/*

    Задание 2:
    Написать форму логина (логин пароль), которая после отправки данных записывает их в localStorage.
    Если в localStorage есть записть - На страниче вывести "Привет {username}", если нет - вывести окно
    логина.

    + бонус, сделать кнопку "выйти" которая удаляет запись из localStorage и снова показывает форму логина
    + бонус сделать проверку логина и пароля на конкретную запись. Т.е. залогинит пользователя если
    он введет только admin@example.com и пароль 12345678


*/
let helloMessage = document.querySelector('._h2');
let userInfo = localStorage.getItem("loginInfo");
let loginForm = document.getElementById('loginForm');
let passwordValidation = false;
let logoValidation = false;

    helloMessage.style.display = "none";

if(userInfo !== null){
    loginForm.style.display = "none";
    helloMessage.style.display = "flex";
    userInfo = JSON.parse(userInfo);

    let p = document.createElement('p');
    p.innerHTML = `Welcome ${userInfo.login}`;
    helloMessage.prepend(p);

}else {
    loginForm.style.display = "flex";

    let patternLogo = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let loginInput = document.getElementById('login');
    loginInput.style.border = '1px solid black';

       loginInput.addEventListener("input", function (){
            let resultPatt = loginInput.value.match(patternLogo).join("");

            if(resultPatt){
               logoValidation = true;
            }
        });

    let patternPassword = /[0-9]*/;
    let passwordInput = document.getElementById('password');
    passwordInput.style.border = '1px solid black';

    passwordInput.addEventListener("input", function (){
        let resultPatt = passwordInput.value.match(patternPassword).join("");
        if(resultPatt && resultPatt !== ""){
            passwordValidation = true;
        }
    });


    loginForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        if(logoValidation === true && passwordValidation === true ){
            let data ={
                login: loginForm.login.value,
                password: loginForm.password.value
            }

            let jsonData = JSON.stringify(data);
            localStorage.setItem("loginInfo", jsonData);

            loginForm.style.display = "none";
            helloMessage.style.display = "flex";

        }else if(logoValidation === false){
            loginInput.style.border = '2px solid red';
        }else if(passwordValidation === false){
            passwordInput.style.border = '2px solid red';
        }

        let p = document.createElement('p');
        let clearP =  document.querySelector('.textMessage');
        if(clearP){
            clearP.innerHTML = '';
        }

        p.className = "textMessage";
        p.innerHTML = `Welcome ${loginForm.login.value}`;
        helloMessage.prepend(p);
    })
}

    let btnLogOut = document.getElementById('logOut');

        btnLogOut.addEventListener('click', function (){

        localStorage.removeItem('loginInfo');

        let passwordInput = document.getElementById('password');
        passwordInput.style.border = '1px solid black';

        let loginInput = document.getElementById('login');
        loginInput.style.border = '1px solid black';

        let clearP =  document.querySelector('.textMessage');
        clearP.innerHTML = '';

        helloMessage.style.display = "none";
        loginForm.style.display = "flex";

        passwordValidation = false;
        logoValidation = false;
    });

