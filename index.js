// index.js
require("app-module-path").addPath(__dirname);
global.__base = __dirname;
const dotenv = require("dotenv");
const env = dotenv.config({ path: "src/configs/.env" });

/**
 * Required External Modules
 */
const dbConfig = require("src/configs/db.config.js");
const express = require("express");
const path = require("path");
const router = express.Router();

/**
 * App Variables
 */
const app = express();
const port = process.env.SERVER_PORT || "3333";

/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use("/static", express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'))

/**
 * Routes Definitions
 */
router.get("/user", (req, res) => {
  res.sendFile(path.join(__dirname + "/src/views/user.html"));
});

/*
 ** API Name      : Table Version Registration
 ** Last Modified : 2022-09-12
 *****************************/
//const tableRegistrationController = require("src/controllers/table.registration.controller.js");
//router.post("/table-registration", tableRegistrationController.execute);

/*
 ** API Name      : Table Version List
 ** Last Modified : 2022-09-12
 *****************************/
const tableListController = require("src/controllers/table.list.controller.js");
router.post("/table-list", tableListController.get);

app.get("/", async (req, res) => {
  const dbServerTime = await dbConfig.getDBServerTime();
  res.render("index", {
    title: "XLSX",
    data: dbServerTime.data,
  });
});

/**
 * Server Activation
 */
app.use(router);
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

app.get("/test", async function (req, res) {
  var level = parseInt(req.query.level) || 0;
  console.log("server level:", level);
  const sql = require("mssql/msnodesqlv8");

  var dataTB = [];

  var config = {
    user: "sa",
    password: "123456",
    database: "SagawaCoreSystem",
    driver: "msnodesqlv8",
    server: "localhost",
    options: {
      trustServerCertificate: true, // change to true for local dev / self-signed certs
    },
  };
  await sql.connect(config, function (err, conn) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("done connecting");
    var request = new sql.Request();
    request.query(
      "select top(1) * from RRK_MST_TRH_TDB",
      function (err, recordSet) {
        if (err) {
          console.log(err, "error connecting tb");
        } else {
          console.log(recordSet, "done connecting db");
          // dataTB = recordSet
          res.send(recordSet);
        }
      }
    );
  });
});
