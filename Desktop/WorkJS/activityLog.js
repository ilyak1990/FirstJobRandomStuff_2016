<div id="window" class='kendoWindow'></div>




<div class="publishContainer">
    <textarea class="msgTextArea" id="txtMessage" data-bind="value: newMessage, jqAutoresize: {}" style="height:3em;" placeholder="What would you like to discuss?"></textarea>
<div>
      <label style="float:left;">  <input type="checkbox" id="horns" name="feature"  value="Share Location" style="margin-right:5px"></input>Share Location</label> 
    <input type="button" value="Post" id="buttonShare" class="k-button k-primary" style="color:#fff;border-color:#357ebd;background-color: #428bca;">
</div>
  </div>
 
     <button type="button" class="btn btn-primary commentToggle">Comments</button>
    
 <button type="button" class="btn btn-primary componentToggle">Components</button>

 
     <div id="static-id" class="onlyComments">
       



<ul id="msgHolder" data-bind="foreach: posts"  class="onlyComments">
       

{!#LOOP_BEGIN.R360982#J7G3-vR6RjKCHY3rzeSWAg}  
  
<li class="postHolder" id="{!R360982.id}">{!R360982.User_Avatar#value}<div>
  <p>
#EVAL[ 
if( '{!R360982.log_type#value}'=='Component' ) {return '<span>Component: </span><br><br>'; }
else if('{!R360982.log_type#value}'=='Objective'){return '<span>Objective: </span><br><br>';}
else if('{!R360982.R46197037#id}'!=='0' && '{!R360982.R46197037#id}'!=='-1') { return "<a>" + "{!R360982.R46197037#text}" + "</a>"; }

else {return "<a>"+"{!R360982.R42345170#text}"+"</a>:" }
      
]

<span class="content">
#EVAL[ 

  
  var x = String(/{!R360982.Post_Comment#text}/);
                 if(x!=="")
  {
x = x.substring(1, x.length-1);
return x;
  }



                                                
]

</span>
</p> <span class="timeago" data-bind="text: PostedDate">{!R360982.Relative_Time#value}</span>&nbsp<a class="editPencil" href="#" id="{!R360982.id}" name="{!R360982.R42345170#id}" style="color:black"><i class="fa fa-pencil" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Edit Post"></i></a>&nbsp;




         #EVAL[

var file = '';
var img= ''
var map='';

if("{!R360982.File_Upload#text}"!="") file += '<a class="showFile" href="{!R360982.File_Upload#url}" id="{!R360982.File_Upload#url}" style="color:black" download><i class="fa fa-file" aria-hidden="true"></i></a>'
if("{!R360982.Image_Upload#text}"!="") img += '<a class="showImg" href="#" id="{!R360982.Image_Upload#url}" style="color:black"><i class="fa fa-camera" aria-hidden="true"></i></a>'
if("{!R360982.GPS_Latitude#value}"!="0" && "{!R360982.GPS_Latitude#value}"!="") map += '<a class="showMap" href="#" id="'+ '{!R360982.id}' +'" style="color:black"><i class="fa fa-map-marker" aria-hidden="true"></i></a>'

                                                      
return file + " " + img + " " + map
                                             

]
  
      </div> <div class="postFooter"> <div class="commentSection"> <ul id= {!R360982.id} data-reply={!R360982.id}>    
 



		  
				  {!#LOOP_BEGIN.R42345191#0tymrj7VSXKn4ukpr3VOxg}
#EVAL[



  if({!activity_log#C.R46197037#id}>-1)   
  {  var x = String(/{!activity_log#C.Post_Comment#text}/); x = x.substring(1, x.length-1);
    var html = '<li class="commentHolder" id={!activity_log#C.id#value}>{!activity_log#C.User_Avatar#value}<div><p><a data-bind="text: CommentedByName">{!activity_log#C.R46197037#text}</a>: <span data-bind="html: Message">'+ x +'</span></p></div> <div class="commentFooter"> <span class="timeago" data-bind="text: CommentedDate">{!activity_log#C.Relative_Time}</span>&nbsp;'  
  
var edit = '<a class="editPencil" href="#" id="{!activity_log#C.id}" name="{!activity_log#C.R42345170#id}" style="color:black"><i class="fa fa-pencil" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Edit Post"></i></a>'

html+= " " + edit
var file = '';
var img= ''


if("{!activity_log#C.File_Upload#text}"!="") file += '<a class="showFile" href="{!activity_log#C.File_Upload#url}" style="color:black" download><i class="fa fa-file" aria-hidden="true"  data-toggle="tooltip" data-placement="top" title="Download File"></i></a>'
if('{!activity_log#C.Image_Upload#text}'!="")img += '<a class="showImg" href="#" id="{!activity_log#C.Image_Upload#url}" style="color:black"><i class="fa fa-camera" aria-hidden="true"  data-toggle="tooltip" data-placement="top" title="View Image"></i></a>'

                                                      
html +=  " " +  file + " " + img +     '</div></li>'
                                             


   
    
    
    

  }
  else
  {
     var x = String(/{!activity_log#C.Post_Comment#text}/); x = x.substring(1, x.length-1);
      
    var html = '<li class="commentHolder" id={!activity_log#C.id#value}>{!activity_log#C.User_Avatar#value}<div><p><a data-bind="text: CommentedByName">{!activity_log#C.R42345170#text}</a>: <span data-bind="html: Message">'+ x +'</span></p></div> <div class="commentFooter"> <span class="timeago" data-bind="text: CommentedDate">{!activity_log#C.Relative_Time}</span>&nbsp;' 
      
  var edit = '<a class="editPencil" href="#" id="{!activity_log#C.id}" name="{!activity_log#C.R42345170#id}" style="color:black"><i class="fa fa-pencil" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Edit Post"></i></a>'

html+= " " + edit

var file = '';
var img= ''

if("{!activity_log#C.File_Upload#text}"!="") file += '<a class="showFile" href="{!activity_log#C.File_Upload#url}" style="color:black" download><i class="fa fa-file" aria-hidden="true"></i></a>'
if('{!activity_log#C.Image_Upload#text}'!="") img += '<a class="showImg" href="#" id="{!activity_log#C.Image_Upload#url}" style="color:black"><i class="fa fa-camera" aria-hidden="true"></i></a>'
                                                      
html+= " " +  file + " " + img +     '</div></li>'
                                             


      
      
      
      
      
      
      
    

  }   
return html			   
]
				{!#LOOP_END.R42345191} 


            #EVAL[
            if('{!R360982.log_type#value}' =='Component' ||'{!R360982.log_type#value}' =='Objective') {return '</ul>' }
else {return '</ul><div style="display: block" class="publishComment {!R360982.id}"> <textarea class="commentTextArea" id={!R360982.id} placeholder="write a reply..." style="height: 18px; overflow: hidden; word-wrap: break-word; resize: none;"></textarea> <input type="button" value="Reply" class="k-button k-primary replyButton" id="{!R360982.id}" ></div></div></div></li>'}
]
            

  
  
  {!#LOOP_END.R360982}
                
  
</ul>
</div>

   
  <div id="static-id" class="compAndObject">
<ul id="msgHolder" data-bind="foreach: posts" class="compAndObject">
       

{!#LOOP_BEGIN.R360982#kCK4CJ6rS2CWeaWZOjnonw}  
  
<li class="postHolder"><div>
  <p>
#EVAL[ 
if( '{!R360982.log_type#value}'=='Component' ) {return '<span>Component: </span><br><br>'; }
else if('{!R360982.log_type#value}'=='Objective'){return '<span>Objective: </span><br><br>';}

      
]

<span class="content">
#EVAL[ 

	var x = '{!#LINK.exercise_application1#1YCQ03vBTCCP3NHYpH678w}'
        
var string = '{!R47364144.link#value}'

x = x.substring(0, x.indexOf('pageId'));

x+=string



if('{!R360982.log_type#value}' =='Component'){return '<a href="' + x +'">'+ '{!R360982.name#text}' + '</a>' +' has been marked ' + '{!R360982.component_status#value}' }

else if('{!R360982.log_type#value}'=='Objective'){return '<a href="' + x +'">'+'{!R360982.name#text}'  + '</a>' + ' has been marked ' + '{!R360982.component_status#value}' }


else {var txt = "{!R43465129.Post_Comment#text}"
return txt;}
                                                
]

</span>
</p> <span class="timeago" data-bind="text: PostedDate">{!R360982.Relative_Time#value}</span>&nbsp;


</div> <div class="postFooter"> <div class="commentSection"> <ul id= {!R360982.id} data-reply={!R360982.id}>    
		  
		


            #EVAL[
            if('{!R360982.log_type#value}' =='Component' ||'{!R360982.log_type#value}' =='Objective') {return '</ul>' }
else {return '</ul><div style="display: block" class="publishComment {!R360982.id}"> <textarea class="commentTextArea" id={!R360982.id} placeholder="write a reply..." style="height: 27px; overflow: hidden; word-wrap: break-word; resize: none;"></textarea> <input type="button" value="Reply" class="k-button k-primary replyButton" id="{!R360982.id}" ></div></div></div></li>'}
]
            

  
  
  {!#LOOP_END.R360982}
                
  
</ul>
</div>
      
<script>
  
var lat=0;
var lng=0;
var accuracy=0
var msg=''
var fireIt = function fire()
      {
if (navigator.userAgent.indexOf('gonative') > -1) {
  function gonative_geolocation_ready() {

  
  navigator.geolocation.getCurrentPosition(
    successCallback,
    errorCallback_highAccuracy,
    {maximumAge:600000, timeout:5000, enableHighAccuracy: true}
);

function errorCallback_highAccuracy(error) {
    if (error.code == error.TIMEOUT)
    {
        /// Attempt to get GPS loc timed out after 5 seconds,
        // try low accuracy location

		msg='LOW ACCURACY ATTEMPT' //attempting to get low accuracy (high accuracy failed)


        navigator.geolocation.getCurrentPosition(
               successCallback,
               errorCallback_lowAccuracy,
               {maximumAge:600000, timeout:10000, enableHighAccuracy: false});
        return;
    }
    
    if (error.code == 1)
        msg = "PERMISSION_DENIED HIGH";
    else if (error.code == 2)
        msg = "POSITION_UNAVAILABLE HIGH";
	
		

}

function errorCallback_lowAccuracy(error) {
    if (error.code == 1)
        msg = "PERMISSION_DENIED LOW";
    else if (error.code == 2)
        msg = "POSITION_UNAVAILABLE LOW";
    else if (error.code == 3)
        msg = "TIMEOUT LOW";
    
	
}

function successCallback(position) {
  console.log('Location is: '+position.coords.latitude+','+position.coords.longitude);

 
  lat = position.coords.latitude
  lng=position.coords.longitude
  accuracy=position.coords.accuracy
  
msg="SUCCESS"

}}
gonative_geolocation_ready();
}

else {
        function getLocationLog() {
            navigator.geolocation.getCurrentPosition(
                successCallback,
                errorCallback_highAccuracy,
                { maximumAge: 600000, timeout: 5000, enableHighAccuracy: true }
            );

            function errorCallback_highAccuracy(error) {
                if (error.code == error.TIMEOUT) {
                    // Attempt to get GPS loc timed out after 5 seconds,
                    // try low accuracy location
                    // rbf_growlWarning("GPS Warning", "Attempting to get low accuracy location");


                    msg = 'LOW ACCURACY ATTEMPT' //attempting to get low accuracy

                    navigator.geolocation.getCurrentPosition(
                        successCallback,
                        errorCallback_lowAccuracy,
                        { maximumAge: 600000, timeout: 10000, enableHighAccuracy: false });
                    return;
                }

                if (error.code == 1) msg = "PERMISSION_DENIED HIGH";
                else if (error.code == 2) msg = "POSITION_UNAVAILABLE HIGH";


            }


            function errorCallback_lowAccuracy(error) {
                if (error.code == 1) msg = "PERMISSION_DENIED LOW";
                else if (error.code == 2) msg = "POSITION_UNAVAILABLE LOW";
                else if (error.code == 3) msg = "TIMEOUT LOW";


            }

            function successCallback(position) {
                console.log('Location is: ' + position.coords.latitude + ',' + position.coords.longitude);

                lat = position.coords.latitude
                lng = position.coords.longitude
                accuracy = position.coords.accuracy

                msg = "SUCCESS"


            }
        }
  getLocationLog();
  
}

     }
                                                   rb.newui.util.addEventListener(rb.newui.util.customEvents.rbs_tabActivated, fireIt);






  
$( ".editPencil" ).click(function(e) {
  
  
      window.location.href="{!#LINK.activity_log#360896}" +"&destId="+{!#LINK.incident#id} + "&masterObj="+ {!id} +"&id="  +  e.currentTarget.id
      
})
 
 $( ".editPencil" ).each(function( index ) {
    
 if(parseInt($(this)[0].name)!== {!#CURR_USER.id} ) 
    {
    console.log($(this)[0].name)
 console.log("{!#CURR_USER.id}" + " current user")
    $($(this)[0]).remove();
   
 }
                          
   })


 $( ".showMap" ).click(function(e) {
  
  
      window.location.href="{!#LINK.activity_log#iEQrMuajSkuNDuT3W_4FAg}" +"&masterPage="+{!#LINK.incident#id} + "&masterObj="+ {!id} +"&id="  +  e.currentTarget.id
      
})
  
      $( ".showImg" ).click(function(e) {
        
        console.log(e.currentTarget.id)
  
  
    $("#window").kendoWindow({
      width: "800px",
      height: "600px",
        iframe: true,
      
      content: e.currentTarget.id,
      close: function() {
 // window.location.reload();
                        },
    })
    
    
    var popup = $("#window").data('kendoWindow');
         popup.open();
         popup.center();
      
    
    
});
      
 $(".btn.btn-primary.commentToggle").click(function() {
  
  $('.compAndObject').hide();
$('.onlyComments').show(); 
  
  $(this).prop("disabled",true)
  $(".btn.btn-primary.componentToggle").prop("disabled",false)
  
});
      
       $(".btn.btn-primary.componentToggle").click(function() {
  
  $('.compAndObject').show();
$('.onlyComments').hide(); 
         
           $(this).prop("disabled",true)
  $(".btn.btn-primary.commentToggle").prop("disabled",false)
  
});
      
      

  $(".btn.btn-primary.commentToggle").prop("disabled",true)

$('.compAndObject').hide();
    
      
      

  {!#HOSTED_FILE.ezHN8qqGTm6lQpmrF8dyaA#text}
  var globalDate = new Date();
  
  $( "#static-id" ).on( "click", "#replyToggle", function() {
var id = $( this ).data("comment")


  
  var style = $('.publishComment.' + id )[0].getAttribute('style')
  
  if(style == "display: none;" || style=="display: none")  $('.publishComment.' + id )[0].style.display = 'block'
  else if(style == "display: block" || style == "display: block;")  $('.publishComment.' + id )[0].style.display = 'none'
  

    
  
  
}); 

  $( "#static-id" ).on( "click", ".replyButton", function() {

var id = $(this)[0].id;


var half= $('#' + id + '.commentTextArea');
    

    var comment = half[0].value
    
    if(comment!=="")
      {
var fieldMap =  {"Pactivity_log":id,  
"Post_Comment":comment,
                     "R360982": {!id},
                     'name': comment
                }
    
    console.log(fieldMap)
    
  
rbf_createRecord('activity_log', fieldMap, true, function(callback){
  console.log(callback);
  
 window.location = window.location
});



  
      }
  else
      {
        rbf_growlWarning("Error!", "Please input text.")
      }
    
  
}); 

function getDate()
{



  var v = new Date()
  

  
 var date = rbf_getDate(v)
  
 globalDate=date
 
 console.log(date + "<<regenerating")
 



}
getDate();
  


  
  $( ".publishContainer" ).on( "click", "#buttonShare", function() {
    
var comment = $('#txtMessage.msgTextArea')[0].value
console.log(comment)

if((comment!=="" && document.getElementById('horns').checked && msg=='SUCCESS') ||(comment!=="" && document.getElementById('horns').checked==false) )   
  {
    
    var fieldMap =  { 
"Post_Comment":comment,
                     "R360982": {!id},
                     'name': comment,
      'GPS_Longitude':lat,
      'GPS_Latitude':lng,
      'GPS_Accuracy':accuracy
    }
    console.log(fieldMap)
    
    
  
  
  rbf_createRecord('activity_log', fieldMap, true, function(createdId){
     
 
    console.log(createdId);
    
              
              
    window.location = window.location
                                                                              })
  
  


    
  }
    else if(comment!=="" && document.getElementById('horns').checked && (msg!=='SUCCESS' || msg==''))
      {
        rbf_growlError("Geolocation Error: ", "Please try enabaling your device's location options or refresh your screen and try again.")
      }
    
    else if(comment=="")
      {
        rbf_growlWarning("Error!", "Please input text.")
      }
});
  

function printParent(act) {
  
  

    var deferred = $.Deferred();

  
       var date = timeSince(act[2])
       
       

       var html = '<li class="postHolder">' + act[6] + '<div><p ><a data-bind="text: PostedByName">'+ act[5]+ '</a>: <span class="content">' +act[1] + '</span></p>'
       html+= '<span class="timeago" data-bind="text: PostedDate">'+ date +'</span>&nbsp;</div>'
        html+= '<div class="postFooter">'
           html+='<div class="commentSection"><ul id=' + act[4] + ' data-reply='+ act[4] +  '></ul>'
              html+= '<div style="display: block" class="publishComment ' + act[4] + '">'
html+= '<textarea class="commentTextArea" id=' + act[4]  +' placeholder="write a reply..." style="height: 18px; overflow: hidden; word-wrap: break-word; resize: none;"></textarea>'
             html+= '<input type="button" value="Reply" class="k-button k-primary replyButton" id="' + act[4] +'"  ></div></div></div></li>'
             
             
          
             
              
              if(act[0] == null) { $( "#msgHolder" ).prepend( html );}
  else {$("#msgHolder.onlyComments" ).append( html );}
 

 
         return deferred.resolve(act)
      

  
  return deferred.promise();
}

         

  function printChildren(comms) 
                             {
                          
var date = timeSince(comms[2])

if(parseInt(comms[0])>0)
  {
    var ul = $("ul#" + comms[0] )
  }
else
  {
    var ul =  $("ul#" + comms[4] )
  }


                             
                             
                             var buff = '';
                             buff += '<li class="commentHolder">'
                        buff+= comms[6] + '<div><p><a data-bind="text: CommentedByName">' + comms[5] + '</a>: <span data-bind="html: Message">' + comms[1] + '</span></p></div>'
                       buff+= '<div class="commentFooter"> <span class="timeago" data-bind="text: CommentedDate">' + date + '</span>&nbsp;</div></li>'
                       
                   
                       
                       $(ul).append(buff);
                                 
                               
                               
                             }

function getUser(act)
{
        
 var deferred = $.Deferred();
  
  

if(act[5] =='Objective' || act[5] == 'Component')
  {
    
    var date = timeSince(act[2])
    
    

var x = '{!#LINK.exercise_application1#1YCQ03vBTCCP3NHYpH678w}'
        
var string = act[8]

x = x.substring(0, x.indexOf('pageId'));

x+=string


    
var buff =''      
buff+= '<li class="postHolder" style="background-color:rgb(241, 241, 241);"><div><p><span>'+ act[5] + ' :</span><br><br><span class="content">' 
buff+= '<a href="' + x  + '">'+ act[6] + '</a>' +' has been marked ' + act[7]+ '</span></p>'
buff+= '<span class="timeago" data-bind="text: PostedDate">'+ date + '</span>&nbsp</div></li>';

    
    $('#msgHolder.compAndObject').prepend(buff)
    

    
    
  }
  else if(act[3]!==5853)
    {
   

     rbf_selectQuery("SELECT name#url,userProfilePic#html,id,firstName,lastName FROM USER where id=" + act[3] ,1 ,function(user){       
        
   

  
   
    var url = '{!COMMLOG.phone_icon#url}';
       
   var author = user[0][0];
  

       if(typeof user[0][1]!== 'undefined' && user[0][1] !== null)
         {
           
          var img = user[0][1];
           
       

  var str = JSON.stringify(img)
    
    
 var file = str.match(/nfileName=(.*?).jpg/i)[1]
 
 var final = 'fileName='+ file+ '.jpg&contentType=image%2Fjpeg'

var x = url.split('&contentType=image%2Fgif')[0]



var it = x.replace(/fileName=.*.gif/, final)
var pic = '<img src="'+ it +'" style="width:50px;height:50px;float:left" class="img-circle">'
}
  else
    {

      var firstName = user[0][3];
var lastName = user[0][4];
     

      
var initials = firstName.charAt(0) + lastName.charAt(0);
      
    
        var pic = '<div class="bcavatar">'+initials+'</div>';

    
    
    
    
    }
      


  
 act[5] = author;  
 act[6] = pic;

       setTimeout(function(){deferred.resolve(act)}, 1000)

       

  
     
  
      
     })
    }
	else{
	

     rbf_selectQuery("SELECT name#url,id,firstName,lastName FROM people where id=" + act[9] ,1 ,   function(employee){       
 
    var url = '{!COMMLOG.phone_icon#url}';
       
   var author = employee[0][0];
  

  

      var firstName = employee[0][2];
var lastName = employee[0][3];
     

      
var initials = firstName.charAt(0) + lastName.charAt(0);
      
    
        var pic = '<div class="bcavatar">'+initials+'</div>';


  
 act[5] = author;  
 act[6] = pic;

       setTimeout(function(){deferred.resolve(act)}, 1000)

       

  
     
  
      
     })
      
      
      
     	}
     
 
   return deferred.promise();
 }







setInterval(function(){ 
  
  
 
  

          
          var formattedDate=rbf_formatDate(globalDate , "yyyy-MM-dd HH:mm:ss");
  
  
  console.log(formattedDate + "<<< before it goes into select")
  

          
         var sql = "SELECT Pactivity_log,Post_Comment,createdAt,R42345170,id,log_type#value,name,component_status,link,R46197037 FROM activity_log where createdAt#js >'" + formattedDate + "' and R360982={!id} order by createdAt DESC";
  rbf_selectQuery(sql, 100, function(comments) {
                   


    comments.forEach(function(act){getUser(act).then(function(act)
                           {
      
 
      
      if(act[0] == null || act[0] == "")
        
        {
printParent(act);          
          
          
        }
      else if(parseInt(act[0]) > 0)
        {
          printChildren(act);
          
          
          
        }
      
    })
            
       }); 
    
              if(comments.length>0)
              {globalDate = new Date();}

  
  })}, 7500);


function showComponents()
{
  
  $('.publishContainer').hide();
    $('#static-id').hide();
   $('.components').show();
  

  
}
function showDiscussion()
{
  
  
  $('.publishContainer').show();
    $('#static-id').show();
   $('.components').hide();
}




   
   
  
   
   $('li.postHolder:contains("Objective: ")').css('background-color', '#f1f1f1')
      $('li.postHolder:contains("Component: ")').css('background-color', '#f1f1f1')

   
  </script>

  {!#HOSTED_FILE.H2V86zcKS0S1JGcwJcS9TA#text}

