const db = require('../database.js');
const { getFullListing } = require('./select.js');

const deleteEntry = (table, id) => {
  const queryStr = `DELETE FROM ${table} WHERE ?`;
  return db.query(queryStr, [id]);
};

module.exports.deleteHostel = (id) => {
  let ids;

  return getFullListing(id)
    .then((data) => {
      [ids] = data;
      return deleteEntry('full_listing', { name_id: ids.name_id });
    })
    .then(() => deleteEntry('hostels', { id: ids.name_id }))
    .then(() => deleteEntry('descriptions', { id: ids.desciptions_id }))
    .then(() => deleteEntry('rules', { id: ids.rules_id }))
    .then(() => deleteEntry('addresses', { id: ids.addresses_id }));
};
