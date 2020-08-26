const {
  getHouseInfoByHostelID,
  getHouseRules,
  getHouseAddress,
  getHouseDescription,
} = require('./select.js');

const { insertNewHouse } = require('./insert.js');

const { deleteHostel } = require('./delete.js');

module.exports = {

  // Select From
  getHouseInfoByHostelID,
  getHouseRules,
  getHouseAddress,
  getHouseDescription,

  // Insert Into
  insertNewHouse,

  // Delete Hostels
  deleteHostel,

};
