// Simple predictable pattern using the current date
window.onload = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const expectedToken = `lazyToken-${yyyy}${mm}${dd}`;

// Set the token on load
window.onload = () => {
  const csrfField = document.getElementById("csrf_token");
  csrfField.value = expectedToken;

  // Listen for manual changes
  const observer = new MutationObserver(() => {
    if (csrfField.value === expectedToken) {
      showFlag();
    }
  });

  observer.observe(csrfField, { attributes: true, childList: true, characterData: true, subtree: true });

  // Also listen for direct user-typed changes
  csrfField.addEventListener("input", () => {
    if (csrfField.value === expectedToken) {
      showFlag();
    }
  });
};

// Function to show the flag as a notification
function showFlag() {
  // Prevent multiple alerts
  if (document.getElementById("flag-toast")) return;

  const toast = document.createElement("div");
  toast.id = "flag-toast";
  toast.textContent = "🎉 Flag: CyCTF{lazy_token_vulnerability}";
  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.right = "20px";
  toast.style.padding = "10px 20px";
  toast.style.background = "#28a745";
  toast.style.color = "#fff";
  toast.style.borderRadius = "8px";
  toast.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  toast.style.zIndex = 9999;

  document.body.appendChild(toast);
}
