import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import faviconMiddleware from 'express-favicon-short-circuit';
import redisCache from './data/redisCache';
import routes from './routes';

const app = express();

app.set('port', (process.env.PORT || 3005))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(faviconMiddleware);

app.use('/', routes.movie);

const base_url = 'https://api.themoviedb.org/3/';
const api_key = 'api_key=17d288a9b6104691db2b250072b0adae';
const url = base_url + 'movie/now_playing?' + api_key;


/*
// fetch movies
axios.get(url)
.then(response => { 
    redisCache.set('now_playing', JSON.stringify(response.data))  
})
.catch(error => { 
  console.log('error:', error) 
});
*/


// save movies to redis

// create routes

// create postgres schema

// save movies to postgres

app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`);
});





