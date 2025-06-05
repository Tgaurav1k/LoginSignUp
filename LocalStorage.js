//Signup
function saveData(e) {
  e.preventDefault();

  const firstname = document.getElementById("firstname-input").value;
  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;
  const repeatPassword = document.getElementById("repeat-password-input").value;

  if (password !== repeatPassword) {
    alert("Passwords do not match");
    return;
  }

  let userRecords = JSON.parse(localStorage.getItem("users")) || [];

  if (userRecords.some((v) => v.email === email)) {
    alert("User already exists with this email");
    return;
  }

  userRecords.push({
    firstname,
    email,
    password,
  });

  localStorage.setItem("users", JSON.stringify(userRecords));
  alert("Signup successful");
  window.location.href = "login.html";
}

document.getElementById("formid")?.addEventListener("submit", saveData);

//Login
function Datasaved(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let userRecord = JSON.parse(localStorage.getItem("users")) || [];

  const Current_user = userRecord.find(
    (v) => v.email === email && v.password === password
  );

  if (Current_user) {
    alert("Login Successful");
    localStorage.setItem("firstname", Current_user.firstname);
    localStorage.setItem("email", Current_user.email);
    window.location.href = "profile.html";
  } else {
    alert("Login failed");
  }
}

document.querySelector("form")?.addEventListener("submit", Datasaved);

//Logout
function logout() {
  localStorage.removeItem("firstname");
  localStorage.removeItem("email");
  window.location.href = "login.html";
}
