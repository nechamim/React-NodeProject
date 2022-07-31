const express = require("express"); 
const bodyParser = require("body-parser");
const cors = require('cors'); 
const mongoose = require("mongoose");
const musicRouter = require("./routes/music.router");

const app = express(); 
const PORT = process.env.PORT || 8080; 

mongoose.connect('mongodb://localhost:27017/musicalInstrumentShop',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors())

app.use(bodyParser.json());
app.use("/music", musicRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});