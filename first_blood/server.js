var http=require('http');
var url=require('url');
var querystring=require("querystring");
function start(route,handle){
function onRequest(request,response){
    var postData="";
	var pathname=url.parse(request.url).pathname;
    console.log("Request for"+pathname+"recived");
    request.setEncoding("UTF-8");
    request.addListener("data", function(postDataTrunk){
      postData+=postDataTrunk;
      console.log("Received Post data chunk'"+querystring.parse(postDataTrunk).text+"'_______________");
    });
    request.addListener("end", function(){
    	route(handle,pathname,response,postData);
    });
	

}
http.createServer(onRequest).listen(8888);
console.log("Server has Started");
}
exports.start=start;