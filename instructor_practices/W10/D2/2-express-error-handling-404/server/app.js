const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

const resourceNotFound = (req, res, next) => {
  const err = new Error("Sorry, the requested resource couldn't be found");
  err.statusCode = 404;
  next(err);
}

app.use(resourceNotFound)

app.use((err, req, res, next) => {
  console.log(err);
  const status = err.statusCode || 500;
  res.status(status);
  res.json({
    message: err.message,
    statusCode: status
  })
})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
