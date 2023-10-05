const fs =require('fs')

// reading file
// fs.readFile('./blog.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// writing file
// fs.writeFile('./blog1.txt','hello world',()=>{
//     console.log("the file already written")
// })


// function greeting(name){
//     console.log(`hello ${name} ,how are u doing`);
// }
// setTimeout(()=>{
//    const  name='wossen';
//     greeting(name);
//     clearInterval(int);
// },5000);


// const int=setInterval(()=>{
//     console.log("in 1 second interval")
// },1000)

// console.log(global);
// console.log(__dirname);
// console.log(__filename);


// making directory
if (!fs.existsSync('./asset')){
    fs.mkdir('./asset',(err)=>{
        if(err){
            console.log(err)
        }console.log('the dirctory is created')
    })
}else{
fs.rmdir('./asset',(err)=>{
    if (err){
        console.log(err)
    }
    console.log('the directory is removed')
})}