/* eslint-disable arrow-body-style */
const db = require('../database.js');

const getHouseInfoByHostelID = (id, callback) => {
  const queryStr = `SELECT * FROM hostels WHERE (id = ${id})`;
  db.query(queryStr, callback);
};

const getHouseRules = (id, callback) => {
  const queryStr = `SELECT * from rules r INNER JOIN full_listing fl ON fl.name_id = ${id} AND r.id = fl.rules_id`;
  db.query(queryStr, callback);
};

const getHouseAddress = (id, callback) => {
  const queryStr = `SELECT * from addresses a INNER JOIN full_listing fl ON fl.name_id = ${id} AND a.id = fl.addresses_id`;
  db.query(queryStr, callback);
};

const getHouseDescription = (id, callback) => {
  const queryStr = `SELECT * from descriptions d INNER JOIN full_listing fl ON fl.name_id = ${id} AND d.id = fl.descriptions_id`;
  db.query(queryStr, callback);
};

const getFullListing = (id, callback) => {
  const queryStr = 'SELECT * FROM full_listing WHERE name_id = ?;';

  db.query(queryStr, [id], callback);
};

module.exports = {
  getHouseInfoByHostelID,
  getHouseRules,
  getHouseAddress,
  getHouseDescription,
  getFullListing,
};
