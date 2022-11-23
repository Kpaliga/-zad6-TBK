let http = require('http');
let options = {
    host: 'server',
    port: 9000,
    path: '/zad6-TBK'
};

let req = http.get(options, function (res) {
    console.log('STATUS: ' + res.statusCode);

    let bodyFragments = [];
    res.on('data', function (chunk) {
        bodyFragments.push(chunk);
    }).on('end', function () {
        console.log('BODY: ' + Buffer.concat(bodyFragments));
    })
});

req.on('error', function (e) {
    console.log('ERROR: ' + e.message);
});
