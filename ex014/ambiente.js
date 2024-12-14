let num = [9,4,3,8,5,6]
num.sort()
num.push(1)
num.sort()
/*console.log(num)
console.log(num[0])
for(let pos=0; pos < num.length; pos++){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}*/
console.log(num)
let pos = num.indexOf(9)

if ( pos == -1){
    console.log(`o valor nao foi encontrado `)
}else{  console.log(`a posição ${pos} tem o valor ${num[pos]}`) }
/*for(let pos in num){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}*/

