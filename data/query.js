const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost:27017/moodDB', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', () => {
    console.log('mongoose connection error');
});
  
db.once('open', () => {
    console.log('mongoose connected successfully');
});

const moodSchema = new Schema({
    id: Number,
    mood: Number,
    energy: Number,
    text: String,
    date: Date
  });
  
const Mood = mongoose.model('moods', moodSchema);

const getAllData = () => new Promise((resolve, reject) => {
    Mood.find({}, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
});

const insertNewData = data => new Promise ((resolve, reject) => {
   
    const newData = new Mood (data);
    newData.save( (err, data) => {
        if (err) {
            reject(err)
        } else {
            resolve(data)    
        }
    });
});

module.exports = { insertNewData, getAllData };




