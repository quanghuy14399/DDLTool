const tableListReposistory = require("src/reposistories/table.list.repository.js");

const getTableListService = async (req) => {
  console.log(" Start table list service... ");
  try {
    const result = await tableListReposistory.getTableListRepository(req);
    let data = [];
    result.data.forEach(function (element) {
      data.push({
        riekiCreDatetime: element.RIREKI_CRE_DATETIME,
        databaseName: element.DATABASE_NM,
        tableName: element.TABLE_NM,
        description: element.DESCRIPTION,
        tableInfo: JSON.parse(element.TABLE_INFO),
        createUserId: element.CRE_USER_ID,
        createDateTime: element.CRE_DATETIME,
        updateUserId: element.UPD_USER_ID,
        updateDateTime: element.UPD_DATETIME,
        version: element.VERSION,
      });
    });
    return {
      httpStatuscode: 200,
      data: data,
    };
  } catch (error) {
    console.log(" Table list service ERROR!!!", error.message);
  }
};

module.exports = {
  getTableListService,
};
