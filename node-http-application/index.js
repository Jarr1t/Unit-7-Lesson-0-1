const http = require('http')
const fs   = require('fs')
const url = require('url');

const app = http.createServer(handleRequest)
const PORT = 8000

function handleRequest(request, response){
    function renderText(statusCode = 200, content){
        response.writeHead(statusCode)
        response.write(content)
        response.end()
    }
    function renderHTML(path, queryObj = {}){
        console.log(queryObj)
        fs.readFile(path, 'utf8', (err, data) => {
            console.log(data)
          if(!err){
            //in data, replace {{firstName}} with queryObj.firstName
            Object.keys(queryObj).forEach(queryParam => {
              data = data.replace(`{{${queryParam}}}`, queryObj[queryParam])
            })
            renderText(200, data)
          } else {
            console.log("error reading file")
          }
        })
      }
    let URL = url.parse(request.url, true)
    console.log(URL)
    if(URL.pathname === "/"){
        let queryObj = URL.query
        renderHTML("./templates/homepage.html", queryObj)
    } else if(URL.pathname === "/dogs") {
        fs.readFile("./templates/dogspage.html", "utf8", (err, data) => {
            renderText(200, data)
        })
    } else {
        renderText(404, "Sorry that page doesn't exist")
    }
}


app.listen(PORT, () => {
    console.log(`${PORT} is up!`)
})