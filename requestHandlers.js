var querystring = require("querystring"); 

exports.requestHandlers = {
	start : function(res){
		console.info("Request handler 'start' was called!");

		var body = '<html>'+
		    '<head>'+
		    '<meta http-equiv="Content-Type" content="text/html; '+
		    'charset=UTF-8" />'+
		    '</head>'+
		    '<body>'+
		    '<form action="/upload" method="post">'+
		    '<textarea name="text" rows="20" cols="60"></textarea>'+
		    '<input type="submit" value="Submit text" />'+
		    '</form>'+
		    '</body>'+
		    '</html>';

		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.write(body);
		res.end();
	}

	,upload : function(res, postData){
		console.info("Request handler 'upload' was called!");

		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.write('<h1>Node.js</h1>');

		var result = querystring.parse(postData).text;

		res.end('收到内容：' + decodeURIComponent(result));
	}
}