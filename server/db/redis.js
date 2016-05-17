import redis from 'redis';

const port = 6379;
const readEnpoint = 'swivelredis-001.kxlall.0001.usw2.cache.amazonaws.com';
const primaryEndpoint = 'swivelredis.kxlall.ng.0001.usw2.cache.amazonaws.com';

export const readURI = redis.createClient({
  retry_strategy: (options) => {
    if (options.error.code === 'ECONNREFUSED') {
      // End reconnecting on a specific error and flush all commands with a individual error
      return new Error('The server refused the connection');
    }
    if (options.total_retry_time > 1000 * 60 * 60) {
      // End reconnecting after a specific timeout and flush all commands with a individual error
      return new Error('Retry time exhausted');
    }
    if (options.times_connected > 10) {
      // End reconnecting with built in error
      return undefined;
    }
    // reconnect after
    return Math.max(options.attempt * 100, 3000);
  },
});
export const writeURI = redis.createClient({
  retry_strategy: (options) => {
    if (options.error.code === 'ECONNREFUSED') {
      // End reconnecting on a specific error and flush all commands with a individual error
      return new Error('The server refused the connection');
    }
    if (options.total_retry_time > 1000 * 60 * 60) {
      // End reconnecting after a specific timeout and flush all commands with a individual error
      return new Error('Retry time exhausted');
    }
    if (options.times_connected > 10) {
      // End reconnecting with built in error
      return undefined;
    }
    // reconnect after
    return Math.max(options.attempt * 100, 3000);
  },
});

// export const readURI = redis.createClient(port, readEnpoint, {
//   retry_strategy: (options) => {
//     if (options.error.code === 'ECONNREFUSED') {
//       // End reconnecting on a specific error and flush all commands with a individual error
//       return new Error('The server refused the connection');
//     }
//     if (options.total_retry_time > 1000 * 60 * 60) {
//       // End reconnecting after a specific timeout and flush all commands with a individual error
//       return new Error('Retry time exhausted');
//     }
//     if (options.times_connected > 10) {
//       // End reconnecting with built in error
//       return undefined;
//     }
//     // reconnect after
//     return Math.max(options.attempt * 100, 3000);
//   },
// });

// export const writeURI = redis.createClient(port, primaryEndpoint, {
//   retry_strategy: (options) => {
//     if (options.error.code === 'ECONNREFUSED') {
//       // End reconnecting on a specific error and flush all commands with a individual error
//       return new Error('The server refused the connection');
//     }
//     if (options.total_retry_time > 1000 * 60 * 60) {
//       // End reconnecting after a specific timeout and flush all commands with a individual error
//       return new Error('Retry time exhausted');
//     }
//     if (options.times_connected > 10) {
//       // End reconnecting with built in error
//       return undefined;
//     }
//     // reconnect after
//     return Math.max(options.attempt * 100, 3000);
//   },
// });
