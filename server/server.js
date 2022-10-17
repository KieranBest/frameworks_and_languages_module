const express = require('express')
const app = express()
const port = 8000


const cors = require('cors')

//const path = __dirname + '../client';
//app.use(express.static(path))

app.use(cors());
app.use(express.json());
var corsOptions = {
    origin: "https://8000-kieranbest-frameworksan-rkxnupaltqd.ws-eu71.gitpod.io"
}
app.use(cors(corsOptions))

Item = []

{
    1: {
        "id": 1,
        "user_id": "user1234",
        "keywords": ["hammer", "nails", "tools"],
        "description": "A hammer and nails set",
        "lat": 1,
        "lon": 1,
        "date_from": "2021-11-22T08:22:39.067408",
    }
}
//NEXT_ID = max(ITEMS.keys()) + 1
filteredItem = []

app.get('/', (req, res) => {
//    res.sendFile(path + "vue.html")
    res.send('<html><body><h1>Your HTML text<h1></body></html>')
    res.status(200).json(req.body)
})

app.post('/item', (req,res) => {
    if(object.keys(res.body).sort().tostring() !== "user_id,keywords,description,image,log,lat"){
        return res.status(405).json()
    }
    Item.push(req.body)  
    res.status(201).json("Item created successfully")
})

app.get('/items', (req,res) => {
    //filteredItem = item.itemId, keywords, lat, lon, 
    //res.json(filteredItem)
    res.json(Item)
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