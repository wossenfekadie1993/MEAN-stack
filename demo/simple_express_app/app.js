const express = require("express");
const fs = require("fs");
const port = process.env.PORT | 3000;
const dir='./pages/';

const app = express();

app.get('/',(req,res)=>{
    render(res,'index.html');
})

app.get('/about',(req,res)=>{
    render(res,'about.html');
})
app.get('/contact',(req,res)=>{
    render(res,'contact.html');
})
app.listen(port, () => {
  console.log(`running on port of ${port}`);
});

const render = (res, file) => {
  fs.readFile(dir+file, (err, data) => {
    if (err) {
      console.log(eror);
      res.writeHead(404, { "content-type": "text/plain" });
      res.end("<h1>404 file not found</h1>");
    } else {
      res.writeHead(200, { "content-type": "text/plain" });
      res.end(data);
    }
  });
};
