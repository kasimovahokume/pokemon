//userin neye click etdiyini tutmaq ucun
const defaultImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZN93bVszwT6CxyRa8lEo9EUNvPjO62C9lPA&s";
const playerimg1 = document.querySelector("#playerImg1");
const playerimg2 = document.querySelector("#playerImg2");
const playerPoint1 = document.querySelector("#playerPoint1");
const playerPoint2 = document.querySelector("#playerPoint2");
const playerStatus1 = document.querySelector("#playerStatus1");
const playerStatus2 = document.querySelector("#playerStatus2");
const resetBtn = document.querySelector("#resetBtn");
const playerImg1 = document.querySelector("#playerImg1")
const playerImg2 = document.querySelector("#playerImg2")


const rules = ["e","w","f"];
let point1 = 0;
let point2 = 0;

const images = {
    e:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png",
    f:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png",
    w:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png"
}
//bizim ve komp secimi
function randomEl(arr) {
    const randomIndex = Math.floor(Math.random()*arr.length)
    return arr[randomIndex]
}
function resetGame(){
    // Xalları sıfırlayiriq ve sekilleri
    point1 = 0;
    point2 = 0;
    playerPoint1.innerHTML = "POINT: 0";
    playerPoint2.innerHTML = "POINT: 0";
    
    playerStatus1.innerHTML = "STATUS: STARTING";
    playerStatus1.style.color = "white";
    playerStatus2.innerHTML = "STATUS: STARTING";
    playerStatus2.style.color = "white";
    
    playerImg1.src = defaultImg;
    playerImg2.src = defaultImg;
}
addEventListener("keydown", function(e){
    const userChoose = e.key
    const compChoose = randomEl(rules)

    console.log("userChoose", userChoose);
    console.log("compChoose",compChoose);

    if (rules.includes(userChoose)==false) {
        alert("Please choose: e,w,f")
        return
    }
    //secimlerden sonra qalibin mueyyen olunmasi
    if (userChoose == "e" && compChoose == "f") {
        //xal sisteminin qurulmasi
        point1++

        playerPoint1.innerHTML = `POINT: ${point1}`
        playerStatus1.innerHTML = `WIN`
        playerStatus1.style.color = 'green'
        playerStatus2.innerHTML = `LOSE`
        playerStatus2.style.color = 'red'
        playerimg1.src = images[userChoose]
        playerimg2.src = images[compChoose]
        console.log("WIN!",point1,point2);
    }else if (userChoose == "w" && compChoose == "e") {
        point1++

        playerPoint1.innerHTML = `POINT: ${point1}`
        playerStatus1.innerHTML = `WIN`
        playerStatus1.style.color = 'green'
        playerStatus2.innerHTML = `LOSE`
        playerStatus2.style.color = 'red'
        playerimg1.src = images[userChoose]
        playerimg2.src = images[compChoose]
        console.log("WIN!",point1,point2);
    }else if (userChoose == "f" && compChoose == "w") {
        point1++

        playerPoint1.innerHTML = `POINT: ${point1}`
        playerStatus1.innerHTML = `WIN`
        playerStatus1.style.color = 'green'
        playerStatus2.innerHTML = `LOSE`
        playerStatus2.style.color = 'red'
        playerStatus1.classList.add("text-success")
        playerStatus2.classList.add("text-danger")
        playerimg1.src = images[userChoose]
        playerimg2.src = images[compChoose]

        console.log("WIN!",point1,point2);
    }else if (userChoose == compChoose ) {
        playerStatus1.innerHTML = `DRAF`
        playerStatus1.style.color = 'orange'
        playerStatus2.innerHTML = `DRAF`
        playerStatus2.style.color = 'orange'
        playerimg1.src = images[userChoose]
        playerimg2.src = images[compChoose]

        console.log("DRAF - DRAF");
    }else{
        point2++

        playerPoint2.innerHTML = `POINT: ${point2}`
        playerStatus1.innerHTML = `LOSE`
        playerStatus1.style.color = 'red'
        playerStatus2.innerHTML = `WIN`
        playerStatus2.style.color = 'green'
        playerimg1.src = images[userChoose]
        playerimg2.src = images[compChoose]
        console.log("LOSE!",point1,point2);
    }
})
