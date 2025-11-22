// server.js
// Main entry point for the Express application.
//
// - Serves static files from the "public" directory (CSS, images, etc.)
// - Responds to GET / with a simple HTML page containing:
//   - Full name (replace the placeholder below)
//   - Class section (BA4101)
//   - Inspirational quote (replace the placeholder below)
// - Listens on process.env.PORT (Render-compatible) or 3000 locally.

const express = require('express');
const path = require('path');

const app = express();

// Use PORT from environment (Render) or default to 3000 for local dev
const PORT = process.env.PORT || 3000;

// Serve static assets from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Root route - renders a minimal, responsive HTML page
app.get('/', (req, res) => {
  // Replace these placeholders with your real information
  const FULL_NAME = 'Ashley May A. Garcia';
  const CLASS_SECTION = 'BA4101';
  const INSPIRATIONAL_QUOTE = 'The best way to predict the future is to create it. — Peter Drucker';
g
  // Simple HTML string. Styling is in public/style.css and Poppins font loaded from Google Fonts.
  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>IT 412 Final Project</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <main class="container">
    <section class="card">
      <h1 class="name">${FULL_NAME}</h1>
      <p class="section"><strong>Class Section:</strong> ${CLASS_SECTION}</p>
      <blockquote class="quote">“${INSPIRATIONAL_QUOTE}”</blockquote>
      <p class="hint">Hover the card for a subtle effect — responsive and ready for deployment.</p>
    </section>
    <footer class="footer">IT 412 Final Project — Express.js</footer>
  </main>
</body>
</html>`;

  res.send(html);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});