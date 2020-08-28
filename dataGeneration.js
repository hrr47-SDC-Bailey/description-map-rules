const fs = require('fs');
const faker = require('faker');
const constants = require('./server/database/constants');

const headers = ["hostel_name","check_in_startTime","check_in_endTime","check_out","kid_friendly","credit_card","age_restriction","curfew","lock_out","non_smoking","pet_friendly","taxes_included","cancellation","important_notes_one","important_notes_two","important_notes_three","important_notes_four","important_notes_five","street_ddress","city","state","zip","country","countryCode","latitude","longitude","editorial_one","editorial_two","description_one","description_two",'description_three'];

const generateRecord = () => (`"${faker.commerce.productName()}","0500","1300","2300","${(Math.random() > 0.5) ? 1 : 0}","${(Math.random() > 0.5) ? 1 : 0}","${(Math.random() > 0.5) ? 1 : 0}","${(Math.random() > 0.5) ? 1 : 0}","${(Math.random() > 0.5) ? 1 : 0}","${(Math.random() > 0.5) ? 1 : 0}","${(Math.random() > 0.5) ? 1 : 0}","${(Math.random() > 0.5) ? 1 : 0}","${faker.lorem.sentences(1)}","${faker.lorem.paragraphs(1)}","${faker.lorem.paragraphs(1)}","${faker.lorem.paragraphs(1)}","${faker.lorem.paragraphs(1)}","${faker.lorem.paragraphs(1)}","${faker.address.streetAddress()}","${faker.address.city()}","${faker.address.stateAbbr()}","${faker.address.zipCode().slice(0, 5)}","${faker.address.country()}","${faker.address.countryCode()}","${constants.coordinates[faker.random.number(0, 100)].lat}","${constants.coordinates[faker.random.number(0, 100)].lng}","${faker.lorem.sentences(1)}","${faker.lorem.paragraphs(1)}","${faker.lorem.sentence(1)}","${faker.lorem.paragraphs(1)}","${faker.lorem.paragraphs(1)}'"\n`);

const numRecords = 10000000;

const generateRecords = () => {
  const stream = fs.createWriteStream('data.csv');

  let i = 0;
  function writeData() {
    const canWrite = true;
    while (i < numRecords && canWrite) {
      const record = generateRecord();
      if (i === numRecords) {
        stream.write(record, 'utf-8', () => {
          stream.end();
        });
      } else {
        stream.write(record, 'utf-8');
      }
      i += 1;
    }
  }

  stream.write(JSON.stringify(headers).slice(1, JSON.stringify(headers).length-1));
  writeData();
};

generateRecords();
