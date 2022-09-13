const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String }
}, { timestamps: true });

const Person = mongoose.model('Person', PersonSchema) // 'person' refers to what the table will be called in the db

module.exports = Person;
