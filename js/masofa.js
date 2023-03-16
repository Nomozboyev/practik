var masofa = Number ( prompt('masofani kiriting', 0))

var piyoda = 3.6
var velosepet = 20.1
var mashina = 70
var samalyot = 800

// soat chiqarish
var piyoda2= document.querySelector('.piyoda')
var Velosepetda2=document.querySelector('.Velosepetda')
var Mashinada2=document.querySelector('.Mashinada')
var Samalyotda2=document.querySelector('.Samalyotda')
// soat formula   (a/b) -((a%b)/a)
var natija_piyoda =masofa/piyoda- masofa%piyoda/piyoda
var natija_velosepet =masofa/velosepet-masofa%velosepet/velosepet
var natija_mashina = masofa/mashina-masofa%mashina/mashina
var natija_samalyot  = masofa/samalyot-masofa%samalyot/samalyot
// minut    
var Piyoda_min = document.querySelector('.Piyoda_min')
var Velosepetda_min=document.querySelector('.Velosepetda_min')
var mashinada_min = document.querySelector('.mashinada_min')
var Samalyotda_min = document .querySelector('.Samalyotda_min')
var min =60 // 1soat yani 60 min 
// minut formula ((a%b)/b)*60
var Piyoda_min_for =masofa%piyoda /piyoda* min
var velosepet_min_for =masofa%velosepet /velosepet* min
var mashina_min_for =masofa%mashina /mashina* min
var samalyot_min_for =masofa%samalyot /samalyot* min
//sekund ayirib tashlaymiz 
var sek = Piyoda_min_for%piyoda

console.log (piyoda2.textContent= (natija_piyoda + " soat" ) , Piyoda_min.textContent= Piyoda_min_for  )
console.log (Velosepetda2.textContent= (natija_velosepet + " soat") )
console.log ( Mashinada2.textContent= (natija_mashina + " soat") )
console.log ( Samalyotda2.textContent=(natija_samalyot + " soat") )
console.log ( Piyoda_min.textContent= Piyoda_min_for    )