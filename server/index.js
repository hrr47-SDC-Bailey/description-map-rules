const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const query = require('./database/queries');

const app = express();

app.use(express.json());
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/hostels/:id', express.static(path.join(__dirname, '../public')));

app.get('/api/house/:id/hostel', (req, res) => {
  query.getHouseInfoByHostelID(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

app.get('/api/house/:id/description', (req, res) => {
  query.getHouseDescription(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

app.get('/api/house/:id/address', (req, res) => {
  query.getHouseAddress(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

app.get('/api/house/:id/rules', (req, res) => {
  query.getHouseRules(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

app.post('/api/house', (req, res) => {
  const { data } = req;
  query.insertNewHouse(data)
    .then(() => {
      res.status(201).send('New Hostel Successully Created');
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

app.post('/api/house/:id', (req, res) => {
  query.deleteHostel(req.params.id)
    .then(() => {
      res.status(201).send('New Hostel Successully Created');
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

app.put('/api/house/:id/hostel', (req, res) => {
  const body = req.body.data;
  query.updateHouseInfoByHostelID([body, req.params.id])
    .then(() => {
      res.send('Record was updated');
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

app.put('/api/house/:id/description', (req, res) => {
  const body = req.body.data;
  query.updateHouseDescriptions([body, req.params.id])
    .then(() => {
      res.send('Record was updated');
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

app.put('/api/house/:id/address', (req, res) => {
  const body = req.body.data;
  query.updateHouseAddresses([body, req.params.id])
    .then(() => {
      res.send('Record was updated');
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

app.put('/api/house/:id/rules', (req, res) => {
  const body = req.body.data;
  query.updateHouseRules([body, req.params.id])
    .then(() => {
      res.send('Record was updated');
    })
    .catch(() => {
      res.sendStatus(500);
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
