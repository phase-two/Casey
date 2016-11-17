import redis from 'redis';

const client = redis.createClient();


client.on('connect', () => {
  console.log('Redis connection established');
});


client.on('error', (err) => {
  console.log('Error with Redis connection:', err)
});

// uses redis SET command
const set = (key, value) => {
  client.set(key, value, (err, reply) => {
    //console.log(`err: '${err}', reply: '${reply}'`);
    if(err) {
      console.log(`Error: ${err}`);
    } 

    if(reply) {
      //console.log(`Reply: ${reply}`);
    }
  });
}

const get = (key, res) => {

  client.get(key, (err, reply) => {
    //console.log(`err: '${err}', reply: '${reply}'`);

    if(err) { 
      console.log(`Error: ${err}`);
      res.json({error: 'Error' });
    } else if(reply) { 
      //console.log(`Reply: ${reply}`); 
      res.json(JSON.parse(reply));
    }

  });
}

export default {
  set,
  get
}

