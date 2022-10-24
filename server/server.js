const express = require('express')
const app = express()
const port = 8000
app.use(express.json());
const { response } = require('express');

//Cors stuff
//const cors = require('cors');
//app.use(cors());
//var corsOptions = {
//    origin: "https://8000-kieranbest-frameworksan-rkxnupaltqd.ws-eu71.gitpod.io"}
//app.use(cors(corsOptions))

//Creating a link with the client
//const path = __dirname + '../client';
//app.use(express.static(path))

//Object of Items
Item = [{
    "id": 1,
    "user_id": "Sting",
    "keywords": ["String","another string"],
    "description": "string",
    "lat": 2,
    "lon": 1,
    "date_from": "2021-11-22T08:22:39.067408",
}]

//Functions to create automatic values 
function latitude(){
    var latitude = (Math.random() * (70*2)) - 70
    return latitude}
function longitude(){
    var longitude = (Math.random() * (180*2)) - 180
    return longitude}
function auto_Id(){
    var id = Item.length+1
    return id;}
function  new_date(){
    //https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
    let today = new Date().toISOString()
    return today;}

filteredItem = []

//Get requests
app.get('/', (req, res) => {
//    res.sendFile(path + "vue.html")
    res.status(200).send('<html><body><h1>Your HTML text<h1></body></html>')
})
app.get('/items', (req,res) => {
    res.status(200).json(Item)
})
app.get('/item/:id', (req,res) => {
    filteredItem = Item.filter(element => element.id === parseFloat(req.params.id))
    if (filteredItem.length === 0){        
        res.status(404).json("Item not found")
    }
    else{        
        res.status(200).json(filteredItem)
    }
})

//Post request
app.post('/item', (req,res) => {
    req.body={
        id:auto_Id(),
        user_id:req.body.user_id,
        keywords:req.body.keywords,
        description:req.body.description,
        lat:latitude(),
        lon:longitude(),
        date_from:new_date(),
    }
    console.log(latitude())
    console.log(longitude())

    Item.push(req.body)
    console.log(req.body)
    res.status(201).json(Item)
    console.log(Item)
})


//Delete request
app.delete('/item/:id', (req,res) => {
    filteredItem = Item.filter(element => element.id === parseInt(req.params.id))
    
    if (filteredItem.length === 0){        
        res.status(404).json("Item not found")
    }
    else{        
        res.status(204).json("Ok")
        Item = Item.filter(object => object.id !== parseFloat(req.params.id))
    }
})

//Listens on port 8000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

//Exit
process.on('SIGINT', function() {process.exit()})