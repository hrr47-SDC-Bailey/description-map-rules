/* eslint-disable arrow-body-style */
const db = require('../database.js');

module.exports = {

  getHouseInfoByHostelID(id, callback) {
    const queryStr = `SELECT * FROM hostels WHERE (id = ${id})`;
    db.query(queryStr, callback);
  },

  getHouseRules(id, callback) {
    const queryStr = `SELECT * from rules r INNER JOIN full_listing fl ON fl.name_id = ${id} AND r.id = fl.rules_id`;
    db.query(queryStr, callback);
  },

  getHouseAddress(id, callback) {
    const queryStr = `SELECT * from addresses a INNER JOIN full_listing fl ON fl.name_id = ${id} AND a.id = fl.addresses_id`;
    db.query(queryStr, callback);
  },

  getHouseDescription(id, callback) {
    const queryStr = `SELECT * from descriptions d INNER JOIN full_listing fl ON fl.name_id = ${id} AND d.id = fl.descriptions_id`;
    db.query(queryStr, callback);
  },
};
