import redis from 'redis';
export default redis.createClient();

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, () =>() { /* ... */ });
