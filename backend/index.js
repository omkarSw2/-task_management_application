require("dotenv").config();

const { app } = require("./app");
const { ConnectDB } = require("./db/db");

// listening Port
app.listen(process.env.PORT || 8080, async () => {
  try {
    await ConnectDB();
    console.log("Connected App ");
  } catch (error) {
    console.log("Connection Error on Express App ", error);
  }
});
