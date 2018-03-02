var postTest = function (ctx) {
	var body = ctx.request.body
	console.log('request',body)
	
	ctx.body = {data:[{a:1},{a:2}],code:0}
}

module.exports = postTest;