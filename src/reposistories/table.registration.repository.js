const mybatisMapper = require("mybatis-mapper");
const dbConfig = require("src/configs/db.config.js");
//mybatisMapper.createMapper(["src/sql/TABLE_CORE_SYSTEM_SQL.xml"]);
mybatisMapper.createMapper(["src/sql/DATABASE_ON_SHEMA_SQL.xml"]);

const executeTableRegistrationRepository = async (req) => {
  // console.log("Start table registration repository...", req);
  const FORMAT = { language: "sql", indent: "  " };

  try {
    const strSql = mybatisMapper.getStatement(
      "dbshema",
      "createTable",
      req,
      FORMAT
    );
    const stringAfter = strSql.replace(/@+\s/g, '@').replace(/\[+\s/g, '[').replace(/\s+\]/g, ']').replace(/N+\s+\'/g, `N'`).replace(/\sGO(?! \s)/g, '\n\rGo\n')
    console.log("Start table registration sql query: ", stringAfter);

    const result = await dbConfig.createOrUpdateTable(stringAfter, req.strDB)

    return {
      httpStatuscode: 200,
      data: result.data,
    };
  } catch (error) {
    console.error("Table registration repository ERROR!", error.message);
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
  executeTableRegistrationRepository,
};
