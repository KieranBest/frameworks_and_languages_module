const express = require('express')
const app = express()
const port = 8000
app.use(express.json());
const { createApp } = app


//Cors stuff
const cors = require('cors')
app.use(cors({
    origin:'*'
}))
const whitelist = ['https://8000-kieranbest-frameworksan-rkxnupaltqd.ws-eu73.gitpod.io','https://8000-kieranbest-frameworksan-rkxnupaltqd.ws-eu73.gitpod.io/vue.html?name=&notes=']
const corsOptions={
    origin:(origin,callback)=>{
        if(whitelist.indexOf(origin) !== -1){
            callback(null,true)
        }else{
            callback(new Error())
        }
    }
}
app.use(cors({
    methods: ['GET','POST','DELETE']
}))

//Object of Items

Item = {
    /*
    0:{
        "user_id": "user1234",
        "keywords": ["hammer", "nails", "tools"],
        "description": "A hammer and nails set",
        "image": "https://www.placekitten.com/200/300",
        "lat": 1,
        "lon": 1,
        "date_from": "2021-11-22T08:22:39.067408",
        "date_to": "2021-11-22T08:22:39.067408"
    }
    */
}

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
    var today = new Date().toISOString()
    return today;}


//Get requests
app.get('/', (req, res) => {
//    res.sendFile(path + "vue.html")
    res.status(200).send('<html><body><h1>Your HTML text<h1></body></html>')
})
app.get('/items', (req,res) => {
    res.status(200).json(Object.values(Item))
})
app.get('/item/:id', (req,res) => {
    if(Item[Object.keys(req.params.id)] === undefined){
        res.status(404).json("Item not found")
    }
    else{
        res.status(200).json(Item[req.params.id])
    }
})

//foundKeys = Object.keys(associativeArray).filter(function(key) {
//    return associativeArray[key] == value;}}


//Post request
app.post('/item', (req,res) => {
    req.body.id=maxValue(Object.keys(Item))
    Item[req.body.id]=req.body
    res.status(201).json(Item[req.body.id])
})
function maxValue(idValue){
    let max = 0
    for(let item in idValue){
        if(idValue[item]>max){
            max=idValue[item]
        }
    }
    return parseInt(max)+1;
}

//Delete request
app.delete('/item/:id', (req,res) => {
    if (Item[Object.keys(req.params.id)] === undefined){
        res.status(404).json("Item not found")
    }
    else{        
        res.status(204).json("Ok")
        Item[Object.keys(req.params.id)].delete(Object.keys)
    }
})


//Listens on port 8000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

//Exit
process.on('SIGINT', function() {process.exit()})


/*
curl -v -X POST  http://localhost:8000/item -H "Content-Type: application/json" -d '{"user_id": "user1234", "keywords": [ "hammer", "nails", "tools"],   "description": "A hammer and nails set",  "image": "https://placekitten.com/200/300",   "lat": 51.2798438,"lon": 1.0830275 }'
curl -v -X GET http://localhost:8000/items
curl -v -X GET http://localhost:8000/item/0
curl -v -X DELETE  http://localhost:8000/item/1
curl -v -X OPTIONS http://localhost:8000/
*/

// req.params.id is a good feature https://www.geeksforgeeks.org/express-js-req-params-property/