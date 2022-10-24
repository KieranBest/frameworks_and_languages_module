const express = require('express')
const app = express()
const port = 8000


const cors = require('cors');
const { response } = require('express');

//const path = __dirname + '../client';
//app.use(express.static(path))

app.use(cors());
app.use(express.json());

//var corsOptions = {
//    origin: "https://8000-kieranbest-frameworksan-rkxnupaltqd.ws-eu71.gitpod.io"}
//app.use(cors(corsOptions))

Item = [{
    "id": 1,
    "user_id": "Sting",
    "keywords": "String",
    "description": "string",
    "lat": 2,
    "lon": 1,
    "date_from": "2021-11-22T08:22:39.067408",
}]


function latitude(){(Math.random() * (70*2)) - 70}
function longitude(){(Math.random() * (180*2)) - 180}
var auto_id=1;

function auto_Id(){
    var id = auto_id++;
    return id;
}

function  iso_date(){
    //https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
    let today = new Date().toISOString().slice(0, 10)
    return today;
}

filteredItem = []

app.get('/', (req, res) => {
//    res.sendFile(path + "vue.html")
    res.status(200).send('<html><body><h1>Your HTML text<h1></body></html>')
})

app.post('/item', (req,res) => {
    req.body={
        id:auto_Id(),
        user_id:req.body.user_id,
        keywords:req.body.keywords,
        description:req.body.description,
    
        
    }
    Item.push(req.body)
    res.status(201).json(Item)
    
})

app.get('/items', (req,res) => {
    for (i=0;Item.length;i++){
        filteredItem = Item.itemId[i], Item.keywords[i]
        console.log(filteredItem)
    }
    //res.json(filteredItem)
    //Item = Item.slice(1,2,3)
    res.status(200).json(Item)
})

app.get('/item/:id', (req,res) => {
    filteredItem = Item.filter(element => element.id === parseFloat(req.params.id))
    if (filteredItem.length === 0){        
        res.status(404).json("Item not found")
    }
    else{        
        res.json(filteredItem)
        res.status(200).json("Successful Operation")
    }
})

app.delete('/item/:id', (req,res) => {
    filteredItem = Item.filter(element => element.id === parseFloat(req.params.id))
    
    if (filteredItem.length === 0){        
        res.status(404).json("Item not found")
    }
    else{        
        res.status(204).json("Ok")
        Item = Item.filter(object => object.id !== parseFloat(req.params.id))
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

//Exit
process.on('SIGINT', function() {process.exit()})