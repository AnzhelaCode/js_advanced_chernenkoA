// взять todolist из предыдущих домашек и реализовать сохранение всех записей на "сервер" используя https://www.npmjs.com/package/json-server
// при перезагрузке страницы все сохраненные записи должны подтягиваться и отрисовавыться, при добалении записи она улетает на "серевер" и сохраняется
window.addEventListener("load", function () {
    let inputInfo = document.getElementById('newToDo');
    let listItem = document.getElementById('toDoList');
    let form = document.getElementById('toDoListForm');
    let url = 'http://localhost:3000/posts';

   async function getListInfo(){
       let listInfo = await fetch(url);
       let infoObj = await listInfo.json();
       return infoObj;
    }

    let userList = getListInfo();
    userList.then(info=>{

        info.map(item=>{
            let liItem = document.createElement('li');
            listItem.append(liItem);

            let addText = document.createElement('span');
            addText.className = 'TodoText';
            liItem.className = 'listItem';
            liItem.setAttribute("data-id",item.id);
            liItem.append(addText);

            addText.append(item.itemInfo);

            let removeBtn = document.createElement('button');
            removeBtn.innerHTML = 'Remove';
            removeBtn.className = 'removeButton';
            liItem.append(removeBtn);

        })

    })
        .then(itm=>{
            let removeButton = document.querySelectorAll('.removeButton');

            if(removeButton.length >= 0){

                removeButton.forEach(function(e){

                    e.addEventListener('click', function(item) {

                        let goods = this.parentElement.dataset;
                         this.parentElement.remove();
                        let d = goods['id'];

                    let urlDel = "http://localhost:3000/posts/";
                        function deleteData(item, urlDel) {
                            return fetch(`${urlDel}${item}`, {
                                method: 'delete'
                            })
                                .then(response => response.json());
                        }
                       let x = deleteData(d, urlDel);

                    });
                });
            }
        })


    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        let listData ={
            id: Date.now(),
            itemInfo: form.newToDo.value
        }

        let jsonData = JSON.stringify(listData);

        fetch(url,{
            method:"POST",
            body: jsonData,
            headers:{
                "Content-Type": "application/json"
            }
        })
            .then(()=>{
                console.log('Information successfully saved!');
            })



        let addText = document.createElement('span');
        addText.className = 'TodoText';

        let liItem = document.createElement('li');
        listItem.append(liItem);
        liItem.className = 'listItem';
        liItem.append(addText);
        addText.append(inputInfo.value);

        let removeBtn = document.createElement('button');
        removeBtn.innerHTML = 'Remove';
        removeBtn.className = 'removeButton';
        liItem.append(removeBtn);

        inputInfo.value = '';
    })





});

