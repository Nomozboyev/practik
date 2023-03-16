var raqam= prompt('raqamni kiriting ',0)-0
var a = raqam/10-raqam%10/10
var b = raqam%10
var son1=document.querySelector('.skill-percent-number')
var son2=document.querySelector('.son2')
var javob=document.querySelector('.javob')
var yigindi=a+b


console.log (son1.textContent=''+ a  )
console.log (son2.textContent=''+ b )
console.log( javob.textContent=a +' + '+ b +" = " +yigindi) 