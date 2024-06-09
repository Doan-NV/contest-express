const mongoose = require('mongoose');
const { databaseConfig } = require('../configs');

const { db, options } = databaseConfig;

const auth = db.user && db.password ? `${db.user}:${db.password}@` : '';

/**
 * Connect mongoose DB.
 */
const hosts = db.host.split(',');
const urlHost = hosts.map((host) => `${host}:${db.port}`).join(',');
let urlConnect = `mongodb://${auth}${urlHost}/${db.database}`;

if (db.db_replica) {
  urlConnect += `?replicaSet=${db.db_replica}`;
  if (db.db_auth) {
    urlConnect += `&authSource=${db.db_auth}`;
  }
} else {
  if (db.db_auth) {
    urlConnect += `?authSource=${db.db_auth}`;
  }
}

const connectDB = async () => {
  try {
    await mongoose.connect(`${urlConnect}`, options);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error', err);
    process.exit(1);
  }
};

module.exports = connectDB;
