const db = require('../database.js');
const { getFullListing } = require('./select.js');

const deleteEntry = (table, id) => {
  const queryStr = `DELETE FROM ${table} WHERE id=${id}`;
  return db.query(queryStr);
};

module.exports.deleteHostel = (id) => {
  let ids;

  return getFullListing(id)
    .then((data) => {
      ids = data;
      return deleteEntry('hostel', ids.name_id);
    })
    .then(deleteEntry('descriptions', ids.descriptions_id))
    .then(deleteEntry('rules', ids.rules_id))
    .then(deleteEntry('adddresses', ids.addresses_id));
};
