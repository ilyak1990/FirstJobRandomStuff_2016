<link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css"/>
<link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.0.4/dist/MarkerCluster.Default.css"/>
<link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.0.4/dist/MarkerCluster.css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/0.4.2/leaflet.draw.css"/>



  
<img class ='loading' src='{!#HOSTED_FILE.I9HFf8VKRbuB92h7-WWlsg#url}' border='0' align='absmiddle'/>
<div id="map" style="width:100%;height:600px;"></div>
<div id="example">
    <div id="dialog">
    </div>



<script>

  $(document).ready(function () {

  
  getScriptFromCDN("https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.3/leaflet.js", false, function() {
    getScriptFromCDN("https://s3.amazonaws.com/bcic-appjs/leaflet/aerisjs.js", false, function() {
        getScriptFromCDN("https://unpkg.com/leaflet.markercluster@1.0.4/dist/leaflet.markercluster.js", false, function() {
           getScriptFromCDN("https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/0.4.9/leaflet.draw.js", false, function() {
                    
mapit();
}); 
}); 
});
});
});


function mapit() {

var json=[];

rbf_selectQuery("SELECT id, Marker_Color,Marker_Icon FROM incident", 1000,  function(values) {
    
  var j = [];
  
  for (var l = 0; l < values.length; l++) { 
j[values[l][0]] = {'color':values[l][1], 'icon':values[l][2], 'id':values[l][0]}  
}
  json.push(j)   
  });

  $(".loading").hide();

  var main = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
});


  var percipitation = L.tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_qpf6hrs_offsets/MapServer/WMSServer?', {
    format: 'image/png',
    transparent: true,
    layers: '9'
  });

   var thunderstorm = L.tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/wwa_meteoceanhydro_shortduration_hazards_watches_time/MapServer/WMSServer?', {
    format: 'image/png',
    transparent: true,
    layers: '1'
  });
  
    var flashflood = L.tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/wwa_meteoceanhydro_shortduration_hazards_watches_time/MapServer/WMSServer?', {
    format: 'image/png',
    transparent: true,
    layers: '2'
  });
  
    var tornado = L.tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/wwa_meteoceanhydro_shortduration_hazards_watches_time/MapServer/WMSServer?', {
    format: 'image/png',
    transparent: true,
    layers: '0'
  });
  
  var hurricane = L.tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/wwa_meteoceanhydro_shortduration_hazards_warnings_time/MapServer/WMSServer?', {
    format: 'image/png',
    transparent: true,
    layers: '2'
  });


  var temperature = L.tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_time/MapServer/WMSServer?', {
    format: 'image/png',
    transparent: true,
    layers: '25'
  });


      
  
  if (L !== undefined) {
    var map = L.map('map', {
      center: [39.73, -104.99],
      zoom: 9,
      layers: [main]
    }).setView([51.505, -0.09], 2);
  }
  

var types= [];
var incidents=[];

   types.push("Other")

