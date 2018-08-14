'use strict';
///this is working baring sending post via BCIC
var https = require('https');
var test = require('request')
exports.handler = (event, context, callback) => {
    
     let custID = event.custID
    let attachID = event.attachID
    let fileURL = event.fileURL
     let fileType = event.fileType
      let fileName = event.fileName

      var split=fileName.split(".")
    
   // let custID = 39652631
   // let attachID = 46354470
      //  let fileName = "test" 
   // let fileURL= "https://app.bcinthecloud.com/storage/servlet/Image?c=39652631&token=46354470-44804517-44804513"
    let callBack= "https://auccapppu8.execute-api.us-east-1.amazonaws.com/beta/cloudConvertCallback?custID=" + custID+"&attachID="+attachID+"&fileName="+split[0];
  //let callBack = "https://webhook.site/071feb75-dda6-4932-aad5-14717ba71086?custID=" + custID+"&attachID="+attachID+"&fileName="+split[0];
    // let fileType = 'doc'
     
 
var https = require('https');
var xml2js = require('xml2js')





var path = '/process?apikey=eyD6XTNwyPQfA59gZ64nGqymojjB31mGXgQXpPK_ZWVi0SuZHBVGJoin77KY7C89R40lT5ISmuhqLbucFKY0JA'+'&save=true&inputformat=' +fileType+'&outputformat=pdf';
    var params = {
        host: "api.cloudconvert.org",
       path: path,
	    method: 'POST', 

		headers: {
		    "Content-Type":"application/json",


		}
    };

    var req = https.request(params, function(res) {
        


 res.setEncoding('utf8');

        res.on('data', function(chunk) {
       
        
 var next = "https:"+ JSON.parse(chunk).url

next = next.replace('https://','')

var index = next.indexOf('/')

var path2 = next.substring(index,next.length)

next = next.replace(path2,'')


var send = "https://"+ next+ path2
	console.log(send)
	
	//var send = "http://requestbin.fullcontact.com/11m5sxw1"
	
	var request = require('request');
request.post(
    send,{form: {"Content-Type":"application/x-www-form-urlencoded","input":"download","file":fileURL,"filename":fileName,"wait":"false","download":"false","save":"false","outputformat":"pdf","callback":callBack}},
 

   
   function (error, response, body) {
	
        if (!error && response.statusCode == 200) {
			     
				var json = JSON.parse(body)
				var url = JSON.parse(response.body).url
				var message = JSON.parse(response.body).message
			callback(null,JSON.parse(response.body))
        }
		else console.log(response)
    }
);


});


    });
    
    req.end();
    



};
