const fs=require('fs');
var obj = {
  name: 'Amer'
};
var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);//
console.log(stringObj);
// fs.writeFileSync('json1.json', stringObj);


var jsonString = fs.readFileSync('json1.json');
var json = JSON.parse(jsonString);//Convert a data from string into json
console.log(typeof json);
console.log(json[1].stname);
