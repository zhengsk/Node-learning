
exports.start = function(route, handle){

	var http = require('http');
	var url = require('url');


	http.createServer(function(req, res){

		var urlDatas = url.parse(req.url);

		// 路由
		route(handle, urlDatas.pathname, res);
		
	}).listen(3000);

	console.log('HTTp server is listening at port 3000.');
}


