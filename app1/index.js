const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    app: 'app1',
    message: 'Hello from App 1!',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', app: 'app1' });
});

app.listen(port, () => {
  console.log(`App1 listening on port ${port}`);
});