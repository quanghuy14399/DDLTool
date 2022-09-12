const tableListService = require("src/services/table.list.service.js");

module.exports = {
  get: async (req, res) => {
    try {
      console.log("Start table list controller", req.body);

      const result = await tableListService.getTableListService(req);

      res.status(result.httpStatuscode);
      res.json(result.data);
    } catch (error) {
      console.log("Table list controller ERROR!!! ", error.message);
      res.status(error.status);
      res.json(error);
    }
  },
};
