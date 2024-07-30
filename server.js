const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Middleware setup
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom route for login
server.post('/login', (req, res) => {
  const { mobileNo, password } = req.body;
  const users = router.db.get('users').value();
  const user = users.find(u => u.mobileNo === mobileNo && u.password === password);

  if (user) {
    res.jsonp({ success: true, user });
  } else {
    res.status(401).jsonp({ success: false, message: 'Invalid mobile number or password.' });
  }
});

// Use the default router for the remaining routes
server.use(router);

// Start the server
server.listen(5000, () => {
  console.log('JSON Server is running on http://localhost:5000');
});
