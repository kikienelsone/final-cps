


let activeBtn = document.querySelector(".brands_show-button")
let hideBtn = document.querySelector(".brands_hide-button")
let brands = document.querySelector(".brands__main-container")
let repairShowBtn = document.querySelector(".repair-content__show-button")
let repairHideBtn = document.querySelector(".repair-content__hide-button")
let repairList = document.querySelector(".repair-content__technical-list")



showBrands = () =>{
  activeBtn.classList.add("hide")
  hideBtn.classList.add("active")
  brands.classList.add("brandsShow")

}

hideBrands = () =>{
  hideBtn.classList.remove("active")
  activeBtn.classList.remove("hide")
  brands.classList.remove("brandsShow")

}

showRepair = () =>{
  repairShowBtn.classList.add("hide")
  repairHideBtn.classList.add("active")
  repairList.classList.add("showTechnicalList")
}

hideRepair = () =>{
  repairHideBtn.classList.remove("active")
  repairShowBtn.classList.remove("hide")
  repairList.classList.remove("showTechnicalList")

}
