# Surfboard

A simple Node module to open web pages

## Usage

The `openUrl` method takes a string. If not an entire url, ie http://google.com, it will attempt to build an url using the http protocol and .com top-level domain name.
```
var sf = require('surfboard');

sf.openUrl('google');
```
