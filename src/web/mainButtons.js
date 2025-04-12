document.addEventListener("DOMContentLoaded", function () {
  const aboutButton = document.getElementById("fab");
  const tosButton = document.getElementById("ftos");
  const privacyButton = document.getElementById("fpp");

  aboutButton.addEventListener("click", function () {
    window.history.pushState({}, "", "/about");
    fetch("about.html")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        return response.text();
      })
      .then(html => {
        document.body.innerHTML = html;
      })
      .catch(error => {
        console.error("Error loading the page! Error: ", error);
        document.body.innerHTML = `
          <div style="text-align: center; padding: 20px;">
            <h1 style="color: red;">Couldn't load page</h1>
            <p style="font-size: 1.2rem;">There was an issue loading the requested page. Please try again later.</p>
          </div>
        `;
      });
  });

  tosButton.addEventListener("click", function () {
    alert("Insert ToS");
  });

  privacyButton.addEventListener("click", function () {
    alert("We sell your data to China");
  });
});