'use strict';

//DONE: This is the initial step in the process, Pat will input API Token of the user and the login name, cust id, and token will all be passed here and create an entry in lambda which will be referenced by later functions
const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient({region: "us-east-1"});

exports.handler = (event, context, callback) => {
    
let custID = parseInt(event.custID);
let apiKey = event.apiKey;
let loginName = event.loginName;
var params = {TableName:'customer', Item:{ customerids: custID , apiKey:apiKey , loginName:loginName } }
    
    
  
  docClient.put(params,function(err,data){
      if(err)
      {
          callback(err,null)
      }
      else{
          callback(null,"success!")
      }

  })

};
