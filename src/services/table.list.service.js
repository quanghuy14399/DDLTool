const tableListReposistory = require("src/reposistories/table.list.repository.js");

const getTableListService = async (req) => {
  console.log(" Start table list service... ");
  try {
    return await tableListReposistory.getTableListRepository(req);
  } catch (error) {
    console.log(" Table list service ERROR!!!", error.message);
  }
};

module.exports = {
  getTableListService,
};
