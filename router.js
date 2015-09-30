
exports.route = function(handle, pathname, res){
	if( typeof handle[pathname] === 'function'){
		return handle[pathname](res);
	}else{
		console.info('No request handler found for ' + pathname);
		return "404! page not find!"
	}
}


