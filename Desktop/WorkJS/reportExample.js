<div style="line-height:0.25; color: #FFFFFF;">.</div>
<h2>{!name#text}</h2>
{!section_content#html}

{!#LOOP_BEGIN.R50149#49949} <!-- SECTION - PLAN-->

<strong>The following section is to document the critical Vendors and Vendor Contacts should any of the processes not be able to be performed.</strong>
<br><br>

#EVAL[
function f1()
{
var bfs = rbv_api.selectQuery("SELECT id,name FROM business_function where R53136=?", 1000,{!id})
var arr = {};
var proc = [];


for (var t = 0; t < bfs.length; t++) {


var bfv = rbv_api.selectQuery("SELECT R35763659,Vendor_Details,Vendor_Impact#value,id FROM Business_Function_Vendor where R35763651=?", 1000,bfs[t][0])


if(bfv.length>0)
{ 

for (var i = 0; i < bfv.length; i++) {
  
  

    
    
var people = rbv_api.getRelatedIds('R44802217', bfv[i][3])



var contacts = [];
  

if(people.length>0)
{

for (var q = 0; q < people.length; q++) {
  
  

var data = rbv_api.selectQuery("SELECT name,email,phone,Global_Phone_No FROM vendor_contact where id=?", 1000,people[q])

  if(data[0][1]==null || typeof data[0][1]=='undefined' ) data[0][1] = 'N/A'
 if(data[0][0]==null || typeof data[0][0]=='undefined' ) data[0][0] = 'N/A'
  if(data[0][2]==null || typeof data[0][2]=='undefined' ) data[0][2] = ''
  if(data[0][3]==null || typeof data[0][3]=='undefined' ) data[0][3] = ''
  if(data[0][2]=='' && data[0][3]=='') data[0][2] = 'N/A'





var x = { 'name':data[0][0], 'email' : data[0][1], 'phone':data[0][2], 'Global_Phone_No':data[0][3] }


contacts.push(x)


}
}


              
              
var name = rbv_api.selectQuery("SELECT name FROM vendor1 where id=? ORDER BY name ASC", 1000,bfv[i][0])


if(name.length>0)
   {
if(!arr.hasOwnProperty(bfv[i][0]))
{


  if(bfv[i][1]==null || typeof bfv[i][1]=='undefined' ) bfv[i][1] = 'N/A'
  if(bfv[i][2]==null || typeof bfv[i][2]=='undefined' ) bfv[i][2] = 'N/A'


arr[bfv[i][0]] = { 'name': name[0][0] , 'details': bfv[i][1], 'impact': bfv[i][2] ,'proc' : [bfs[t][0]], 'contact': [contacts] }


}


else
{
arr[bfv[i][0]].proc.push(bfs[t][0])
arr[bfv[i][0]].contact.push(contacts)


}
   }


}
}
}


var buff ='';





for (var a in arr)
{
  var name = arr[a].name //vendor name
  
buff+= '<table class="aGrid" style="width: 100%" cellspacing="0" cellpadding="0"><tbody>'

buff +='<tr><td  style="vertical-align:bottom; background:#ffffff; border:none; font-size:12pt" colspan="3"><strong>Vendor: ' + name   + '</strong></td></tr>'



var det = arr[a].details //vendor details
var impact = arr[a].impact //vendor impact
var procs = arr[a].proc //array of processes related to vendor
var peeps = arr[a].contact[0] //array of contact information related to process vendor intermediary 
var check = [];
  
  
              buff+= '<tr><th style="width: 50%" colspan="2">Vendor Details/Service Provided</th><th style="width: 50%">Impact Level</th></tr>'
    
    buff+='<tr><td style="width: 50%" colspan="2">'+ det +'</td><td style="width:50%">'+ impact +'</td></tr>'
              
              
              buff+= '<tr><th style="width: 33%; background-color: #CCCCCC; color: #000000;">Vendor Contact(s)</th><th style="background-color: #CCCCCC; color: #000000; width: 33%;">Contact Email</th>'
    buff+='<th style="width: 33%; background-color: #CCCCCC; color: #000000;">Contact Phone</th></tr>'
if(peeps.length>0)
   {
peeps.forEach(function(p) {

    
buff += '<tr><td style="width: 33%;"  >' + p.name + '</td><td style="width: 33%" >'+ p.email +'</td><td style="width: 33%" >'+ p.phone + " " + p.Global_Phone_No +'</td></tr>'
    
    
});
   }
  else
    {
      buff+= '<tr><td style="padding: 3px; text-align: center;width:100%" colspan="3"><em>No Vendor Contacts Specified</em></td></tr>'
    }

  buff+= '<tr><th style="width: 100%; background-color: #CCCCCC; color: #000000;" colspan="3">Related Processes</th></tr>'

  
procs.forEach(function(p) {
  if(check.indexOf(p)==-1)
    {
      rbv_api.println(p)
      
      var name = rbv_api.selectQuery("SELECT name FROM business_function where id=?", 1000,p)
      
      buff+= '<tr><td style="padding: 3px; text-align: left;width:100%"colspan="3" >'+ name[0][0] +'</td></tr>'
      
      check.push(p)
    }

  

})


buff+='</tbody></table><br><br>'

}
  return buff;
}
f1();
]
{!#LOOP_END.R50149}
<br><br>