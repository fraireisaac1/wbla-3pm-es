const userDropdown = document.getElementById("user-dropdown");
const loginButton = document.getElementById("login-button");
const dropdown = document.querySelector(".dropdown");
const cartButton = document.getElementById("cart-button");
const changeAccount = document.getElementById("changeAccount");

if (localStorage.getItem("username")) {
  userDropdown.textContent = localStorage.getItem("username");
  loginButton.style.display = "none";
  dropdown.style.display = "block";
}
cartButton.addEventListener("click", function () {
  window.location.href = "cart.html";
});
changeAccount.addEventListener("click", function () {
  window.location.href = "login.html";
});