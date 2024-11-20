const fs = require('fs');
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'db.json'), 'utf-8')
);
const router = jsonServer.router(data);

const port = 5005;
server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running at http://localhost:${port}`);
});

module.exports = server;
