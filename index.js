function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'wei-yao-cert.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(JSON.parse(xobj.responseText));
    }
  };
  xobj.send(null);
}


loadJSON(function(res) {
  // do sth with response
  console.log(res);
});

$(function(){
$('.left').click(function(){
    $(this).toggleClass('open');
});
// $("#flipbook").turn({
// 		width: 400,
// 		height: 300,
// 		autoCenter: true
// 	});

});
