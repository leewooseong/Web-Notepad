const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saveSchema = new Schema({
    title: String,
    content: String,
    create_date: { type: Date, default: new Date() },
});

// mongoose.model(Collection Name, Document);
module.exports = mongoose.model("save", saveSchema);
