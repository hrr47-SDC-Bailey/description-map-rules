const { Pool } = require('pg');

const pool = new Pool({
  database: 'test',
  user: 'nodesdc',
  password: 'adgdg2hmgS1!2@',
  max: 20,
  maxUses: 7500,
});

const queries = {
  hostel: 'SELECT hostel_name FROM hostels WHERE id = $1',
  rules: 'SELECT check_in_start, check_in_end, check_out, kid_friendly, credit_cards, age_restriction, curfew, lock_out, non_smoking, pet_friendly, taxes_included, cancellation, important_notes_one, important_notes_two, important_notes_three, important_notes_four, important_notes_five FROM hostels WHERE id = $1',
  address: 'SELECT street_address, city, state, zip, country, country_code, latitude, longitude FROM hostels WHERE id = $1',
  description: 'SELECT editorial_text_one, editorial_text_two, description_text_one, description_text_two, description_text_three FROM hostels WHERE id = $1;',
};

module.exports.find = (req, res) => {
  pool.connect((err, client, release) => {
    client.query(queries[req.params.querytype], [req.params.id], (error, result) => {
      release();
      if (error) {
        res.sendStatus(500);
      } else {
        console.log(result.rows)
        res.status(200).json(result.rows.map((row) => {
          row.latitude = parseFloat(row.latitude);
          row.longitude = parseFloat(row.longitude);
          return row;
        }));
      }
    });
  });
};
