const careCompaignModel = require("../models/careCompaignModel");
const { generateResponse } = require("../utils/apiRespnose");

module.exports = {
  createCareCompaign: async (req, res) => {
    try {
      const { title, providerName, location, email, typeOfAid, modeOfAssistance, eligibilityCriteria } = req.body;

      if ((!title || !providerName, !location || !email || !typeOfAid || !modeOfAssistance || !eligibilityCriteria)) {
        return res.status(400).json(generateResponse(false, null, "Please must fill the required fields!"));
      }

      const careCompaign = new careCompaignModel({
        title,
        providerName,
        location,
        email,
        typeOfAid,
        modeOfAssistance,
        eligibilityCriteria,
      });

      const dbCareCompaign = await careCompaign.save();
      return res.status(200).json(generateResponse(true, dbCareCompaign, "Care compaign created successfully!"))

    } catch (err) {
      return res.status(500).json(generateResponse(false, null, err.message));
    }
  },
};
