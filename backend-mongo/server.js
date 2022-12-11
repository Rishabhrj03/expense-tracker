const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const note = require('./routes/note');
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

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

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`I am listening on PORT ${PORT}`);
});
