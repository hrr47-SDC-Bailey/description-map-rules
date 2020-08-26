const db = require('../database.js');

const insertNewHouseHostel = (name, callback) => {
  const queryStr = 'INSERT INTO hostels (hostel_name) values ()';
  db.query(queryStr, name, callback);
};

const insertNewHouseDescription = (body, callback) => {
  const queryStr = `INSERT INTO descriptions
                      (
                        editorial_text_one,
                        editorial_text_two,
                        description_text_one,
                        description_text_two,
                        description_text_three
                      )
                      VALUES (?, ?, ?, ?, ?);`;

  db.query(queryStr, body, callback);
};

const insertNewHouseRules = (body, callback) => {
  const queryStr = `INSERT INTO rules
                      (
                        check_in_start,
                        check_in_end,
                        check_out,
                        kid_friendly,
                        credit_cards,
                        age_restriction,
                        curfew,
                        lock_out,
                        non_smoking,
                        pet_friendly,
                        taxes_included,
                        cancellation,
                        important_notes_one,
                        important_notes_two,
                        important_notes_three,
                        important_notes_four,
                        important_notes_five
                      )
                      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

  db.query(queryStr, body, callback);
};

const insertNewHouseAddress = (body, callback) => {
  const queryStr = `INSERT INTO addresses
                      (
                        street_address,
                        city,
                        state,
                        zip,
                        country,
                        country_code,
                        latitude,
                        longitude
                      )
                      VALUES (?, ?, ?, ?, ?, ?, ?, ?);`;
  db.query(queryStr, body, callback);
};

module.exports.insertNewHouse = (body, callback) => {
  const fullListingIDs = [];
  let error = false;

  const newInsert = (err, data) => {
    if (err) {
      error = true;
      callback(err, data);
    } else {
      fullListingIDs.push(data.insertId);
    }
  };

  insertNewHouseHostel(body.hostel, newInsert);

  if (error) { return; }

  insertNewHouseDescription(body.description, newInsert);

  if (error) { return; }

  insertNewHouseRules(body.rules, newInsert);

  if (error) { return; }

  insertNewHouseAddress(body.address, newInsert);

  if (error) { return; }

  const queryStr = `INSERT INTO full_listing (name_id, descriptions_id, rules_id, addresses_id)
                      VALUES (?, ?, ?, ?)`;

  db.query(queryStr, fullListingIDs, callback);
};
