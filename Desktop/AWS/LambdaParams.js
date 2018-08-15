var filename = '{!file}';
var fileext = filename.split('.').pop();
var fileext = fileext.toLowerCase();

var url="{!file#url}"


var headers = {"x-api-key":"xxxAPIKEY","custId":{!#CURR_CUSTM.id},"attachID":{!id},"fileURL": url, "fileType":fileext, "fileName":"{!name#text}"+"."+fileext}

var response = rbv_api.sendJSONRequest('https://xx.execute-api.us-east-1.amazonaws.com/beta/loginAPI', null, 'POST', 'application/json', null, null, headers,null)

rbv_api.setFieldValue('attachment', {!id}, 'lambda_login',response)
rbv_api.setFieldValue('attachment', {!id}, 'CC_Process_URL', rbv_api.stringToJson(response).url)
rbv_api.setFieldValue('attachment', {!id}, 'Conversion_Status',"Message: " +  rbv_api.stringToJson(response).message + " " + rbv_api.stringToJson(response).percent + "% Complete ")
