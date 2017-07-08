var http = require('http');

http.createServer(happyPort).listen(7000);
http.createServer(madPort).listen(7500);

function happyPort (req, res) {
  res.write('You are the best!\n');
  res.end("It Works!! Path Hit: " + req.url);
}

function madPort (req, res) {
  res.write('You are the worst!\n');
  res.end("Bah Humbug! Path Hit: " + req.url);
}
