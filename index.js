const http =require('http')
http.createServer((req,res)=>{
    res.write('<h1>HI Welcome To NodeJS Serve</h1>')
    res.end()
}).listen(4500)