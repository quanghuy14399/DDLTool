const mybatisMapper = require("mybatis-mapper");
const dbConfig = require("src/configs/db.config.js");
mybatisMapper.createMapper(["src/sql/TABLE_CORE_SYSTEM_SQL.xml"]);

const getTableListRepository = async (req) => {
  console.log("get table list repository...", req);
  const FORMAT = { language: "sql", indent: "  " };

  try {
    const strSql = mybatisMapper.getStatement(
      "sql",
      "getTableList",
      req.body,
      FORMAT
    );
    console.log("get table list sql query: ", strSql);
    const result = await dbConfig.excuteScript(strSql);
    return {
      httpStatuscode: 200,
      data: result.data,
    };
  } catch (error) {
    console.error("get list repository ERROR!", error.message);
    return {
      httpStatuscode: 400,
      data: {
        message: "ERROR",
        errorCode: "SQL-ERROR",
        errorMessage: error.message,
      },
    };
  }
};

const insertTableListRepository = async (req) => {
  console.log("insert table list repository...", req);
  const FORMAT = { language: "sql", indent: "  " };

  try {
    const strSql = mybatisMapper.getStatement(
      "sql",
      "addTableInfo",
      req,
      FORMAT
    );
    const strSqlConverted = strSql.replace(/N+\s+\'/g, `N'`)
    console.log("insert table list sql query: ", strSqlConverted);
    const result = await dbConfig.excuteScript(
      strSqlConverted
    );

    return {
      httpStatuscode: 200,
      data: {
        message:"SUCCESS",
        errorCode: null,
        errorMessage: null,
      },
    };
  } catch (error) {
    console.error("insert list repository ERROR!", error.message);
    return {
      httpStatuscode: 400,
      data: {
        message:"ERROR",
        errorCode: "SQL-ERROR",
        errorMessage: error.message,
      },
    };
  }
};

module.exports = {
  getTableListRepository,
  insertTableListRepository,
};
