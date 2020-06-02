const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, "last name is required"],
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (email) => {
                return !Joi.string().email().validate(email).error;
            },
            msg: "Invalid email format",
        },
    },
});

const Model = mongoose.model("Student", schema);

module.exports = Model;