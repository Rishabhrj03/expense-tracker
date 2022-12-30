const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const note = require('./routes/note');
const mailSend = require('./utils/sendMail');
const CronJob = require('cron').CronJob;
const path = require('path')
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

const job = new CronJob('0 57 12 * * *', mailSend, null, true);
// job.start();
app.use('/note', note);

async function dbConnect() {
  mongoose.connect(process.env.DB_URL);
}

mongoose.set('strictQuery', true);
dbConnect()
  .then(() => console.log('Connection successfully'))
  .catch((error) => {
    console.log(error.message);
  });

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`I am listening on PORT ${PORT}`);
});
