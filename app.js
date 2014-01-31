var url = 'google';

if(url.search(/^(ftp|http|https):\/\//) === -1) {
    console.log('Invalid protocol, cleaning up and assuming http');
    url = 'http://' + url.replace(/^.*:\/\//, '');
    console.log(url);
}

if(url.search(/[\w]+\./) === -1) {
    console.log('No valid thing end. Assuming \'com\'');
    url += '.com';
}

console.log(url);