const db = require('../database.js');

const insertNewHouseHostel = (name) => {
  const queryStr = 'INSERT INTO hostels (hostel_name) values ()';
  return db.query(queryStr, name);
};

const insertNewHouseDescription = (body) => {
  const queryStr = `INSERT INTO descriptions
                      (
                        editorial_text_one,
                        editorial_text_two,
                        description_text_one,
                        description_text_two,
                        description_text_three
                      )
                      VALUES (?, ?, ?, ?, ?);`;

  return db.query(queryStr, body);
};

const insertNewHouseRules = (body) => {
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

  return db.query(queryStr, body);
};

const insertNewHouseAddress = (body) => {
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
  return db.query(queryStr, body);
};

module.exports.insertNewHouse = (body) => {
  const fullListingIDs = [];
  return insertNewHouseHostel(body.hostel)
    .then((data) => {
      fullListingIDs.push(data.inserId);
      return insertNewHouseDescription(body.description);
    })
    .then((data) => {
      fullListingIDs.push(data.inserId);
      return insertNewHouseRules(body.rules);
    })
    .then((data) => {
      fullListingIDs.push(data.inserId);
      return insertNewHouseAddress(body.address);
    })
    .then((data) => {
      fullListingIDs.push(data.inserId);
      const queryStr = `INSERT INTO full_listing (name_id, descriptions_id, rules_id, addresses_id)
      VALUES (?, ?, ?, ?)`;
      return db.query(queryStr, fullListingIDs);
    });
};
