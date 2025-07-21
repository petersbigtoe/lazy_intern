// Generate expected token based on current date
function getExpectedToken() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `lazyToken-${yyyy}${mm}${dd}`;
}

window.onload = () => {
  const form = document.getElementById("bugForm"); // Make sure your form has id="bugForm"
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent actual form submission

    // Generate token (optional: can be used for verification)
    const token = getExpectedToken();
    console.log("report.js loaded!");

    // Show the flag in an alert box
    alert("🎉 Flag: flag{hackera_goodjob}");
  });
};

