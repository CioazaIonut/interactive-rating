const butonUnu = document.querySelector(".rating-card-button-unu");

const butonDoi = document.querySelector(".rating-card-button-doi");

const butonTrei = document.querySelector(".rating-card-button-trei");

const cardUnu = document.querySelector(".card-unu");

const cardDoi = document.querySelector(".card-doi");



//buton 1
const butonulUnuFunction = () => {
    //butonUnu.style.backgroundColor = "orange"
    butonUnu.classList.add("active-button")
    butonDoi.classList.remove("active-button")
    butonTrei.classList.remove("active-button")
}

butonUnu.addEventListener("click",butonulUnuFunction);

//alert("Oare functioneaza?")

//Buton 2
const butonulDoiFunction = () => {
    //butonDoi.style.backgroundColor = "orange"
    butonUnu.classList.remove("active-button")
    butonDoi.classList.add("active-button")
    butonTrei.classList.remove("active-button")
}

butonDoi.addEventListener("click",butonulDoiFunction);


//buton 3
const butonulTreiFunction = () => {
    //butonTrei.style.backgroundColor = "orange"
    butonUnu.classList.remove("active-button")
    butonDoi.classList.remove("active-button")
    butonTrei.classList.add("active-button")
}

butonTrei.addEventListener("click",butonulTreiFunction);




/*pasi sa se intample ceva cand apasam pe buton
1 selectam butonul (document.querySelector)
2 adaugam eventListener (calculateButton.addEventListener("click",showResoult))
3 creaza functia care sa se execute pe click



pasi pentru a schimba stilizarea unui element folosind JS:
- 1 selectam elementul (document.querySelector)
- 2 scriem numele constantei, pe urma adaugam ".style." + numele propietati de css pe care vrem sa o schimbam.
ex: numeConstanta.style.height = "500px";

*/

/* tema

de facut html
de facut css
cand dau click pe butonul de submit sa dispara cardul 1 si sa apara cardul 2

*/