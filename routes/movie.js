import express from 'express';
import redisCache from '../data/redisCache';
const router = express.Router();

router.get('/now_playing', (req, res) => {
  redisCache.get('now_playing', res);
});





export default router;
