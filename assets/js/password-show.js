/*=====================
    Password Hide/Show 
==========================*/
var passwords = document.querySelectorAll('[type="password"]');
var togglers = document.querySelectorAll(".toggler");

showHidePassword = (index) => {
  return () => {
    var password = passwords[index];
    var toggler = togglers[index];
    if (password.type == "password") {
      password.setAttribute("type", "text");
      toggler.classList.add("show");
    } else {
      toggler.classList.remove("show");
      password.setAttribute("type", "password");
    }
  };
};

togglers.forEach((toggler, index) => {
  toggler.addEventListener("click", showHidePassword(index));
});
