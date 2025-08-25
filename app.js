let cheese = 400;


 let totalCheeseElm = document.getElementById('total-cheese')
 let perClickCheeseElm = document.getElementById('cheese-per-click')
 let totalPickAxes = document.getElementById('total-pickaxes')
 let totalRoversElm = document.getElementById('total-rovers')
 let roverPassiveIncomeElm = document.getElementById('passive-rover')

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
    // REVIEW find should be used to pull single values out of arrays, not to change values
    const pickaxe = clickUpgrades.find(u => u.name == 'pickaxe')
     if(cheese >= pickaxe.price){
    //  clickUpgrades.find((pickaxe) => pickaxe.quantity += 1)
    //  clickUpgrades.find((pickaxe) => pickaxe.bonus = pickaxe.quantity)
    //  clickUpgrades.find((price) => cheese -= price.price)
    pickaxe.quantity++
    pickaxe.bonus++
    cheese -= pickaxe.price
    pickaxe.price++
    drawTotalCheese ()
    console.log('purchased')
    totalPickAxes.innerHTML = `Total Champions: ${clickUpgrades[0].quantity}`
    perClickCheeseElm.innerHTML = `Gold Per Click: ${clickUpgrades[0].bonus}`
    }
 }

 function buyPickaxe5() {
     if(cheese > 500){
     clickUpgrades.find((pickaxe) => pickaxe.quantity += 5)
     clickUpgrades.find((pickaxe) => pickaxe.bonus = pickaxe.quantity)
     clickUpgrades.find((price) => cheese -= price.price * 5)
    drawTotalCheese ()
    console.log('purchased')
    totalPickAxes.innerHTML = `Total Champions: ${clickUpgrades[0].quantity}`
    perClickCheeseElm.innerHTML = `Gold Per Click: ${clickUpgrades[0].bonus}`
    }
 }

function mine(){
    clickUpgrades.find ((upgrade) => cheese += upgrade.bonus )
    // cheese += 1
    // console.log(cheese)
    updateCheese ()
    endGame()
} 


function buyRover(howMuch, upBy){
    if( cheese >= howMuch){
        automaticUpgrades.find((upgrade) => upgrade.quantity += upBy),
        cheese -= howMuch
     automaticUpgrades.find((upgrade) => upgrade.bonus = 20 * upgrade.quantity)
    
    drawTotalCheese ()
    drawPassiveRoverIncome()
    totalRoversElm.innerHTML = `Total Heart of Golds: ${automaticUpgrades[0].quantity}`
}
}

function collectAutoUpgrades() {

    if(clickUpgrades[0].quantity >= 10){
        let bonusRoverIncome = 0
        automaticUpgrades.find((upgrade) => bonusRoverIncome = 20 * upgrade.quantity)
        
        cheese += bonusRoverIncome
        drawTotalCheese ()
        drawPassiveRoverIncome()
    }
    
}
// if (howMuch > 4000){
// automaticUpgrades.find((upgrade) => upgrade.quantity += 4),
// cheese -= howMuch
// }


setInterval(collectAutoUpgrades, 1500)

function updateCheese () {
    let totalCheese = 0
    totalCheese = cheese
    console.log('🧀', totalCheese)
    drawTotalCheese ()
}

function drawTotalCheese () {
    totalCheeseElm.innerHTML = `Total Gold: ${cheese}`
}

function drawPassiveRoverIncome () {
    roverPassiveIncomeElm.innerHTML = `Passive Heart of Gold Income: ${automaticUpgrades[0].bonus}`
}

function endGame() {
    if(cheese >= 25000){
    window.alert('Bro stop playing you won already!')
    window.close()
    }
}


// function drawCheesePerClick() = {
    
// }

// function drawPickAxe() {
//     totalPickAxes.innerHTML = `Total Champions: ${}`
// }



// mine()