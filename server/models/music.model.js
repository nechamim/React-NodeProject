const mongoose = require('mongoose');

const MusicSchema = new mongoose.Schema({
        instrument: String,
        description: String,
        price: {
            type: Number,
            default: 0,
        },
});

module.exports = mongoose.model("Music", MusicSchema, "musicalInstrument");
