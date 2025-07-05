const mongoose = require('mongoose');

if (process.argv.join().indexOf('jest') === -1) {
  const uri = 'mongodb://admin:Lis12345@54.156.27.209:27017/admin';

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));
}

module.exports = mongoose;


