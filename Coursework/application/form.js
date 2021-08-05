class Form {
    constructor(formName) {
        this.formName = formName ? formName : "customInput";

        this.wrapper = document.createElement('div');
        this.wrapper.className = "wrapper";

        this.build = this.build.bind(this);
        this.show = this.show.bind(this);
        this.close = this.close.bind(this);
    }

        show(){
            let body = document.body;
            body.append(this.wrapper);
        }

        close(){
            this.wrapper = "";
        }

        build(){
            this.wrapper.style.cssText = `display: flex;
                                          align-items: center;
                                          justify-content: center;
                                          background: rgba(0,0,0,0.3);
                                          width: 100%;
                                          height: 100%;
                                          position: absolute;
                                          top: 0;
                                          left: 0;
                                          `;


            this.wrapper.innerHTML = `
                <div class="popUpContainer" style="padding: 20px;width: 700px;height: 450px;background: white;box-shadow: 0 0 10px rgba(0,0,0,0.4);">
                    <form name="${this.formName}" id="${this.formName}" style="display: flex;flex-direction: column;align-items: center;justify-content: center;height: 100%;width: 100%;">
                    <div class="itemWrapper">
                      <label for="name">Name</label>
                    <input id="name" type="text">
                    </div>
                  
                    <div class="itemWrapper">
                     <label for="phone">Telephone</label>
                    <input id="phone" type="number">
                    </div>
                   
                    <div class="itemWrapper">
                    <label for="password">Password</label>
                    <input id="password" type="text">
                    </div>
                    
                    <div class="itemWrapper">
                    <label for="passwordRepit">Repit pasword</label>
                    <input id="passwordRepit" type="text">  
                    </div>                    
               
                    <div class="buttonWrapper">
                        <input type="submit" id="submitBtn" value="Register">
                        <button id="close">Exit</button>
                    </div>
                    
                    </form>
                </div>
            `;

            let form = document.getElementById(this.formName);
            let submitBtn = document.getElementById("submitBtn");
            let exitBtn = document.getElementById("close");


            submitBtn.addEventListener('click', function (e){
                e.preventDefault();
                if( form.name.value == "" || form.phone.value == "" && form.phone.length < 10){
                    if(form.name){
                        form.name.style.border = '2px solid red';
                        form.name.setAttribute("data-valid","false");
                    }
                    if(form.phone){
                        form.phone.style.border = '2px solid red';
                        form.phone.setAttribute("data-valid","false");
                    }

                }else {
                    if(form.name){
                        form.name.style.border = '2px solid green';
                        form.name.setAttribute("data-valid","true");
                    }
                    if(form.phone){
                        form.phone.style.border = '2px solid green';
                        form.phone.setAttribute("data-valid","true");
                    }

                }
                if(form.password.value !== form.passwordRepit.value || form.password.value == "" || form.passwordRepit.value == ""){
                    form.password.style.border = '2px solid red';
                    form.passwordRepit.style.border = '2px solid red';
                    form.name.setAttribute("data-valid","false");
                    form.passwordRepit.setAttribute("data-valid","false");
                }else {
                    form.password.style.border = '2px solid green';
                    form.passwordRepit.style.border = '2px solid green';
                    form.password.setAttribute("data-valid","true");
                    form.passwordRepit.setAttribute("data-valid","true");
                }

                let formArray = Array.from(form.elements);
                formArray.length = formArray.length-2;

                formArray.every(function (item,index){
                    if(item.getAttribute("data-valid") == "true"){
                        alert("Supper! Data send");
                       let wrapper = document.querySelector('.wrapper');
                        wrapper.style.display = "none";
                    }else {
                        alert("Check fields and try again!");
                    }

                });

            });

            exitBtn.addEventListener('click', this.close );

        }
}

export default Form;