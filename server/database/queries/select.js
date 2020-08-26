/* eslint-disable arrow-body-style */
const db = require('../database.js');

const getHouseInfoByHostelID = (id) => {
  const queryStr = `SELECT * FROM hostels WHERE (id = ${id})`;
  return db.query(queryStr);
};

const getHouseRules = (id) => {
  const queryStr = `SELECT * from rules r INNER JOIN full_listing fl ON fl.name_id = ${id} AND r.id = fl.rules_id`;
  return db.query(queryStr);
};

const getHouseAddress = (id) => {
  const queryStr = `SELECT * from addresses a INNER JOIN full_listing fl ON fl.name_id = ${id} AND a.id = fl.addresses_id`;
  return db.query(queryStr);
};

const getHouseDescription = (id) => {
  const queryStr = `SELECT * from descriptions d INNER JOIN full_listing fl ON fl.name_id = ${id} AND d.id = fl.descriptions_id`;
  return db.query(queryStr);
};

const getFullListing = (id) => {
  const queryStr = 'SELECT * FROM full_listing WHERE name_id = ?;';

  return db.query(queryStr, [id]);
};

module.exports = {
  getHouseInfoByHostelID,
  getHouseRules,
  getHouseAddress,
  getHouseDescription,
  getFullListing,
};
