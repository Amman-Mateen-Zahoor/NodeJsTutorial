// const http =require('http')
// http.createServer((req,res)=>{
//     res.write('<h1>HI Welcome To NodeJS Serve</h1>')
//     res.end()
// }).listen(4500)

// const chalk = require('chalk')
// import('chalk').then((chalk) => {
//     console.log(chalk.default.blue('kkkkkkkkko'));
//   });

// First Api 
// const data = require('./FirstApiData')
// const http =require('http')
// http.createServer((req,res)=>{
// res.writeHead(200,{'content-type':'application\json'})
// res.write(JSON.stringify(data))
// res.end()
// }).listen(4500)  

// Express Start 
const Express = require('express')
const app = Express()

app.get('',(req,res)=>{
  
    res.send("Weolcome to Home Page")
})
app.get('/about',(req,res)=>{
  
    res.send("Weolcome to About Page")
})
app.get('/contactUs',(req,res)=>{
  
    res.send("Weolcome to ContactUs Page")
})
app.listen(4500)