// CALL TO ACTION FORM
const showForm = document
  .getElementById("show-form")
  .addEventListener("click", function () {
    form.classList.add("show");
    mainBody.classList.add("main");
    disableScrolling();
  });

const closeForm = document
  .getElementById("close-btn")
  .addEventListener("click", function () {
    form.classList.remove("show");
    mainBody.classList.remove("main");
    enableScrolling();
  });
