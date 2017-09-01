var getTest = function (ctx) {
	console.log('request',ctx)

	ctx.body = {data:[{a:1},{a:2}],code:0}
}

module.exports = getTest;