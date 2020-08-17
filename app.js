const express= require('express');
const https=require('https');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended: true}));



app.get('/',function(req,res){
res.send('page is ready for designing')

});






app.listen(3000,function(){
console.log('app is listening on port 3000')
});
