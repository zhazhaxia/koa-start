const sleep = async (ms) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true)
    }, ms)
  })
}

async function profile (ctx) {
	await sleep(1000)
	ctx.body = {
	  name: 'milu',
	  age:'18'
	}
}
module.exports = profile