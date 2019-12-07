var mirb = prompt('Введите слово');
var newArr = []

for(var y = 0; y < mirb.length; y++){
    for(var x = 0; x < mirb.length - y; x++){
      newArr.push(mirb.slice(y,mirb.length - x))  
    }
}
console.log(newArr);
