const ready = document.getElementById("ready");
const sec1 = document.getElementById("index");
const sec2 = document.getElementById("welcome");

ready.addEventListener("click",function(){
    hello();
   
})

function hello()
{
    sec1.classList.add("ocult");
    sec2.classList.remove("ocult");
}
