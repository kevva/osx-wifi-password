# osx-wifi-password [![Build Status](https://travis-ci.org/kevva/osx-wifi-password.svg?branch=master)](https://travis-ci.org/kevva/osx-wifi-password)

> Get current wifi password on OS X


## Install

```
$ npm install --save osx-wifi-password
```


## Usage

```js
var osxWifiPassword = require('osx-wifi-password');

osxWifiPassword(function (err, password) {
	console.log(password);
	//=> 'johndoesecretpassword'
});
```


## API

### osxWifiPassword([name], callback)

#### name

Type: `string`

Get the wifi password for a specified *known* network.

#### callback(err, password)

Type: `function`

The callback will return the password to the network.


## License

MIT © [Kevin Martensson](http://github.com/kevva)
