import redis from 'redis';

const port = 6379;
const readEnpoint = 'swivelredis-001.kxlall.0001.usw2.cache.amazonaws.com';
const primaryEndpoint = 'swivelredis.kxlall.ng.0001.usw2.cache.amazonaws.com';

export const readURI = redis.createClient();
export const writeURI = redis.createClient();

// export const readURI = redis.createClient(port, readEnpoint);
// export const writeURI = redis.createClient(port, primaryEndpoint);
