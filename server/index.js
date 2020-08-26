const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const query = require('./database/queries.js');

const app = express();

app.use(express.json());
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/hostels/:id', express.static(path.join(__dirname, '../public')));


app.get('/api/house/:id/hostel', (req, res) => {
  query.getHouseInfoByHostelID(req.params.id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.get('/api/house/:id/hostel', (req, res) => {
  query.getHouseInfoByHostelID(req.params.id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});



app.get('/api/house/:id/description', (req, res) => {
  query.getHouseDescription(req.params.id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.get('/api/house/:id/address', (req, res) => {
  query.getHouseAddress(req.params.id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.get('/api/house/:id/rules', (req, res) => {
  query.getHouseRules(req.params.id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

// app.get('/house/:id/full_listing', (req, res) => {
//   query.getHouseFullListing(req.params.id, (err, data) => {
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.send(data);
//     }
//   });
// });

// app.listen(port, () => {
//   // console.log(`Example app listening at http://localhost:${port}`);
// });

module.exports = app;
