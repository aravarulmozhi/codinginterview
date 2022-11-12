let num1 = '1234567';
let num2 = '23689';
let common=[]
for(let c=0; c< num1.length; c++){
  num2.includes(num1[c]) ? common.push(num1[c]):null
}
for(let g=0; g<common.length; g++){
num1=num1.replace(common[g],"")  
num2=num2.replace(common[g],"")
}
console.log(num1)
console.log(num2)
