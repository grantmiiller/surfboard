# Surfboard

A simple Node module to open web pages

## Usage

The `openUrl` method takes a string. If not an entire url, ie http://google.com, it will attempt to build an url using the http protocol and .com top-level domain name.
```
var sb = require('surfboard');

sb.openUrl('google');
```
