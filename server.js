import express from 'express';
import axios from 'axios';



const app = express();

app.set('port', (process.env.PORT || 3005))

const base_url = 'https://api.themoviedb.org/3/';
const api_key = 'api_key=17d288a9b6104691db2b250072b0adae';

const url = base_url + 'movie/now_playing?' + api_key;

axios.get(url)
  .then(response => { console.log('response:', response.data) })
  .catch(error => { console.log('error:', error) });

app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`);
});
