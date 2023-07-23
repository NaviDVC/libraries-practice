const birthday = document.getElementById("date-of-birth");
const userBirth = document.getElementById("user-birth");
const errorMessage = document.getElementById("error-message");

const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    appendAlert("It is a very bootstrap alert!", "success");
  });
}

const birth = moment("2003-03-18");

const formatBirth = birth.format("DD MMMM YYYY");

const birthDiv = document.createElement("div");

birthDiv.innerHTML = `Date of my birth - ${formatBirth}`;

birthday.appendChild(birthDiv);

console.log(formatBirth);

const userDate = prompt(
  "Please, enter the date of your birth in the format DD-MM-YYYY (for example, 31-01-2000)"
);

const dateRE = /\d{2}\-\d{2}\-\d{4}/gm;
if (dateRE.test(userDate)) {
  const newUserBirth = moment(userDate, "DD-MM-YYYY");
  const formattedNewBirth = newUserBirth.format("MMMM DD, YYYY");
  const userBirthDiv = document.createElement("div");
  userBirthDiv.innerHTML = `Date of your birth: ${formattedNewBirth}`;
  userBirth.appendChild(userBirthDiv);
} else {
  errorMessage.classList.remove('hidden')
}
