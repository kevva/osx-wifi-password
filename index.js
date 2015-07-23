'use strict';
var execFile = require('child_process').execFile;
var wifiName = require('wifi-name');

function getPassword(ssid, cb) {
	var cmd = 'security';
	var args = ['find-generic-password', '-D', 'AirPort network password', '-wa', ssid];

	execFile(cmd, args, function (err, stdout) {
		stdout = stdout.trim();

		if (err && /The specified item could not be found in the keychain/.test(err.message)) {
			err.message = 'Your network doesn\'t have a password';
		}

		if (err) {
			cb(err);
			return;
		}

		if (!stdout) {
			cb(new Error('Could not get password'));
			return;
		}

		cb(null, stdout);
	});
}

module.exports = function (ssid, cb) {
	if (process.platform !== 'darwin') {
		throw new Error('Only OS X systems are supported');
	}

	if (ssid && typeof ssid !== 'function') {
		getPassword(ssid, cb);
		return;
	} else if (ssid && !cb) {
		cb = ssid;
	}

	wifiName(function (err, name) {
		if (err) {
			cb(err);
			return;
		}

		getPassword(name, cb);
	});
};
