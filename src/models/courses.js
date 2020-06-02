const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    _id: {
        type: String,
        uppercase: true,
        alias: "code",
    },

    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: "This is default description.",
    },
}, {
    toJSON: {
        virtuals: true,
    },
    timestamps: true,
    id: false,
});

schema.virtual("code").get(function() {
    return this._id;
});

const Model = mongoose.model("Course", schema);

module.exports = Model;