const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')
const path = require('path')

// Cors stuff
app.use(cors({
    methods: ['GET','POST','DELETE','OPTIONS']
}))

app.use(express.urlencoded({extended:false}))
app.use(express.json())

// Object of Items
Item = {}

// Get requests
app.get('/', function (req, res) {
    res.status(200).send('<html><body>Your HTML text</body></html>')
})
app.get('/items', (req,res) => {
    if (req.query.user_id) // If Item with matching user_id exists, will return all Items with matching user_id
    {
        res.status(200).json(Object.values(Item).filter(obj => obj.user_id == req.query.user_id))
        return;
    }
    res.status(200).json(Object.values(Item)) // Returns list of all items
})
// Returns the Item entry with the requested id
app.get('/item/:id', (req,res) => {
    if(Item[req.params.id] === undefined){ // If ID does not exist, returns "Item not found"
        res.status(404).json("Item not found")
    }
    else{ // If Item with matching ID exists, returns the Item
        res.status(200).json(Item[req.params.id])
    }
})

// Post request
app.post('/item', (req,res) => {
    const newItem = {
        id: maxValue(Object.keys(Item)),// Creates id value using function
        user_id: req.body.user_id,
        keywords: req.body.keywords,
        description: req.body.description,
        image: req.body.image,
        lat: req.body.lat,
        lon: req.body.lon,
        date_from: new Date().toJSON().slice(0,10),
        date_to: new Date().toJSON().slice(0,10)
    }
    if(!newItem.user_id || !newItem.keywords || !newItem.description){ // If user_id, keywords or description is left empty
        res.status(405).json("There is an empty field")   // Will return "There is an empty field"
    }else{ // If user_id, keywords or description is not empty will add the new Item 
        Item[newItem.id]=newItem
        res.status(201).json(Item[newItem.id])
    }
})
// Creates a value for the ID based on current ID's
function maxValue(idValue){
    let max = 0
    for(let item in idValue){
        if(idValue[item]>max){
            max=idValue[item]
        }
    }
    return parseInt(max)+1;
}

// Delete request
app.delete('/item/:id', (req,res) => {
    if (Object.keys(Item).includes(req.params.id)){ // If item includes requested ID, then delete
        res.status(204).json("Ok")
        delete(Item[req.params.id])
    }
    else{ // If no Items contain requested ID, return "Item not found"
            res.status(404).json("Item not found")
        }
})


// Listens on port 8000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

// Exit
process.on('SIGINT', function() {process.exit()})


// References
// https://github.com/calaldees/frameworks_and_languages_module
//https://learn.canterbury.ac.uk/ultra/courses/_19265_1/outline/lti/launchFrame?toolHref=https:~2F~2Flearn.canterbury.ac.uk~2Fwebapps~2Fblackboard~2Fexecute~2Fblti~2FlaunchPlacement%3Fblti_placement_id%3D_3_1%26content_id%3D_3348022_1%26course_id%3D_19265_1%26wrapped%3Dtrue%26from_ultra%3Dtrue
// https://stackoverflow.com/questions/6268679/how-to-get-the-key-of-a-key-value-javascript-object
// https://forum.freecodecamp.org/t/how-do-i-build-a-nested-object-in-javascript-dynamically/304543/4
// https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
// https://www.youtube.com/watch?v=Yq_WyV6lopk
// https://rowannicholls.github.io/python/advanced/dictionaries.html
// https://www.stechies.com/typeerror-int-object-is-not-subscriptable/?fbclid=IwAR1fBwu3xdi29EbaVPwwA2ylnrF4fMcFJdVKs58ZgrPrw22tBIbPYvqqREg
// https://medium.com/@anshurajlive/read-dictionary-data-or-convert-dictionary-into-an-array-of-objects-in-javascript-e9c52286d746
// https://dev.to/gathoni/express-req-params-req-query-and-req-body-4lpc
// https://github.com/Reem-313/frameworks_and_languages_module
// 