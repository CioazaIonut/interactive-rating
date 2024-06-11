// ------ Butoane rating ------
const butonUnu = document.querySelector(".rating-card-button-unu");

const butonDoi = document.querySelector(".rating-card-button-doi");

const butonTrei = document.querySelector(".rating-card-button-trei");

const cardUnu = document.querySelector(".card-unu");

const cardDoi = document.querySelector(".card-doi");

const submitButton = document.querySelector(".rating-card-button-submit");
const selectedRate = document.querySelector(".selected-rate");

const buttonReset = document.querySelector(".reset-button");

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

// buton submit

const goToNextStep = () => {
    const selectedButton = document.querySelector(".active-button");

    if (selectedButton === null) {
        alert("Please select a rate");
    } else {
        cardUnu.style.display = 'none';
        cardDoi.style.display = 'block';

        selectedRate.innerText = selectedButton.innerText;
    }

}

submitButton.addEventListener("click", goToNextStep);

// buton reset

const resetButtonPasDoi = () => {
    cardUnu.style.display = 'block';
    cardDoi.style.display = 'none';
    butonUnu.classList.remove("active-button")
    butonDoi.classList.remove("active-button")
    butonTrei.classList.remove("active-button")

}

buttonReset.addEventListener("click",resetButtonPasDoi);

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

de terminat pasul 2
de convertit culorile

*/