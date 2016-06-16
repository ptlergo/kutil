const util = require('../src/kutil');
const expect = require('chai').expect;
const fs = require('fs');


describe('Util Tool', () => {
  const oldFashion = {
    first: 'Cherry, Sugar Cube, Bitters, Orange Peel',
    second: 'Muddle',
    third: 'Ice Bourbon, Rye Whiskey',
    fourth: 'Stir and DrinK',
  };

  // Before test call the debug method to append to the logfile.log file
  before((done) => {
    util.debug('Old Fashion', oldFashion, 200)
    done();
  });

  // After the test it will clear out the log file with a empty string.
  after((done) => {
    fs.writeFile('./logs/logfile.log', ' ', (err) => {
      if (err) throw err;
    });
    done();
  })

  // Test for the debug tool to make sure it
  // passes the title, object and status to the logfile.log
  it('Should read the logfile.log file to check if the title, object, and status are there.', (done) => {
    fs.readFile('./logs/logfile.log', 'utf8', (err, data) => {
      if (err) throw err;
      expect(data).to.have.
      string('Old Fashion').to.have.
      string('{"first":"Cherry, Sugar Cube, Bitters,' +
              ' Orange Peel","second":"Muddle","third":"Ice Bourbon,' +
              ' Rye Whiskey","fourth":"Stir and DrinK"}')
      .to.have.string('200');
      done();
    });
  });
});
