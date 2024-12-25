console.log("aaaa")
let menu = document.getElementById("menujs")
let menu2 = document.getElementById("menu2js")
let account = document.getElementById("account-img")
let account2 = document.getElementById("account-img2")
menu.addEventListener("click", ()=>{
    let right = document.getElementById("rightjs")
    right.style.left = "-100%"
    document.body.style.paddingLeft = "95px"
    document.getElementById("right-2js").style.display = "block"
    menu.style.display = "none"
    menu2.style.display = "block"
    document.querySelectorAll(".left-box").style.flexBasis = "23.9%"
    document.querySelectorAll(".box-1").style.height = "10.8vw"
})
menu2.addEventListener("click", ()=>{
    let right = document.getElementById("rightjs")
    right.style.left = "0"
    document.body.style.paddingLeft = "264px"
    document.getElementById("right-2js").style.display = "none"
    menu.style.display = "block"
    menu2.style.display = "none"
})
account.addEventListener("click" ,()=>{
    let profile = document.getElementById("profile")
    profile.style.display = "block"
    account.style.display = "none"
    account2.style.display = "block"
})
account2.addEventListener("click" ,()=>{
    let profile = document.getElementById("profile")
    profile.style.display = "none"
    account.style.display = "block"
    account2.style.display = "none"
})

