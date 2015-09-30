
exports.start = function(route, handle){

	var http = require('http');
	var url = require('url');


	http.createServer(function(req, res){

		var urlDatas = url.parse(req.url);

		// setEncoding
		req.setEncoding("utf8");
		
		var postData = "";
		// bind function
		req.addListener("data", function(postDataChunk){
			postData += postDataChunk;
			console.info("Recevied Post data chunk : '" + postDataChunk + "'.");
		});

		req.addListener("end", function(){
			// 路由
			route(handle, urlDatas.pathname, res, postData);
		});

		
	}).listen(3000);

	console.log('HTTp server is listening at port 3000.');
}


