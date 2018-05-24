var qs = require("querystring");
var http = require("https");

var options = {
  "method": "POST",
  "hostname": "accounts.spotify.com",
  "port": null,
  "path": "/api/token",
  "headers": {
    "content-type": "application/x-www-form-urlencoded",
    "authorization": "Basic NmQ3OTkyY2JhOGY2NDc1OTk4ODNhMzg2ZTM2OGJjOWM6YjhlMzEwYzUyMjdiNDhiZWJkN2E2ODI1MDg2ZGZmMTY=",
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(qs.stringify({ grant_type: 'client_credentials' }));
req.end();



const base_path = 'https://accounts.spotify.com/api/token';
axios({
  url: base_path,
  method: 'post',
  data: qs.stringify({'grant_type': 'client_credentials'}),
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "authorization": "Basic NmQ3OTkyY2JhOGY2NDc1OTk4ODNhMzg2ZTM2OGJjOWM6YjhlMzEwYzUyMjdiNDhiZWJkN2E2ODI1MDg2ZGZmMTY=",
  }
})
  .then(response => console.log(response))
  .catch(error => console.log(error.response));

// const query_path = 'https://api.spotify.com/v1/search?q=Justin&type=artist';
// axios({
//   url: query_path,
//   method: 'GET',
//   headers: {
//     "authorization": "Bearer BQBm0SiWI-5vXhh4EWQyi5pg944Ou67k-8wtxChJ9blcSSS1-mjcK9zxRIr3miaMyFRiwt4W2ZlSIZKwOIQ",
//   }
// })
// .then(response => console.log(response.data))
// .catch(error => console.log(error.response));
