module.exports = {
  generateResponse: (success = false, data = null, message = null) => {
    return {
      data,
      message,
      success,
    };
  },
};
