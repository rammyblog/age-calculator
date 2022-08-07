const getAge = require('../helpers/getAge.js');
const schema = require('../schema.js');

const ageController = async (req, res) => {
  try {
    const { dob } = req.query;
    const { dob: dateFromTimeStamp } = await schema.validateAsync({ dob });
    const age = getAge(dateFromTimeStamp);
    if (age < 0) {
      return res.status(200).json({ age: undefined });
    }
    return res.status(200).json({ age });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = ageController;
