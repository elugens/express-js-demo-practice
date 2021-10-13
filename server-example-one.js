// 1. require express using commonjs
const express = require('express');

// 2. invoke express()
const app = express();

// 5. setting up our view engine - ejs engine
app.set('view engine', 'ejs');
// app.use(logger);

// 4. Setup a route with
// We are using the function logger in the get request
// We can use in any route we choose as an example
app.get('/', logger, (req, res) => {
  console.log('Im Here');
  //   res.json({ message: 'Hello' });
  //   res.download('server.js'); opens for file download
  //   res.send('Hi');
  // RENDER HTML FILE
  res.render('index', { text: 'World' });
});

// users.js 5. import our users routers
const userRouter = require('./routes/users');

// 6. use userRouter to handle users.js routes
app.use('/users', userRouter);

// Middelware function example
// we must use req, res, and next
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

// 3. run app.listen on port of your choice
app.listen(3000);
