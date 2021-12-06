window.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("remember-me"),
    form = document.getElementsByTagName("form")[0],
    userEmail = document.getElementById("userEmail"),
    userPass = document.getElementById("userPass"),
    userInput = {
      email: "",
      password: "",
      checkboxChecked: "",
    };

  if (localStorage.getItem("loginForm")) {
    Object.assign(userInput, JSON.parse(localStorage.getItem("loginForm")));
    userEmail.value = userInput.email;
    userPass.value = userInput.password;
    checkbox.checked = userInput.checkboxChecked;
  }

  checkbox.addEventListener("click", () => {
    userInput.checkboxChecked = checkbox.checked == true ? true : false;
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      userEmail.value === "" ||
      userEmail.value === null ||
      userPass.value === "" ||
      userPass.value === null
    ) {
      alert("Enter you data");
      localStorage.removeItem("loginForm");
      return
    }

    if (userInput.checkboxChecked) {
      userInput.email = userEmail.value;
      userInput.password = userPass.value;
      localStorage.setItem("loginForm", JSON.stringify(userInput));
    } else {
      localStorage.removeItem("loginForm");
    }
  });
});
