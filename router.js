
exports.route = function(handle, pathname, res, postData){
	if( typeof handle[pathname] === 'function'){
		return handle[pathname](res, postData);
	}else{
		console.info('No request handler found for ' + pathname);
		return "404! page not find!"
	}
}


