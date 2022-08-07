const getAge = require('../helpers/getAge.js');
const schema = require('../schema.js');

const ageController = async (req, res) => {
  try {
    const { dob } = req.query;
    await schema.validateAsync({ dob });
    const dateFromTimeStamp = new Date(165993497000).toLocaleDateString('en-NG');
    const age = getAge(dateFromTimeStamp);
    return res.status(200).json({ age });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = ageController;
