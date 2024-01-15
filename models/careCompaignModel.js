const { Schema, model } = require("mongoose");

const careCompaignSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    providerName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    typeOfAid: {
      type: String,
      required: true,
    },
    modeOfAssistance: {
      type: String,
      required: true,
    },
    eligibilityCriteria: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("CareCompaign", careCompaignSchema);
