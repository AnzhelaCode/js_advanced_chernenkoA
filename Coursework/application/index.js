import Form from "./form.js";



 let popUpRegister = new Form("regForm");
 let registerBtn = document.getElementById('registerBtn');

registerBtn.addEventListener('click', popUpRegister.show);
registerBtn.addEventListener('click', popUpRegister.build);
