/*

  Задание:

    Написать при помощи async-await скрипт, который:

    Получает список компаний:  http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2
    Перебирает, выводит табличку:

    # | Company  | Balance | Показать дату регистрации | Показать адресс |
    1.| CompName | 2000$   | button                    | button
    2.| CompName | 2000$   | 20/10/2019                | button
    3.| CompName | 2000$   | button                    | button
    4.| CompName | 2000$   | button                    | button

    Данные о дате регистрации и адресс скрывать при выводе и показывать при клике.

*/
async function getCompanyList(){
    let getFirms = await fetch("http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2");
    let firmList = await getFirms.json();

    return firmList;
}

    let corporation = getCompanyList();
    corporation.then(data => {
        let wrapper = document.getElementById('userInfo');

        let ul = document.createElement('ul');
        wrapper.append(ul);

        data.map(function (item,index, arr){
            let li = document.createElement('li');
             ul.append(li);
           li.innerHTML = `<span id="${index}">${index}</span> | <span>${item.company}</span> | <span>${item.balance}</span> | <span class="registerDateBtn">Registered date</span> | <span class="addressBtn">Show Address</span>`;

        })

        let registerDateList = document.querySelectorAll('.registerDateBtn');
        registerDateList.forEach(el => el.addEventListener('click', registerDate));

        let addressBtnList = document.querySelectorAll('.addressBtn');
        addressBtnList.forEach(el => el.addEventListener('click', addressInfo));


        function clearInfo(){
            addressBtnList.forEach(item => {
                item.innerHTML = "Show Address";
            });

            registerDateList.forEach(item => {
                item.innerHTML = "Registered date";
            });
        }

        function registerDate(){
            clearInfo();
            let itemInfo = this.parentElement;
            let spanList = itemInfo.querySelectorAll('span');

            for(let i = 0; i < spanList.length; i++){
                if(spanList[i].getAttribute('id') !== null){
                    let index = spanList[i].getAttribute('id');
                        this.innerHTML = `${data[index].registered}`;
                }

            }

        }

        function addressInfo(){
            clearInfo();
            let itemInfo = this.parentElement;
            let spanList = itemInfo.querySelectorAll('span');

            for(let i = 0; i < spanList.length; i++){
                if(spanList[i].getAttribute('id') !== null){
                    let index = spanList[i].getAttribute('id');

                    let address = data[index].address;
                    let {city,zip,country,state,street,house}= address;
                     this.innerHTML = `${city},${zip},${country},${state},${street},${house}`;

                }

            }
        }


    })