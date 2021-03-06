const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = {
  createEventListeners,
  connect,
  disconnect
};

function createEventListeners() {
  mongoose.connection.on('connected', () => {
    console.log('Successfully connected to database.');
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Database connection closed.');
  });

  mongoose.connection.on('error', (err) => {
    console.log(`There was an issue connecting to the database: ${err}`);
  });
}

function connect() {
  mongoose.connect('mongodb://localhost/puppies', { useMongoClient: true });
}

function disconnect() {
  mongoose.disconnect();
}
