const app = require('./app');

const PORT = 3007;

app.listen(PORT, () => {
  console.log(`put-petservice is running on http://localhost:${PORT}`);
});
