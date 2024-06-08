// ------ Butoane rating ------
const butonUnu = document.querySelector(".rating-card-button-unu");

const butonDoi = document.querySelector(".rating-card-button-doi");

const butonTrei = document.querySelector(".rating-card-button-trei");

const cardUnu = document.querySelector(".card-unu");

const cardDoi = document.querySelector(".card-doi");

const submitButton = document.querySelector(".rating-card-button-submit");
const selectedRate = document.querySelector(".selected-rate");

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

colturi rotunjite la card         Facut
culoarea din jurul stelutei       Facut
culori text ( titlu & subtitlu )  Facut
culori butoane + efect hover butoane ( la hover butoanele cu 1,2,3 ele trebuie sa aiba culoarea de background --white )
cele 3 butoane trebuie sa fie centrate  Facut
butonul de submit trebuie sa ocupe toata latimea din card, sa fie rotunjit, un spatiu mai mare intre litere, litere mai groase
efect hover buton submit           Facut partial nu stiu efect hover buton submit !!!!!!!!!!!!

*/