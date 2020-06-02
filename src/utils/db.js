const mongoose = require("mongoose");

exports.connectToDB = () => {
    const { DB_HOST, DB_PORT, DB_DATABASE } = process.env;
    const connectionString = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;

    //const connectionString = `mongodb://localhost:27017/mongoose-prac`;

    const db = mongoose.connection;
    db.on("connected", () => {
        console.log("DB connected");
    });
    db.on("error", (err) => {
        console.log("DB connection failed");
        console.error(err.message);
        process.exit(1);
    });
    db.on("disconnected", () => {
        console.log("mongoose connection is disconnected");
    });

    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};