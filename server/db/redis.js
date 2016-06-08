import redis from 'redis';

const port = 6379;
const sqlReadEndpoint = 'swivel-redis.kxlall.0001.usw2.cache.amazonaws.com';
const sqlPrimaryEndpoint = 'swivel-redis.kxlall.0001.usw2.cache.amazonaws.com';

const chatReadEndpoint = 'swivel-redis.kxlall.0001.usw2.cache.amazonaws.com';
const chatPrimaryEndpoint = 'swivel-redis.kxlall.0001.usw2.cache.amazonaws.com';

// export const readURI = redis.createClient({
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
// export const writeURI = redis.createClient({
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

export const sqlReadURI = redis.createClient(port, sqlReadEndpoint, {
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

export const sqlWriteURI = redis.createClient(port, sqlPrimaryEndpoint, {
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

export const chatReadURI = redis.createClient(port, chatReadEndpoint, {
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

export const chatWriteURI = redis.createClient(port, chatPrimaryEndpoint, {
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
