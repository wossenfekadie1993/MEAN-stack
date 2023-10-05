const http=require('http')

const server=http.createServer((request,response)=>{
    response.writeHead(200,{'Content-type':'text/html'})
    response.write('<h1>hello<h1>')
    response.end()
})
server.listen(3333,()=>{
    console.log('http://localhost:3333')
})