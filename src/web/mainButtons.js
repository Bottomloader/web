document.addEventListener("DOMContentLoaded", function () {
  const aboutButton = document.getElementById("fab");
  const tosButton = document.getElementById("ftos");
  const privacyButton = document.getElementById("fpp");

  aboutButton.addEventListener("click", function () {
    alert("Gay bot like you");
  });

  tosButton.addEventListener("click", function () {
    alert("Insert ToS");
  });

  privacyButton.addEventListener("click", function () {
    alert("We sell your data to China");
  });
});