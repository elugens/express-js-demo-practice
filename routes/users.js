// 1. require express
const express = require('express');
// 2. set up router
const router = express.Router();

// 3. setup our routes
router.get('/', (req, res) => {
  console.log(req.query.name);
  res.send('User List');
});

// router.get('/new', (req, res) => {
//   res.send('New User FORM');
// });

// Post handler
router.post('/', (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log('Error');
    res.render('users/new', { firstName: req.body.firstName });
  }
  console.log(req.body.firstName);
  res.send('Create User');
});

// 1. This will send a post request set in new.ejs
router.get('/new', (req, res) => {
  res.render('users/new', { firstName: 'Stacey' });
});

// ALL DYNAMIC ROUTES SHOULD GO AFTER STATIC ROUTES

// Method chaining using router.route
router
  .route('/:id')
  .get((req, res) => {
    console.log(req.user);
    let id = req.params.id;
    res.send(`Get user with  ID: ${id}`);
  })
  .put((req, res) => {
    let id = req.params.id;
    res.send(`Update user with ID: ${id}`);
  })
  .delete((req, res) => {
    let id = req.params.id;
    res.send(`Delete user with ID: ${id}`);
  });

// without chaining
// router.get('/:id', (req, res) => {
//   let id = req.params.id;
//   res.send(`Get user with  ID: ${id}`);
// });

// router.put('/:id', (req, res) => {
//   let id = req.params.id;
//   res.send(`Update user with ID: ${id}`);
// });

// router.delete('/:id', (req, res) => {
//   let id = req.params.id;
//   res.send(`Delete user with ID: ${id}`);
// });

const users = [{ name: 'Elugens' }, { name: 'Stacey' }];

// using router.param (similar to middleware) in expressjs
router.param('id', (req, res, next, id) => {
  req.user = users[id];
  next();
});

// 4. export our users router
module.exports = router;
