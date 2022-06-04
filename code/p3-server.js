
/*
    Noah Bautista
    Project 3
*/

//Imported fastify and fs packages and coinCount function
const fs = require('fs');
const fastify = require("fastify")();
const {coinCount} = require('./p3-module.js');

// Added route with Get verb

fastify.get("/", (request, reply) => {
    fs.readFile(`${__dirname}/index.html`, (err, data) => {
        if (err) {
            reply
                .code(500)
                .header("Content-Type", "text/html")
                .send("<h1>Error processing request</h1>")
        } else {
            reply
                .code(200)
                .header("Content-Type", "text/html")
                .send(data)           
        }
    })
})

//add coin route with Get
fastify.get("/coin", (request, reply) => {
    const {denom = 0, count = 0} = request.query;
    let coinValue = coinCount({denom, count});
    reply
        .code(200)
        .header("Content-Type",'text/html')
        .send(`<h2>Value of ${count} of ${denom} is ${coinValue}</h2><br /><a href="/">Home</a>`)
})
 
//get coin with Get verb
fastify.get("/coins", (request, reply) => {
    const {option} = request.query;
    let coinValue;
    const coins = [{denom: 25, count: 2},{denom: 1, count: 7}];
    switch (option) {
        case "1":
            coinValue = coinCount({ denom: 5, count: 3 }, { denom: 10, count: 2 });
            break;
        case "2":
            coinValue = coinCount(...coins);
            break;
        default:
          coinValue = 0;
      };
      console.log(coinValue);
    reply
        .code(200)
        .header("Content-Type",'text/html')
        .send(`<h2>Option ${option} value is ${coinValue}</h2><br /><a href="/">Home</a>`)
})


//Fastify listen section
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
        if (err) {
                console.log(err);
                process.exit(1);
        }
        console.log(`Server listening on ${address}`);
});
