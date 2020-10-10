const shortid=require('shortid');
console.log(shortid.generate());
const fs=require(db.json);
const express=require('express');

const app=express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());




const PORT = process.env.PORT || 3001;
const app = express();


app.get('/', function(req,res){
res.send('');

});














app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });