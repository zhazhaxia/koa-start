var getTest = function (ctx) {
	console.log('request',ctx.request)
	console.log('query',ctx.query)

	ctx.body = {data:[{a:1},{a:2}],code:0}
}

module.exports = getTest;