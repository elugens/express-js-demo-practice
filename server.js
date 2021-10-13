// 1. require express using commonjs
const express = require('express');

// 2. invoke express()
const app = express();

// 5. setting up our view engine - ejs engine
app.set('view engine', 'ejs');

// *** this is how we use express to render static html in the public folder ****************
app.use(express.static('public'));

// this allows us to override the default and access the body
app.use(express.urlencoded({ extended: true }));

// view JSON data
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index', { text: 'World' });
});

// users.js 5. import our users routers
const userRouter = require('./routes/users');

// 6. use userRouter to handle users.js routes
app.use('/users', userRouter);

// 3. run app.listen on port of your choice
app.listen(3000);
