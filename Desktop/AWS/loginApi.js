'use strict';

var https = require('https');
var test = require('request')
exports.handler = (event, context, callback) => {

  let custID = event.custID
  let attachID = event.attachID
  let fileURL = event.fileURL
  let fileType = event.fileType
  let fileName = event.fileName

  var split = fileName.split(".")

  var https = require('https');
  var xml2js = require('xml2js')

  var path = '/process?apikey=xxxx' + '&save=true&inputformat=' + fileType + '&outputformat=pdf';
  var params = {
    host: "api.cloudconvert.org",
    path: path,
    method: 'POST',

    headers: {
      "Content-Type": "application/json",
    }
  };
  var req = https.request(params, function (res) {

    res.setEncoding('utf8');

    res.on('data', function (chunk) {

      var next = "https:" + JSON.parse(chunk).url

      next = next.replace('https://', '')

      var index = next.indexOf('/')
      var path2 = next.substring(index, next.length)

      next = next.replace(path2, '')

      var send = "https://" + next + path2
      var request = require('request');

      request.post(
        send, { form: { "Content-Type": "application/x-www-form-urlencoded", "input": "download", "file": fileURL, "filename": fileName, "wait": "false", "download": "false", "save": "false", "outputformat": "pdf", "callback": callBack } },

        function (error, response, body) {

          if (!error && response.statusCode == 200) {

            var json = JSON.parse(body)
            var url = JSON.parse(response.body).url
            var message = JSON.parse(response.body).message
            callback(null, JSON.parse(response.body))
          }
          else console.log(response)
        }
      );


    });


  });

  req.end();




};
