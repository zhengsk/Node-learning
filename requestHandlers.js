
exports.requestHandlers = {
	start : function(res){
		console.info("Request handler 'start' was called!");

		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.write('<h1>Node.js</h1>');
		res.end('<p>'+ "Hello Start!" +'</p>');
	}

	,upload : function(res){
		console.info("Request handler 'upload' was called!");

		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.write('<h1>Node.js</h1>');
		res.end('<p>'+ "Hello Upload!" +'</p>');
	}
}