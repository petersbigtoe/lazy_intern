// Simple predictable pattern using the current date
window.onload = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const token = `lazyToken-${yyyy}${mm}${dd}`;
  document.getElementById("csrf_token").value = token;
};
