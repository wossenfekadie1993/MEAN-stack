const http = require("http");
const fs = require("fs");
const PORT=process.env.PORT | 3000
const dir='./pages/';
http
  .createServer(
    (req, res) => {
      res.setHeader("contect-type", "text/plain");
      // res.write('this one is the content');

      switch (req.url) {
        case "/":
          render(res,'index.html');
          break;
        case "/about":
          render(res,'about.html');
          break;
        default:
          res.writeHead(404,{'content-type':'text/plain'});
          res.end('<h1>404 file not found</h1>')
          
      }

      
    
    // fs.readFile(dir+path, (err, data) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     res.write(data);
    //     res.end();
    //   }
    // })
})
  .listen(PORT, "localhost", () => {
    console.log(`listening on port ${PORT}`);
  });

  const render =(res,file)=>{
    fs.readFile( dir+file,(err,data)=>{
      if (err){
        res.writeHead(404,{'content-type':'text/plain'});
        res.end('<h1>404 file not found</h1>')
      }else{
        res.writeHead(200,{'content-type':'text/plain'});
        res.end(data)
      }
    })
  }