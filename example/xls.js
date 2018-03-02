var xlsx = require('node-xlsx');
var fs = require('fs');
//读取文件内容
var obj = xlsx.parse('./1.xls');
// console.log(obj)
var excelObj=obj[0].data;
// console.log(excelObj);

var data = [];
for(var i in excelObj){
    var arr=[];
    var value=excelObj[i];
    // console.log('excelobj', value.length)
    for(var j=0;j<value.length;j++){
    	var val = value[j]
    	// console.log('excelobj item', j,val,val == undefined,typeof val)
        arr.push( val === undefined ? ' ' : val.toString().replace(/[\u4e00-\u9fa5]+/g,''));
    }
    data.push(arr);
}
var buffer = xlsx.build([
    {
        name:'sheet1',
        data:data
    }        
]);
console.log(data);

//将文件内容插入新的文件中
fs.writeFileSync('test111.xls',buffer,{'flag':'w'});