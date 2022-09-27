const { query } = require("express");
const sql = require("mssql/msnodesqlv8");

const appDBConfig = {
  user: "sa",
  password: "123456",
  database: "SagawaTableCoreSystem",
  driver: "msnodesqlv8",
  server: "localhost",
  options: {
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

let getDBServerTime = async () => {
  try {
    await sql.connect(appDBConfig);
    console.log("connecting to server...");
    const result = await sql.query(
      " SELECT CURRENT_TIMESTAMP AS CURRENT_SERVERTIME ;"
    );
    console.log(
      result.recordset[0].CURRENT_SERVERTIME,
      "Server connected succesfully !!!"
    );
    sql.close();
    return {
      data: result.recordset[0].CURRENT_SERVERTIME,
    };
  } catch (err) {
    console.log(err.message, "ERROR ! Can not connect to server ");
    sql.close();
  }
};

const excuteScript = async (sqlQuery) => {
  try {
    await sql.connect(appDBConfig);
    console.log("Query executing...");
    const result = await sql.query(sqlQuery);
    sql.close();
    return {
      httpStatuscode: 200,
      data: result.recordset,
    };
  } catch (err) {
    console.log(err.message, "ERROR ! Can not execute the query ");
    sql.close();
    return {
      httpStatuscode: 400,
      data: {
        message: "ERROR",
        errorCode: "SQL-ERROR",
        errorMessage: err.message,
      },
    };
  }
};

const createOrUpdateTable = async (sqlQuery, dbName) => {
  // console.log("AAAAAAAAAAA", configDefault.database);
  var dbConfig = {
    user: process.env.USER || "sa",
    password: process.env.PASSWORD || "123456",
    database: dbName,
    driver: process.env.DRIVER || "msnodesqlv8",
    server: process.env.SERVER || "localhost",
    options: {
      trustServerCertificate: true, // change to true for local dev / self-signed certs
    },
  };
  try {
    await sql.connect(dbConfig);
    console.log("Query executing...");
    const result = await sql.query(`${sqlQuery}`);
    sql.close();
    return {
      httpStatuscode: 200,
      data: result.recordset,
    };
  } catch (err) {
    console.log(err.message, "ERROR ! Can not create table ");
    sql.close();
    return {
      httpStatuscode: 400,
      data: {
        message: "ERROR",
        errorCode: "SQL-ERROR",
        errorMessage: err.message,
      },
    };
  }
};

module.exports = { getDBServerTime, excuteScript, createOrUpdateTable };
