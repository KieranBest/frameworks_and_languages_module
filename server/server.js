const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')
const path = require('path')

//const { createApp } = app

//app.use(express.static(path.join(__dirname, '/client')))

//Cors stuff
app.use(cors({
    //origin:'http://localhost:8001',
    methods: ['GET','POST','DELETE','OPTIONS']
}))

app.use(express.urlencoded({extended:false}))
app.use(express.json())

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

//Get requests
app.get('/', function (req, res) {
    res.status(200).send('<html><body>Your HTML text</body></html>')
})
app.get('/items', (req,res)=>{
    if (req.query.user_id)
    {
        res.status(200).json(Object.values(Item).filter(obj => obj.user_id == req.query.user_id))
        return;
    }
    res.status(200).json(Object.values(Item))
})
app.get('/item/:id', (req,res) => {
    if(Item[req.params.id] === undefined){
        res.status(404).json("Item not found")
    }
    else{
        res.status(200).json(Item[req.params.id])
    }
})

//Post request
app.post('/item', (req,res) => {
    const newItem = {
        id: maxValue(Object.keys(Item)),
        user_id: req.body.user_id,
        keywords: req.body.keywords,
        description: req.body.description,
        image: req.body.image,
        lat: latitude(),
        lon: longitude(),
        date_from: new Date().toJSON().slice(0,10),
        date_to: new Date().toJSON().slice(0,10)
    }
    if(!newItem.user_id || !newItem.keywords || !newItem.description){
        res.status(405).json("There is an empty field")
    }else{
        Item[newItem.id]=newItem
        res.status(201).json(Item[newItem.id])
    }
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
    if (Object.keys(Item).includes(req.params.id)){
        res.status(204).json("Ok")
        delete(Item[req.params.id])
    }
    else{        
            res.status(404).json("Item not found")
        }
})


//Listens on port 8000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

//Exit
process.on('SIGINT', function() {process.exit()})


// References
// https://stackoverflow.com/questions/6268679/how-to-get-the-key-of-a-key-value-javascript-object
// https://forum.freecodecamp.org/t/how-do-i-build-a-nested-object-in-javascript-dynamically/304543/4
// https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
// https://www.youtube.com/watch?v=Yq_WyV6lopk
// https://rowannicholls.github.io/python/advanced/dictionaries.html
// https://www.stechies.com/typeerror-int-object-is-not-subscriptable/?fbclid=IwAR1fBwu3xdi29EbaVPwwA2ylnrF4fMcFJdVKs58ZgrPrw22tBIbPYvqqREg
// https://medium.com/@anshurajlive/read-dictionary-data-or-convert-dictionary-into-an-array-of-objects-in-javascript-e9c52286d746
// https://dev.to/gathoni/express-req-params-req-query-and-req-body-4lpc


/*
curl -v -X POST  http://localhost:8000/item -H "Content-Type: application/json" -d '{"user_id": "user", "keywords": [ "hammer", "nails", "tools"],   "description": "A hammer and nails set",  "image": "https://placekitten.com/200/300",   "lat": 51.2798438,"lon": 1.0830275 }'
curl -v -X GET http://localhost:8000/items
curl -v -X GET http://localhost:8000/item/0
curl -v -X DELETE  http://localhost:8000/item/1
curl -v -X OPTIONS http://localhost:8000/
*/
