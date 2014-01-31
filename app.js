var url = 'httpfxzghauihiusds://:google';

if(url.search(/^(ftp|http|https):\/\//) === -1) {
    console.log('Invalid protocol, cleaning up and assuming http');
    url = url.replace(/^.*:\/\//, 'http://');
    console.log(url);
}

if(url.search(/[\w]+\./) === -1) {
    console.log('No valid thing');
} else {
    console.log('valid thing');
}