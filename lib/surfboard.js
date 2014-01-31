'use strict';

var exec = require('child_process').exec;

var surfboard = (function() {
    var command;

    switch (process.platform) {
        case 'linux':
            command = 'xdg-open';
            break;
        case 'darwin':
            command = 'open';
            break;
        case 'win32':
            command = 'start';
        default:
            process.stderr.write('Sorry, your OS is not supported yet \n');
            process.exit(1);
            break;
    }

    return {
        /*
        *   Will parse input and turn it into a url if not already one
        */
        checkURL: function(target) {
            var url = target;

            if(url.search(/^(ftp|http|https):\/\//) === -1) {
                console.log('Invalid protocol, cleaning up and assuming http');
                url = 'http://' + url.replace(/^.*:[\/]+/, '');
                console.log(url);
            }

            if(url.search(/[\w]+\./) === -1) {
                console.log('No valid thing end. Assuming \'com\'');
                url += '.com';
            }

            console.log('Going to: ' + url);

            return url;
        },

        openUrl: function(target) {
            var url = this.checkURL(target);
            exec(command + ' "' + url + '"');
        }
    }
})();

// If true, it's run from the command line
if(!module.parent) {
    var sf = surfboard;

    if(process.argv.length > 2) {
        var url = process.argv[2];
    } else {
        process.stderr.write('You need to provide a url \n');
        process.exit(1);
    }
    sf.openUrl(url);
// Else, it's a module
} else {
    module.exports = surfboard;
}

// var arguments = process.argv.splice(2);

// exec(open + ' "' + '');