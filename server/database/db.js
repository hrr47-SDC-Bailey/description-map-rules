const { Pool } = require('pg');

const pool = new Pool({
  database: 'test',
  user: 'nodesdc',
  password: 'adgdg2hmgS1!2@',
  max: 20,
  maxUses: 7500,
});

const queries = {
  hostel: 'hostel_name',
  rules: 'check_in_start, check_in_end, check_out, kid_friendly, credit_cards, age_restriction, curfew, lock_out, non_smoking, pet_friendly, taxes_included, cancellation, important_notes_one, important_notes_two, important_notes_three, important_notes_four, important_notes_five',
  address: 'street_address, city, state, zip, country, country_code, latitude, longitude',
  description: 'editorial_text_one, editorial_text_two, description_text_one, description_text_two, description_text_three',
};

module.exports.find = (req, res) => {
  if (queries.hasOwnProperty(req.params.querytype)) {
    pool.connect((err, client, release) => {
      client.query(`SELECT ${queries[req.params.querytype]} FROM hostels WHERE id = ${req.params.id};`, (error, result) => {
        release();
        if (error) {
          res.sendStatus(500);
        } else {
          res.status(200).json(result.rows.map((row) => {
            if (row.latitude) {
              row.latitude = parseFloat(row.latitude);
              row.longitude = parseFloat(row.longitude);
            }
            return row;
          }));
        }
      });
    });
  } else {
    res.status(400).send('Please provide a supported query type.');
  }
};
