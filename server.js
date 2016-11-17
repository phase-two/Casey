import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import faviconMiddleware from 'express-favicon-short-circuit';
import redisCache from './data/redisCache';
//import redisSeed from './data/redisSeed';
import routes from './routes';

const app = express();

app.set('port', (process.env.PORT || 3005))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(faviconMiddleware);

app.use('/', routes.movie);


// create postgres schema

// save movies to postgres

app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`);
});





