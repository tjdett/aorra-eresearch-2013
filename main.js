var connect = require('connect'),
    path = require('path');

var port = process.env['PORT'];

console.log('Starting static web server in "." on '+port+'.');
connect(connect.static(path.resolve('.')))
	.use(connect.favicon())
	.listen(port);
