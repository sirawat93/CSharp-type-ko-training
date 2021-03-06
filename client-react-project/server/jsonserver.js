const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/mockup/db.json');
const middlewares = jsonServer.defaults();
const config = require('../config/dev.json');

server.use(function(req, res, next) {
    setTimeout(next, 1000);
});
server.use(middlewares);
server.use(jsonServer.rewriter({
    'api/hotels/:id': 'api/hotels?id=:id',
    'api/hotels/country/:id': 'api/hotels?id=:id',
}))
server.use('/api', router);

server.listen(config.PORT, () => {
    console.log(`JSON Server is running on port ${config.PORT}`);
});