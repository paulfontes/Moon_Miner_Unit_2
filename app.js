let cheese = 1000;


 let totalCheeseElm = document.getElementById('total-cheese')
 let perClickCheeseElm = document.getElementById('cheese-per-click')
 let totalPickAxes = document.getElementById('total-pickaxes')


 let clickUpgrades = [
    {
        name: 'pickaxe',
        price: 100,
        quantity: 1, 
        bonus: 1
    }
 ]

 let automaticUpgrades = [
    {
        name: 'rover',
        price: 600,
        quantity: 1,
        bonus: 20
    }
 ]

 function buyPickaxe() {
     if(cheese > 100){
     clickUpgrades.find((pickaxe) => pickaxe.quantity += 1)
     clickUpgrades.find((pickaxe) => pickaxe.bonus = pickaxe.quantity)
     clickUpgrades.find((price) => cheese -= price.price)
    drawTotalCheese ()
    console.log('purchased')
    totalPickAxes.innerHTML = `Total Pickaxes: ${clickUpgrades[0].quantity}`
    perClickCheeseElm.innerHTML = `Cheese Per Click: ${clickUpgrades[0].bonus}`
    }
 }

function mine(){
    clickUpgrades.find ((upgrade) => cheese += upgrade.bonus )
    // cheese += 1
    // console.log(cheese)
    updateCheese ()
    
} 

function collectAutoUpgrades() {

    if(clickUpgrades[0].quantity >= 10){

    automaticUpgrades.find((upgrade) => upgrade.bonus *= upgrade.quantity)

    cheese += automaticUpgrades[0].bonus

    drawTotalCheese ()
    }
}

setInterval(collectAutoUpgrades, 3000)

function updateCheese () {
    let totalCheese = 0
    totalCheese = cheese
    console.log('🧀', totalCheese)
    drawTotalCheese ()
}

function drawTotalCheese () {
    totalCheeseElm.innerHTML = `Total Cheese: ${cheese}`
}

// function drawCheesePerClick() = {
    
// }

// function drawPickAxe() {
//     totalPickAxes.innerHTML = `Total Pickaxes: ${}`
// }



// mine()

