require("dotenv").config();
const express = require("express");
const routes = require("./routes.js");
const { connectToDB } = require("./utils/db");
const app = express();
const PORT = process.env.PORT || 3000;
//const PORT = 3000;

app.use(express.json());

app.use("/api", routes);

connectToDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server listening on port ${PORT}`);
    });
});