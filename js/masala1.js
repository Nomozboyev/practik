
var uzunlik=prompt('uzunlikni kiriting',0+'...sm')-0
var text1 = document.querySelector('.card__content')
var text2=document.querySelector('.card__content2')

// function natija_m(){
//     if( uzunlik){
//       return console.log(uzunlik/100-uzunlik%100/100 + ' m') 
      
//     }
//     else if(uzunlik) {
//        return  console.log (uzunlik%100+' sm')
//     }
// }
// var javob =natija_m()

// qanday qilib 2 ta javobni olsam boladi ?


var m =uzunlik/100-uzunlik%100/100 + ' m  '
var sm= uzunlik%100+' sm'
console.log(text1.textContent=m)
console.log(text2.textContent=sm)
