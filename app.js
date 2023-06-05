const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) =>{

    fs.readFile("planets.html", 'utf-8' , (err, data) =>{
        if (err){
            console.log(err)
            return
        }
        console.log(data)
     })
    

})

server.listen(5000, function () {
    console.log(`server is running on port 3000`)
})
