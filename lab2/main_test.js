const sinon = require('sinon');
const fs = require('fs');
const assert = require('assert');
const test = require('node:test');

const { Application, MailSystem } = require('./main');

test.beforeEach(() => {
  sinon.stub(fs, 'readFile').callsFake((path, opts, callback) => {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    process.nextTick(() => callback(null, 'Bob\nAlice'));
  });
  sinon.stub(Math, 'random').returns(0.75);
});

test.afterEach(() => {
  sinon.restore();
});

test('Application initializes with names from mocked file', async (t) => {
  const app = new Application();
  await new Promise(resolve => setImmediate(resolve)); 
  assert.strictEqual(app.people.length, 2);
  assert.strictEqual(app.people[0], 'Bob');
  assert.strictEqual(app.people[1], 'Alice');
});

test('Application selects next person correctly', async (t) => {
  const app = new Application();
  await new Promise(resolve => setImmediate(resolve)); 
  const selectedPerson = app.selectNextPerson();
  assert(app.selected.includes(selectedPerson));
});

test('MailSystem writes and sends mail correctly', (t) => {
  const mailSystem = new MailSystem();
  const message = mailSystem.write('Bob');
  assert.strictEqual(message, 'Congrats, Bob!');
  const success = mailSystem.send('Bob', message);
  assert.strictEqual(success, true); 
});
