const DIAS = document.querySelectorAll('.container-dias');
for (const container of DIAS) {
    container.addEventListener("click",(event)=>{
       if (event.target.nodeName === "H3")   return
        localStorage.setItem(event.target.firstElementChild.textContent,event.target.firstElementChild.textContent);
        location.reload();
    /*console.log(localStorage.length);*/
        /*console.log(event.target.firstChild.textContent);*/
        /**console.log(event.target.style.background="lime");*/
    })
}
addEventListener("DOMContentLoaded",()=>{
    let numberDays = localStorage.length;
    if(numberDays === 0) return
    else{
        let arrayDays = [];
    for (let index = 0; index < numberDays; index++) {
        let day = localStorage.key(index);
        arrayDays.unshift(day);
    }
   let newArrayElement = [];
   arrayDays.forEach(element => {
    const DIAS = document.querySelectorAll('.container-dias');
    for (const container of DIAS) {
        newArrayElement.unshift(container)
    } 
    newArrayElement.forEach(elements => {
        if (elements.firstElementChild.textContent === element) {
            elements.style.background="lime"
        }
        else{
            return null;
        }
    } )
    //console.log(element);
   });
    }
})
const REINICIAR = document.querySelector("#restablecer").addEventListener("click",()=>{
    localStorage.clear();
    location.reload();
})