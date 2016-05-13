function route(handle,pathname,response,postData){
	 console.log("-------------->About to route a request for "+ pathname);
    if(typeof handle[pathname]==="function"){
    	console.log("Request for  "+pathname+"  Recived");
    	 handle[pathname](response,postData);
    }else{
    	console.log("No request for  "+pathname+"  Recived");
    	response.writeHead(404,{"Content-Type":"text/plain"});
    	response.write("404 Not found");
    	response.end();
    }

}
exports.route=route;