const tableRegistrationService = require("src/services/table.registration.service.js");

module.exports = {
  get: async (req, res) => {
    try {
      console.log("Table registration controller", req.body);

      const result =
        await tableRegistrationService.executeTableRegistrationService(req);

      res.status(result.httpStatuscode);
      res.json(result.data);
    } catch (error) {
      console.log("Table List Controller ERROR!!!:", error.message);
      res.status(error.status);
      res.json(error);
    }
  },
};
