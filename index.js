const btnLike1 = document.getElementById("btnLike1")
const countLike1 = document.getElementById("countLike1")

const btnLike2 = document.getElementById("btnLike2")
const countLike2= document.getElementById("countLike2")

const btnLDislike1 = document.getElementById("btnDislike1")
const countDislike1 = document.getElementById("countDislike1")

const btnDislike2 = document.getElementById("btnDislike2")
const countDislike2 = document.getElementById("countDislike2")

function clickLike1(){
    let totalLike1 = parseInt(countLike1.value) + 1;
        countLike1.textContent = totalLike1.toString();
}
btnLike1.addEventListener("click",clickLike1)

function clickLike2(){
    let totalLike2 = parseInt(countLike2.value) + 1;
        countLike2.textContent = totalLike2.toString();
}
btnLike2.addEventListener("click",clickLike2)

function clickDislike1(){
    let totalDislike1 = parseInt(countDislike1.value) + 1;
        countDislike1.textContent = totalDislike1.toString();
}
btnLike1.addEventListener("click",clickDislike1)

function clickDislike2(){
    let totalDislike2 = parseInt(countDislike2.value) + 1;
        countDislike2.textContent = totalDislike2.toString();
}
btnLike1.addEventListener("click",clickDislike2)
