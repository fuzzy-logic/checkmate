require('sexylog');
const restify = require('restify');
const serveStatic = require('serve-static-restify')
const requireDir = require('require-dir');
const restifySwaggerJsdoc = require('restify-swagger-jsdoc');

const PORT = process.env.PORT || 4001;
const routes = requireDir('./server/routes');
const server = restify.createServer();

server.pre(serveStatic('public'));

//server.get('/api/:entity', routes.entityHandler.getEntity);
//server.get('/api/:entity/:id', routes.entityHandler.getEntityById);
//server.get('/api/:entity/:id/:command', routes.entityHandler.getCommand);

server.listen(PORT, function() {
    logger.warn('checkmate listening at %s', 'http://localhost:' + PORT);
    logger.info('swagger ui: %s', 'http://localhost:' + PORT + '/docs/swagger');
  });
  
  // Comfigure swagger api docs

  /*
  restifySwaggerJsdoc.createSwaggerPage({
      title: 'API documentation', // Page title (required) 
      version: '1.0.0', // Server version (required) 
      server: server, // Restify server instance created with restify.createServer() 
      path: '/docs/swagger', // Public url where the swagger page will be available 
      apis: [ `${__dirname}/server/routes/api.yml` ], // Path to the API docs 
      //definitions: {petstore: require('./server/routes/swagger.json')}, // External definitions to add to swagger (optional) 
      routePrefix: 'api', // prefix to add for all routes (optional) 
      forceSecure: false // force swagger-ui to use https protocol to load JSON file (optional, default: false) 
  });
  */