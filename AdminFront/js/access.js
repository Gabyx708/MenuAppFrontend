const user = sessionStorage.getItem("user");

if (user === null) {
  alert("not login");
  window.location.href = "../index.html";
}
