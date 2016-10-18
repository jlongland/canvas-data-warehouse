'use strict';
const test = require('ava');
const config = require('./config');
const schema = require('./lib/schema');
const manifest = require('./lib/manifest');

test('Valid config', t => {
  t.is(typeof config.get('api.url'), 'string', 'url OK');
  t.is(typeof config.get('api.key'), 'string', 'key OK');
  t.is(typeof config.get('api.secret'), 'string', 'secret OK');
  t.is(typeof config.get('db.host'), 'string', 'host OK');
  t.is(typeof config.get('db.port'), 'number', 'port OK');
  t.is(typeof config.get('db.user'), 'string', 'user OK');
  t.is(typeof config.get('db.password'), 'string', 'password OK');
});

test('GET /schema/latest', async t => {
  const latest = await schema.fetch();
  t.is(typeof latest, 'object');
});

test('GET /account/self/file/sync', async t => {
  const listing = await manifest.fetch();
  t.is(typeof listing, 'object');
});
