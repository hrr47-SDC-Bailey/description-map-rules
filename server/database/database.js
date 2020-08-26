/* eslint-disable no-console */
const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'node',
  password: 'pw',
  database: 'hostileworld',
});

connection.connect((err) => {
  if (err) {
    console.log('Error conencting to DB');
  } else {
    console.log('Connected to DB');
  }
});

module.exports.query = (queryStr, queryArgs) => (
  new Promise((resolve, reject) => {
    connection.query(queryStr, queryArgs, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  })
);
