'use strict';

const request = require('request')
const fs = require('fs');
const http = require('https')
const fetch = require('fetch-base64');
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: "us-east-1"});
exports.handler = (event, context, callback) => {


   let attachID = event.attachID //attachment id from BCIC
  let custID = event.custID //BCIC's customer ID
  let fileName = event.fileName //attachment's name according to BCIC
  let url = event.url //URL cloud convert is telling us to DL from


  let step = event.step //step in the process cloud convert tells us

url= "https:"+ url
request(url, function (error, response, body) {

 body = JSON.parse(body)




var download = "https:" + body.output.url

fetch.remote(download).then((data) => {
    

var final = data[1].replace('data:false;base64,','') //this is for cloud convert 

    custID=parseInt(custID)
    var params = {TableName:'customer', Key:{ customerids: custID  } }
    
    
  
  docClient.get(params,function(err,data){
      if(err)
      {
          callback(err,null)
      }
      else{
          var key = data.Item.apiKey
          var loginName = data.Item.loginName
          

          callback(null,data.Item)

          request('https://app.bcinthecloud.com/rest/api/login?loginName='+ loginName +'&password='+ key + '&output=json', function (error, response, body) {
          
           
          
  
  var json = JSON.parse(body)
  

var session = json.sessionId   
           console.log(session + " session")
         
 var string = 'https://app.bcinthecloud.com/rest/api/setBinaryData'
        //  console.log(final)
request.post(string,{form:{sessionId:session, id: attachID, fieldName: 'pdf_file', value:final,contentType:'application/pdf', fileName:fileName+".pdf",output:'json' }},
  
    function (error, response, body) {
        if (!error && response.statusCode == 200) {

		}
		
		
		
		          request('https://app.bcinthecloud.com/rest/api/logout?sessionId='+ session+'&output=json', function (error, response, body) {
		              console.log("logout response")
		              console.log(body)

		
		          })	
	})
	
		
 })
          
          
      }

  })
 

}).catch((reason) => {console.log(reason)});



 })




}