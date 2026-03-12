let app = require("./app");
const { connectDb } = require("./src/congif/connection");
require("dotenv").config();
let PORT = process.env.PORT;

connectDb();

app.listen(PORT, () => {
  console.log("Server Started on", PORT);
});

