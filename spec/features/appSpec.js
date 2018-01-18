'use strict';

const app = require('../../app');  
const Browser = require('zombie');
const PORT = process.env.NODE_ENV === 'production' ? 3000 : 3001; 
Browser.localhost('example.com', PORT);
      
describe('client', () => {
      
  let browser, document;       
  beforeEach((done) => {       
    browser = new Browser({ waitDuration: '30s', loadCss: false });

    // document
    browser.on('loading', (doc) => {
      document = doc;
      document.addEventListener("DOMContentLoaded", (event) => {
        done();
      });
    });

    browser.visit('/', (err) => {
      if (err) done.fail(err);
      browser.assert.success();
    });
  });

  describe('UI', () => {
    it('has a friendly greeting', () => {
      browser.assert.text('h1', 'Intelli API');
      browser.assert.text('h2', 'Deposit Intel Here');
    });

    it('has components to submit intelligence', () => {
      browser.assert.element('form#intel-submit');
      browser.assert.element('form#intel-submit input[name=source][type=url]');
      browser.assert.element('form#intel-submit input[name=wallet][type=text]');
    });
  });
});
