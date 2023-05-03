document.addEventListener("DOMContentLoaded", () => {
  const firstNameInput = document.getElementById("firstName");
  const firstNameError = document.getElementById("firstNameError");
  const firstNameSvg = document.getElementById("firstNameSvg");

  const lastNameInput = document.getElementById("lastName");
  const lastNameSvg = document.getElementById("lastNameSvg");
  const lastNameError = document.getElementById("lastNameError");

  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailSvg = document.getElementById("emailSvg");

  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");
  const passwordSvg = document.getElementById("passwordSvg");

  const form = document.getElementById("form");

  firstNameInput.addEventListener("input", () => {
    if (firstNameInput.value.trim() === "") {
      firstNameSvg.classList.remove("hidden");
      firstNameInput.classList.add("border-red");
      firstNameError.classList.remove("hidden");
    } else {
      firstNameSvg.classList.add("hidden");
      firstNameInput.classList.remove("border-red");
      firstNameError.classList.add("hidden");
    }
  });

  lastNameInput.addEventListener("input", () => {
    if (lastNameInput.value.trim() === "") {
      lastNameSvg.classList.remove("hidden");
      lastNameInput.classList.add("border-red");
      lastNameError.classList.remove("hidden");
    } else {
      lastNameSvg.classList.add("hidden");
      lastNameInput.classList.remove("border-red");
      lastNameError.classList.add("hidden");
    }
  });

  passwordInput.addEventListener("input", () => {
    if (passwordInput.value.trim() === "") {
      passwordSvg.classList.remove("hidden");
      passwordInput.classList.add("border-red");
      passwordError.classList.remove("hidden");
    } else {
      passwordSvg.classList.add("hidden");
      passwordInput.classList.remove("border-red");
      passwordError.classList.add("hidden");
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailValue = emailInput.value.trim();
    const isEmail = validator.isEmail(emailValue);

    if (firstNameInput.value.trim() === "") {
      firstNameSvg.classList.remove("hidden");
      firstNameInput.classList.add("border-red");
      firstNameError.classList.remove("hidden");
      return;
    }

    if (lastNameInput.value.trim() === "") {
      lastNameSvg.classList.remove("hidden");
      lastNameInput.classList.add("border-red");
      lastNameError.classList.remove("hidden");
      return;
    }

    if (!isEmail) {
      emailSvg.classList.remove("hidden");
      emailInput.classList.add("border-red");
      emailError.classList.remove("hidden");
      return;
    }

    if (passwordInput.value.trim() === "") {
      passwordSvg.classList.remove("hidden");
      passwordInput.classList.add("border-red");
      passwordError.classList.remove("hidden");
      return;
    }

    alert("Submitted");
    location.reload();
  });
});
