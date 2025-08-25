let cheese = 4000;


let totalCheeseElm = document.getElementById('total-cheese')
let perClickCheeseElm = document.getElementById('cheese-per-click')
let totalPickAxes = document.getElementById('total-pickaxes')
let totalRoversElm = document.getElementById('total-rovers')
let roverPassiveIncomeElm = document.getElementById('passive-rover')
let pickaxePriceElm = document.getElementById('pickaxe-price') 

 let clickUpgrades = [
    {
        name: 'pickaxe',
        price: 100,
        quantity: 1, 
        bonus: 1
    }

]
let clickUpgrades5 = [
    {
        name: 'pickaxe',
        price: 500,
        quantity: 1,
        bonus: 5
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
 
 let price1 = 100
 
 function buyPickaxe() {
    
     if(cheese >= price1){
         clickUpgrades.find((pickaxe) => pickaxe.quantity += 1)
         clickUpgrades.find((pickaxe) => pickaxe.bonus = pickaxe.quantity)
         clickUpgrades.find((price) => cheese -= price1)
        //  clickUpgrades.find((pickaxe) => pickaxe.price = pickaxe.price + 10)
        //  clickUpgrades.find((pickaxe) => pricePickaxe = pickaxe.price)

        //  This Part is givin me problems
        //  clickUpgrades.find((price) => price.price + pricePickaxe - 90)
        //  console.log(pricePickaxe)
        //  priceActualPrice = clickUpgrades[0].price
        //  pricePickaxe = priceActualPrice
     console.log(clickUpgrades[0].price)
    drawTotalCheese ()
    console.log()
    totalPickAxes.innerHTML = `Total Champions: ${clickUpgrades[0].quantity}`
    perClickCheeseElm.innerHTML = `Gold Per Click: ${clickUpgrades[0].bonus}`
    pickaxePriceElm.innerHTML = `${clickUpgrades[0].price} Gold: Champions +1`
    }
    price1 += 100
 }

 function buyPickaxe5(pricePickaxe5) {
     if(cheese > pricePickaxe5){
     clickUpgrades5.find((pickaxe) => pickaxe.quantity += 5)
     clickUpgrades5.find((pickaxe) => pickaxe.bonus = pickaxe.quantity * 5 )
     clickUpgrades5.find((price) => cheese -= pricePickaxe5)
    //  clickUpgrades5.find((price) => pricePickaxe5 += 100)
     //  clickUpgrades5.find((pickaxe) => pickaxe.bonus )
    //  clickUpgrades5.find((price) => cheese -= price.price += 10
    //  clickUpgrades.find((price) => price.price = 100)
    drawTotalCheese ()
    console.log('purchased')
    totalPickAxes.innerHTML = `Total Champions: ${clickUpgrades5[0].quantity}`
    perClickCheeseElm.innerHTML = `Gold Per Click: ${clickUpgrades5[0].bonus}`
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
        endGame()
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

// function drawPickaxePrice() {
//     pickaxePriceElm.innerHTML = `<span> ${clickUpgrades[0].price} Gold: Champions +1<span>`
// }


// function drawCheesePerClick() = {
    
// }

// function drawPickAxe() {
//     totalPickAxes.innerHTML = `Total Champions: ${}`
// }



// mine()

