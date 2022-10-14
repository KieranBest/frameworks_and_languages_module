//remember to "install npm express"

const express = require('express')
const app = express()
const port = 8000


const cors = require('cors')

const path = __dirname + '../client';
app.use(express.static(path))

app.use(cors());
app.use(express.json());
var corsOptions = {
    origin: "https://8000-kieranbest-frameworksan-rkxnupaltqd.ws-eu71.gitpod.io"
}
app.use(cors(corsOptions))

Items = {
    1: {
        "itemId": 1,
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
    res.sendFile(path + "vue.html")
    res.send('<html><body><h1>Your HTML text<h1></body></html>')
    res.status(200).json(req.body)
})

app.post('/item', (req,res) => {
    items.push(req.body)  
    res.status(201).json("Item created successfully")
})

app.get('/items', (req,res) => {
    //filteredItem = item.itemId, keywords, lat, lon, 
    //res.json(filteredItem)
    res.json(items)
    res.status(200).json(items)
})

app.get('/item/:itemId', (req,res) => {
    filteredItem = item.filter(element => element.itemId === parseFloat(req.params.itemId))
    if (filteredItem.length === 0){        
        res.status(404).json("Item not found")
    }
    else{        
        res.json(filteredItem)
        res.status(200).json("Successful Operation")
    }
})

app.delete('/item/:itemId', (req,res) => {
    filteredItem = item.filter(element => element.itemId === parseFloat(req.params.itemId))
    if (filteredItem.length === 0){        
        res.status(404).json("Item not found")
    }
    else{        
    items = items.filter(object => object.itemId !== parseFloat(req.params.itemId))
    res.status(204).json("Ok")
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

//Exit
process.on('SIGINT', function() {process.exit()})