
exports.route = function(handle, pathname, res, req){
	if( typeof handle[pathname] === 'function'){
		return handle[pathname](res, req);
	}else{
		console.info('No request handler found for ' + pathname);
		return "404! page not find!"
	}
}


