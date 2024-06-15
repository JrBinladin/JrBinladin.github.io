const btnLikes1 = document.getElementById("btnLike1")
const countLikes1 = document.getElementById("countLikes1")

function clickLike1(){
  let totalLikes1 = parseInt(countLikes1.value) + 1
  countLikes1.textContent = totalLikes1.toString()
}

const btnLikes2 = document.getElementById("btnLike2")
const countLikes2 = document.getElementById("countLikes2")

function clickLike2(){
  let totalLikes2 = parseInt(countLikes2.value) + 1
  countLikes2.textContent = totalLikes2.toString()
}

btnLike1.addEventListener("click",clickLike1)
btnLike2.addEventListener("click",clickLike2)

function DisLikes1() {
  let totalDisLikes1 = parseInt(countDisLikes1.value) + 1
   countDisLikes1.textContent = totalDisLikes1.toString()
}
btnDisLike1.addEventListener("click",DisLikes1)

function DisLikes2() {
  let totalDisLikes2 = parseInt(countDisLikes2.value) + 1
   countDisLikes2.textContent = totalDisLikes2.toString()
}
btnDisLike2.addEventListener("click",DisLikes2)

const comment = document.getElementById("comment")
const submit = document.getElementById("submit")
const commentbox = document.getElementById("commentbox")

function submitComment() {
   commentbox.textContent += comment.value.toString() + "\n"
    comment.value=""
  
}
submit.addEventListener("click",submitComment)
