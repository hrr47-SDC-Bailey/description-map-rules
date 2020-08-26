const { insertNewHouse } = require('./insert.js');
const {
  getHouseInfoByHostelID,
  getHouseDescription,
  getHouseAddress,
  getHouseRules,
} = require('./select.js');

const { deleteHostel } = require('./delete.js');

const {
  updateHouseInfoByHostelID,
  updateHouseDescriptions,
  updateHouseAddresses,
  updateHouseRules,
} = require('./delete.js');

module.exports = {

  // Create
  insertNewHouse,

  // Read
  getHouseInfoByHostelID,
  getHouseRules,
  getHouseAddress,
  getHouseDescription,

  // Update
  updateHouseInfoByHostelID,
  updateHouseDescriptions,
  updateHouseAddresses,
  updateHouseRules,

  // Delete
  deleteHostel,

};
