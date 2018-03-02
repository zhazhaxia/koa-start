var fs = require('fs')

fs.readFile('./test.wps',(err,data)=>{
	if (!err) {
		console.log(data)
	}
})