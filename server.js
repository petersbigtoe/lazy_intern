app.post('/submit-report', (req, res) => {
  const { bug, csrf_token } = req.body;
  const today = new Date();
  const expectedToken = `lazyToken-${today.getFullYear()}${String(today.getMonth()+1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`;
  
  if (csrf_token === expectedToken) {
    return res.send("Flag: CyCTF{csrf_token_predictable_win}");
  } else {
    return res.send("Invalid token. Access denied.");
  }
});
