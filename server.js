const express = require('express')
const PORT = process.env.PORT || 3000

const app = express()

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})



  app.get('/greetings/:name', (req, res) => {
    const name = req.params.name
    res.send(`Whats good, ${name}?`)
})


app.get('/roll/:num', (req, res) => {
    const num = parseInt(req.params.num, 10)
   
    if (isNaN(num) || num <= 0) {
 res.send(`Please select a valid number`)
 }
 const randomNumber = Math.floor(Math.random() * num) 
 res.send (`You rolled a ${randomNumber}`)
})







const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];
  
  app.get('/collectibles/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
  
    if (isNaN(index) || index < 0 || index >= collectibles.length) {
        res.send("This item is not yet in stock. Check back soon!");
    }
  
    const item = collectibles[index];
    res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`);
  })











const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes/min-price/:shoeprice', (req, res) => {
    const shoeprice = parseInt(req.params.shoeprice, 10);
    
    if (isNaN(shoeprice)) {
        res.send("Invalid price.");
    }

    const selectShoes = shoes.filter(shoe => shoe.price >= shoeprice);

    if (selectShoes.length === 0) {
    res.send("No shoes found at or above that price.");
    }

    res.send(selectShoes);
});








