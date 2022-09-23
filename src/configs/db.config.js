const { query } = require("express");
const sql = require("mssql/msnodesqlv8");

var configDefault = {
  user: process.env.USER || "sa",
  password: process.env.PASSWORD || "123456",
  database: process.env.DATABASE || "SagawaTableCoreSystem",
  driver: "msnodesqlv8",
  server: process.env.SERVER || "localhost",
  options: {
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

let getDBServerTime = async () => {
  try {
    await sql.connect(configDefault);
    console.log("connecting to server...");
    const result = await sql.query(
      " SELECT CURRENT_TIMESTAMP AS CURRENT_SERVERTIME ;"
    );
    console.log(
      result.recordset[0].CURRENT_SERVERTIME,
      "Server connected succesfully !!!"
    );
    return {
      data: result.recordset[0].CURRENT_SERVERTIME,
    };
  } catch (err) {
    console.log(err.message, "ERROR ! Can not connect to server ");
  }
};

const excuteScript = async (sqlQuery) => {
  try {
    await sql.connect(configDefault);
    console.log("Query executing...");
    const result = await sql.query(sqlQuery);
    return {
      httpStatuscode: 200,
      data: result.recordset,
    };
  } catch (err) {
    console.log(err.message, "ERROR ! Can not execute the query ");
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

const createOrUpdateTable = async (sqlQuery, schemaName) => {
  // console.log("AAAAAAAAAAA", configDefault.database);
  var config = {
    user: process.env.USER || "sa",
    password: process.env.PASSWORD || "123456",
    database: schemaName,
    driver: process.env.DRIVER || "msnodesqlv8",
    server: process.env.SERVER || "localhost",
    options: {
      trustServerCertificate: true, // change to true for local dev / self-signed certs
    },
  };
  try {
    await sql.connect(config);
    console.log("Query executing...");
    const result = await sql.query(`${sqlQuery}`);
    return {
      httpStatuscode: 200,
      data: result.recordset,
    };
  } catch (err) {
    console.log(err.message, "ERROR ! Can not create table ");
    return {
      httpStatuscode: 400,
      data: {
        message:"ERROR",
        errorCode: "SQL-ERROR",
        errorMessage: err.message,
      },
    };
  }
};

module.exports = { getDBServerTime, excuteScript, createOrUpdateTable };
