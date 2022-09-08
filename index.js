// index.js

/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");
const router = express.Router();

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use('/static', express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'))

/**
 * Routes Definitions
 */

router.get("/user", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/user.html"));
});

app.get("/", async (req, res) => {
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
          res.render("index", {
            title: "XLSX",
            data: recordSet,
          });
        }
      }
    );
  });
});

/**
 * Server Activation
 */
app.use("/", router);
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
