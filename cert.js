// function loadJSON(callback) {
//   var xobj = new XMLHttpRequest();
//   xobj.overrideMimeType("application/json");
//   xobj.open('GET', 'unsignedcert.json', true);
//   xobj.onreadystatechange = function () {
//     if (xobj.readyState == 4 && xobj.status == "200") {
//       callback(JSON.parse(xobj.responseText));
//     }
//   };
//   xobj.send(null);
// }

// function init() {
//   loadJSON(function(response) {
//    // Parse JSON string into object
//      //var jsonObj = JSON.parse(response);
//      //var actual_JSON = response
//      console.log(response);
//   });
//  }

 $(document).ready(function() {
  $.getJSON( "unsigned.json", function( json ) {
    var jsonObj = json;
    //var jsonObj = JSON.parse(json);
    //console.log( "JSON Data: " + jsonObj );
   });

});


// loadJSON(function(res) {
//   // do sth with response
//   console.log(res);
// });

