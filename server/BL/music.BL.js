const Music = require("../models/music.model");

const getAllMusicalInstrument = () => {
    return new Promise((resolve, reject) => {
        Music.find({}, (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        })
    })
}

const getMusicalInstrumentByID = (id) => {
    return new Promise((resolve, reject) => {
        Music.find({ _id: id, }, (err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        });
    })
}

const createNewMusicalInstrument = (music) => {
    return new Promise((resolve, reject) => {
        new Music({
            "instrument": music.instrument,
            "description": music.description,
            "price": music.price
        }).save((err, result) => {
            if (err) reject(err);
            if (result) resolve(result);
        })
    })
}

const updateMusicalInstrument = (id, music) => {
    return new Promise((resolve, reject) => {
        const newValues = { $set: music };
        Music.updateOne({ _id: id }, newValues, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

const deleteMusicalInstrument = (id) => {
    return new Promise((resolve, reject) => {
        Music.deleteOne({ _id: id }, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    })
}

module.exports = {
    getAllMusicalInstrument,
    getMusicalInstrumentByID,
    createNewMusicalInstrument,
    updateMusicalInstrument,
    deleteMusicalInstrument
};

