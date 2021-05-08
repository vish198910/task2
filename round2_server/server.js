const { OPEN_CREATE } = require("sqlite3");
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");


//creating a simple server
const app = express();

//parsing body to req.body
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
    })
  );

  
//creating the database and connecting to it
const connectDatabase = () => {
  let db = new sqlite3.Database(
    "./database/sample.db",
    sqlite3.OPEN_READWRITE | OPEN_CREATE,
    (err) => {
      if (err) {
        return console.log(err.message);
      }
      console.log("Connected to the in-memory SQlite database.");
    }
  );
  return db;
};

//closing the database connection

const closeConnection = (db) => {
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Close the database connection.");
  });
};

//endpoints

app.get("/", (req, res) => {
  const db = connectDatabase();
  let sql =
    "SELECT DISTINCT HEADING heading, SMALL_DESC small_desc, LONG_DESC long_desc, IMG_URL img_url FROM data_table";
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log(err.message);
    } else {

     res.json({status:200,data:rows});
      
    }
  });

});

app.listen(8000, () => {
  console.log("Listening to port 8000");
});
