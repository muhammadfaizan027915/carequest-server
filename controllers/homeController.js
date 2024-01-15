const careCompaignModel = require("../models/careCompaignModel");
const { generateResponse } = require("../utils/apiRespnose");

module.exports = {
  getCareCompaign: async (req, res) => {
    try {
      const dbCareCompaigns = await careCompaignModel.find({}).limit(10);
      return res.status(200).json(generateResponse(true, dbCareCompaigns, "Care compaign found successfully!"));
    } catch (err) {
      return res.status(500).json(generateResponse(false, null, err.message));
    }
  },
};