{!#LOOP_BEGIN.all#17428}
  
types.push('{!status#text}');
  
incidents.push({'incidentId':{!id},'incident':"{!name#link}" , 'name':"{!name}"  ,"status":"{!status#text}", "color":'{!Marker_Color}', "icon":"{!Marker_Icon}",'location_data': [ {!#LOOP_BEGIN.R113658} {'locationId': "{!org_location.id}" , 'lat':"{!org_location.latitude}", 'long':"{!org_location.longitude}" , 'location': "{!org_location.name#link}" },  {!#LOOP_END.R113658} ]  });

{!#LOOP_END.all}

 

  var severe = L.layerGroup([thunderstorm, hurricane, flashflood, tornado]);
  var editableLayers = new L.FeatureGroup();
  var iconLayers = new L.FeatureGroup();
  var weather = {"Temperature": temperature,
        "Precipitation": percipitation,
        "Weather Watch": severe ,
        "Hurricane": hurricane,
        "Draw Layers": editableLayers,
        "Icons": iconLayers,
        "None":  L.tileLayer('')


    };


    function testy()
    {
        rbf_selectQuery("SELECT Shapes,id,radius,Shape_Type,Coordinates FROM Map_Records where id is not null", 1000, function(values){

            if(values.length>0)
            {


                for (var i = 0; i < values.length; i++) {



                    if(values[i][3] !== 'icon')
                    {
                        var latlng =  JSON.parse(values[i][0]).geometry.coordinates

                        if(JSON.parse(values[i][0]).geometry.type=="Point")
                        {
                            var latlng =  JSON.parse(values[i][0]).geometry.coordinates
                            var radius = parseInt(values[i][2]);
                            L.circle([latlng[1], latlng[0]], radius).addTo(editableLayers)
                        }

                        else
                        {
    
                            var ob = JSON.parse(values[i][0]);

                            L.geoJSON(ob).addTo(editableLayers);

                        }
                    }
                    else
                    {     var icon = L.divIcon({

                            html:values[i][0],
                            popupAnchor: [0,-10]
                        })


                        var customPopup = document.createElement('div');
                        var split = values[i][4].split(',')


                        var marker= L.marker([split[0] , split[1]], {icon: icon , draggable: false })
  

                        marker.addTo(iconLayers)



		    }}}})}
    testy();

 var landmarks = {}
 var markerLayers={}
 
 
 
 for (var o = 0; o < types.length; o++) {
   

 var x = landmarks[types[o].replace(/ /g,'') +"M"] = L.layerGroup([])
 markerLayers[types[o]]=x;

 }
 console.log("add to controls")
  
  
  L.control.layers( weather,markerLayers).addTo(map);
  

function createMarkers(incidents)
{

var cluster = {}
var clusterLayers={}
var clustergroup = L.markerClusterGroup();
  
  
  for (var i = 0; i < incidents.length; i++) { 

     for (var t = 0; t < incidents[i].location_data.length; t++) { 
       
        var link ='{!#LINK.org_location#113406}';
        link+= "&id=" + 1 ;    
        var title = "<div><a class='locations' href='"+ link  +"'>"    + " " + incidents[i].incident + "</a><span id='deleteButton' onclick='test(" + incidents[i].incidentId + ")'></span><br>" + incidents[i].location_data[t].location  + "<br>"+ incidents[i].status  + "</div>";
 
      
      var theClass= '';
      if(incidents[i].status && incidents[i].status!==null)
        {
      theClass = incidents[i].status;
      theClass+='M'
    
        }
    else
      {
        theClass="OtherM";
      }
      
   if(incidents[i].incidentId !== null )
        {
     
             if(incidents[i].icon !== '') var fa = '<i class=' + '"' +  incidents[i].icon + '"'  + '></i>';    
             else var fa='';

           
             if(incidents[i].color !== '') var color = incidents[i].color;
             else var color = 0;

        }

if(fa !== '') var svgrect = '<div id="svg"><svg width="32px" height="52px" viewBox="0 0 32 52" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M16,1 C7.7146,1 1,7.65636364 1,15.8648485 C1,24.0760606 16,51 16,51 C16,51 31,24.0760606 31,15.8648485 C31,7.65636364 24.2815,1 16,1 L16,1 Z" fill="'+ color +'"></path>'+ fa + '</svg></div>'

else var svgrect = '<div id="svg"><svg width="32px" height="52px" viewBox="0 0 32 52" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M16,1 C7.7146,1 1,7.65636364 1,15.8648485 C1,24.0760606 16,51 16,51 C16,51 31,24.0760606 31,15.8648485 C31,7.65636364 24.2815,1 16,1 L16,1 Z" fill="'+ color +'"></path><circle class="svg-icon-circle" cx="16" cy="16" r="8" fill="white"  stroke="black" stroke-width="1.5" stroke-opacity="0.5"></circle></svg></div>'


var icon =  L.divIcon({
      
       
       iconSize: [55,100], // size of the icon
     html: svgrect
  
       });

        var marker= L.marker([incidents[i].location_data[t].lat, incidents[i].location_data[t].long], {id: incidents[i].incidentId, icon: icon , draggable: false }).addTo(landmarks[theClass])
        
        marker.addTo(clustergroup)

      marker.bindPopup(title).on("click", onClick);
      
     $(marker._icon).addClass(theClass);

    map.addLayer(landmarks[theClass])
    

      
       $(marker).attr("id", incidents[i].incidentId);
       
        marker.on('dragend', function(e) {
    
      console.log('marker dragend event');
     
    });
                      }};
  
  
  clustergroup.on('clusterclick', function (a) {
    setTimeout(function(){  applyCSS();}, 100);
});

 map.addLayer(clustergroup);

 clustergroup.on('unspiderfied', function (a) {
     
     for (var i = 0; i <  $('.leaflet-control-layers-overlays').find('div').find('input:checked').siblings().length; i++) {

       var text = $('.leaflet-control-layers-overlays').find('div').find('input:checked').siblings()[i].innerHTML
       var final= text.replace(/ /g,'') +"M"

       map.removeLayer(landmarks[final])
       map.addLayer(landmarks[final])
     }
});

    map.on( "zoomend", function( ) {

 applyCSS();
  });

  iconLayers.on( "add", function(e ) {

            for (var i in e.target._layers) {
                console.log(e.target._layers[i])
                console.log(e.target._layers[i]._icon.className)


                e.target._layers[i]._icon.className =  e.target._layers[i]._icon.className + " anIcon"
            }

$('div.leaflet-marker-icon.anIcon').find('i').css('color','black')
    $('div.leaflet-marker-icon.anIcon').find('i').css('font-size','xx-large')
    $('div.leaflet-marker-icon.anIcon').css('border','none')
    $('div.leaflet-marker-icon.anIcon').css('background','none')});

	map.on('overlayadd', function(e) {applyCSS();});
                      }
                      
 createMarkers(incidents);

    $('input.leaflet-marker-shadow').css('visibility' , 'hidden'); //hides shadows behind the markers
applyCSS();}




function applyCSS(){

$('div.leaflet-marker-icon').css('height',0);
$('div.leaflet-marker-icon').css('border','none');
$('div.leaflet-marker-icon').css('margin-left','-50.5px');
$('#svg svg').css('display','block')
$('#svg svg').css('width','100px')
$('.leaflet-marker-icon').find('i.fa').css('z-index','2')
$('.leaflet-marker-icon').find('i.fa').css('width','100px')
$('.leaflet-marker-icon').find('i.fa').css('text-align','center')
$('.leaflet-marker-icon').find('i.fa').css('display','block')
$('.leaflet-marker-icon').find('i.fa').css('top','10px')
$('.leaflet-marker-icon').find('i.fa').css('position','absolute')
$('.leaflet-marker-icon').find('i.fa').css('color','white')
$('div.leaflet-marker-icon.anIcon').find('i').css('color','black')
$('div.leaflet-marker-icon.anIcon').find('i').css('font-size','xx-large')
$('div.leaflet-marker-icon.anIcon').css('border','none')
$('div.leaflet-marker-icon.anIcon').css('background','none')
}



function onSubmit(e)
{
  window.location.reload();
}

function test(e)
{
            kendo.confirm("Are you sure that you want to delete?").then(function () {
            kendo.alert("This location has been deleted.");
            rbf_deleteRecord('incident', e, function(values){})
            window.location.reload();
            } 
               );
}

function onClick(e) {}
function getScriptFromCDN(url, isCache, callback)
{
    jQuery.ajax({
            type: "GET",
            url: url,
            success: callback,
            dataType: "script",
            cache: isCache
    });
};

</script>



   <style>
  #map {z-index:1;}

  .loading {
    position:absolute;
    top:50%;
    left:50%;
  }

  img.leaflet-marker-icon:hover {
    /*opacity: 0.0*/
  }

path
{
      stroke: black;  
  stroke-width: 2px;   
  stroke-opacity: .5;
}

  #fieldlist {
                    margin: 0;
                    padding: 0;
                }

                #fieldlist li {
                    list-style: none;
                    padding-bottom: .7em;
                    text-align: left;
                }

                #fieldlist label {
                    display: block;
                    padding-bottom: .3em;
                    font-weight: bold;
                    text-transform: uppercase;
                    font-size: 12px;
                    color: #444;
                }

                #fieldlist li.status {
                    text-align: center;
                }

                #fieldlist li .k-widget:not(.k-tooltip),
                #fieldlist li .k-textbox {
                    margin: 0 5px 5px 0;
                }

                .confirm {
                    padding-top: 1em;
                }

                .valid {
                    color: green;
                }

                .invalid {
                    color: red;
                }

                #fieldlist li input[type="checkbox"] {
                    margin: 0 5px 0 0;
                }

                span.k-widget.k-tooltip-validation {
                    display; inline-block;
                    width: 160px;
                    text-align: left;
                    border: 0;
                    padding: 0;
                    margin: 0;
                    background: none;
                    box-shadow: none;
                    color: red;
                }

                .k-tooltip-validation .k-warning {
                    display: none;
                }


#deleteButton {
    
     cursor:pointer;
padding-left: 5px;
}

#deleteButton:hover
{
    
    text-shadow: 1px 1px 1px #555;
}


input.leaflet-marker-shadow
{
	visibility:hidden;
}


  </style>
  
  
  
  


