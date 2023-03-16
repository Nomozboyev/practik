var son = prompt('ikki xonali son kiriting', 0)-0
var kop_xonali = son/10-son%10/10
var birlik=son%10

var text1=document.querySelector('.text1')
var text2=document.querySelector('.text2')

console.log (text1.textContent=kop_xonali+" ta o'nlik ")
console.log (text2.textContent= birlik+" ta birlik")