//remember to "install npm express"

const express = require('express')
const app = express()
const port = 8000

app.use(express.json());

item = [
    //{id: 1, name: }

filteredItem = []

app.get('/', (req, res) => {
    res.send('<html><body><h1>Your HTML text<h1></body></html>')
    res.status(200).json(req.body)
})

app.post('/item', (req,res) => {
    item.push(req.body)  
    res.status(201).json(req.body)
})

app.get('/item', (req,res) => {
    res.json(item)
    res.status(200).json(req.body)
})

app.get('/item/:id', (req,res) => {
    filteredItem = item.filter(element => element.id === parseFloat(req.params.id))
    if (filteredItem.length === 0){        
        res.status(404).json("Item Not Found")
    }
    else{        
        res.json(filteredItem)
        res.status(200).json(req.body)
    }
})

app.delete('/item/:id', (req,res) => {
    filteredItem = item.filter(element => element.id === parseFloat(req.params.id))
    if (filteredItem.length === 0){        
        res.status(404).json("Item Not Found")
    }
    else{        
    item = item.filter(object => object.id !== parseFloat(req.params.id))
    res.status(204).json()
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

//Exit
process.on('SIGINT', function() {process.exit()})