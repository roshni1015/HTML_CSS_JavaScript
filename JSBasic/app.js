// Removedupicate number from array
let Num = [7, 3, 6, 9, 7, 0, 1, 2, 3, 9, 7, 1, 0, 6, 5]

function removeduplicatenumber(Num){
    var unique = [];
    Num.forEach(element => {
        if(!unique.includes(element)){
            unique.push(element);
        }
        
    })
    return unique;
}
console.log(removeduplicatenumber(Num))

let x =10;

let name = 'Roshni';

//Reverse the string
var str = "Tech Alchemy";

function Reverse(str)
{
  var revString = "";

  for (var i = str.length - 1; i >= 0; i--)
  {
    revString += str[i];
  }

  return revString;
}


console.log(Reverse(str));