const mybatisMapper = require("mybatis-mapper");
const dbConfig = require("src/configs/db.config.js");
mybatisMapper.createMapper(["src/sql/TABLE_CORE_SYSTEM_SQL.xml"]);

const getTableListRepository = async (req) => {
  console.log("Start table list repository...", req);
  const FORMAT = { language: "sql", indent: "  " };

  try {
    const strSql = mybatisMapper.getStatement(
      "sql",
      "getTableList",
      req.body,
      FORMAT
    );
    console.log("Start table list sql query: ", strSql);
    const result = await dbConfig.excuteScript(strSql);
    return {
      httpStatuscode: 200,
      data: result.data,
    };
  } catch (error) {
    console.error("Table list repository ERROR!", error.message);
    return {
      httpStatuscode: 502,
      data: {
        errorCode: "SERVER-ERROR",
        errorMessage: "ERROR!!! check sql query ",
      },
    };
  }
};

module.exports = {
  getTableListRepository,
};
