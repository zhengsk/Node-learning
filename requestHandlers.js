var querystring = require("querystring"); 
var fs = require("fs");
var formidable = require("formidable");

exports.requestHandlers = {
	start : function(res, req){
		console.info("Request handler 'start' was called!");

		var body = '<html>'+
		    '<head>'+
		    '<meta http-equiv="Content-Type" content="text/html; '+
		    'charset=UTF-8" />'+
		    '</head>'+
		    '<body>'+
		    '<form action="/upload" method="post" enctype="multipart/form-data">'+
		    '<input type="file" name="upload">'+
		    '<input type="submit" value="Submit text" />'+
		    '</form>'+
		    '</body>'+
		    '</html>';

		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.write(body);
		res.end();
	}

	// ,upload : function(res, req){
	// 	console.info("Request handler 'upload' was called!");

	// 	var form = new formidable.IncomingForm();
	// 	console.log("about to parse");

	// 	form.parse(req, function(error, fields, files) {
			
	// 		console.info("parsing done!");

	// 		fs.renameSync(file.upload.path, "/temp/test.gif");
	// 		res.writeHead(200, {"Content-Type": "text/html"});
	// 		res.write("received img : <br/>");
	// 		res.write("<img src='/show' />");

	// 		res.end("-------end!");

	// 	});
	// }

	,upload : function upload(response, request) {
	  console.log("Request handler 'upload' was called.");

	  var form = new formidable.IncomingForm();
	  form.uploadDir = "/tmp";

	  console.log("about to parse");
	  form.on('end', function(error, fields, files) {
	    fs.renameSync(files.path, "/tmp/test.png");
	    response.writeHead(200, {"Content-Type": "text/html"});
	    response.write("received image:<br/>");
	    response.write("<img src='/show' />");
	    response.end();
	  });

	  form.parse(request);
	}

	,show : function(res, req){
		console.info("Request handler 'show' was called!");
		fs.readFile("temp/test.gif", "binary", function (error, file) {
			if(error){
				res.writeHead(500, {"Content-Type": "text/plain"});
				res.write(error + "\n");
				res.end();
			}else{
				res.writeHead(200, {"Content-Type": "image/gif"});
				res.write(file, "binary");
				res.end();
			}
		})
	}
}