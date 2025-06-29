const mongoose = require('mongoose');

if (process.argv.join().indexOf('jest') === -1) {
  const uri = 'mongodb+srv://lmpacheco:ZrvwTwBSagITmKAT@cluster0.ny218yj.mongodb.net/shaggymission_pets?retryWrites=true&w=majority&appName=Cluster0';

  mongoose.connect(uri)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));
}

module.exports = mongoose;

