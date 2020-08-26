const {
  getHouseInfoByHostelID,
  getHouseRules,
  getHouseAddress,
  getHouseDescription,
} = require('./select.js');
const { insertNewHouse } = require('./insert.js');

module.exports = {

  // Select From
  getHouseInfoByHostelID,
  getHouseRules,
  getHouseAddress,
  getHouseDescription,

  // Insert Into
  insertNewHouse,

};
