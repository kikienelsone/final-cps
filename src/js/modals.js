let modalWindowCall = document.querySelector(".modal-call")
let modalWindowFeedback = document.querySelector(".modal-feedback")
let openModalCall = document.querySelector(".social__call-button")
let openModalFeedback = document.querySelector(".social__chat-button")
let closeModalCall = document.querySelector(".modal-call__close-button")
let closeModalFeedback = document.querySelector(".modal-feedback__close-button")
let container = document.querySelector(".container")
let aside = document.querySelector(".wrapper")
let logoMenuBurger = document.querySelector(".logo-menu__burger")



logoMenuBurger.onclick = () =>{
  aside.style.display = "block"
  container.style.display = "none"

}

openModalCall.onclick = function () {
  modalWindowCall.style.visibility = "visible"
  container.style.display = "none"
  aside.style.display = "none"
}
closeModalCall.onclick = () =>{
  modalWindowCall.style.visibility = "hidden"
  container.style.display = "block"
  aside.style.display = "block"
}

openModalFeedback.onclick = () =>{
  modalWindowFeedback.style.visibility = "visible"
  container.style.display = "none"
  aside.style.display = "none"
}

closeModalFeedback.onclick = () =>{
  modalWindowFeedback.style.visibility = "hidden"
  container.style.display = "block"
  aside.style.display = "block"


}
