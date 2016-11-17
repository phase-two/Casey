import axios from 'axios';
import redisCache from './redisCache';

const base_url = 'https://api.themoviedb.org/3/';
const api_key = 'api_key=17d288a9b6104691db2b250072b0adae&language=en-US';
const urls = {
  nowPlaying: 'movie/now_playing?',
  upcoming: 'movie/upcoming?'
}

let url = '';


/***** fetch now playing movies *****/
url = base_url + urls.nowPlaying + api_key;
axios.get(url)
.then(response => { 
    redisCache.set('now_playing', JSON.stringify(response.data))  
    console.log('seeded: now_playing');
})
.catch(error => { 
  console.log('error:', error) 
});


/***** fetch upcoming movies *****/
url = base_url + urls.upcoming + api_key;
axios.get(url)
.then(response => {
  redisCache.set('upcoming', JSON.stringify(response.data))
  console.log('seeded: upcoming');
});


