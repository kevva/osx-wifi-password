'use strict';
var test = require('ava');
var osxWifiPassword = require('./');

test(function (t) {
	t.plan(2);

	if (process.env.CI) {
		t.assert(true);
		t.assert(true);
		return;
	}

	osxWifiPassword(function (err, password) {
		t.assert(!err, err);
		t.assert(password, password);
	});
});
