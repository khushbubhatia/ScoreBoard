
let btnhomeone = document.getElementById("btnhome1")
let btnhometwo = document.getElementById("btnhome2")
let btnhomethree = document.getElementById("btnhome3")
let homeStoreEl = document.getElementById("homeScore")

let btnguestone = document.getElementById("btnguest1")
let btnguesttwo = document.getElementById("btnguest2")
let btnguestthree = document.getElementById("btnguest3")
let guestStoreEl =document.getElementById("guestScore")



let homeScore = 0
let guestScore = 0 

function addonetohome(){
    homeScore  +=  1
    homeStoreEl.textContent = homeScore
}
function addtwotohome(){
    homeScore  +=  2
    homeStoreEl.textContent = homeScore
}
function addthreetohome()
{
    homeScore +=3
    homeStoreEl.textContent = homeScore
}
//------------------------------------------------//
function addonetoguest(){
    guestScore  +=  1
    guestStoreEl.textContent = guestScore
}
function addtwotoguest(){
    guestScore  +=  2
    guestStoreEl.textContent = guestScore
}
function addthreetoguest()
{
    guestScore +=3
    guestStoreEl.textContent = guestScore
}
//------------------------------------------------//
let restartgameEl =document.getElementById("restartgame") 
let restartgame =0 

function clearall() {
  guestStoreEl.textContent=0
  guestScore=0
  homeStoreEl.textContent=0
  homeScore=0
}