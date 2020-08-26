const db = require('../database.js');

const updateHouseInfoByHostelID = (body) => {
  const queryStr = `UPDATE hostels
                      SET ?
                      WHERE id=?;`;
  return db.query(queryStr, body);
};

const updateHouseDescriptions = (body) => {
  const queryStr = `UPDATE descriptions
                      SET ?
                      WHERE id=?;`;
  return db.query(queryStr, body);
};

const updateHouseAddresses = (body) => {
  const queryStr = `UPDATE addresses
                      SET ?
                      WHERE id=?;`;
  return db.query(queryStr, body);
};

const updateHouseRules = (body) => {
  const queryStr = `UPDATE rules
                      SET ?
                      WHERE id=?;`;
  return db.query(queryStr, body);
};
module.exports = {
  updateHouseInfoByHostelID,
  updateHouseRules,
  updateHouseDescriptions,
  updateHouseAddresses,
};
