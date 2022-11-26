Technical Report
================

(intro)


Server Framework Features
-------------------------

### Middleware 

Middleware functions handle the routing protocols by having access to request and response objects working between the cycles. Middleware is executed after the server receives the request but before a response is sent. The request object represents the HTTP request and enables the use of parameters and query string from the url, whereas the response object is the returning data such as the requested data amd HTTP status code.

`req.query` contains a property for a query parameter and is defined in the route using a '?key=value'.

``` Javascript
app.get('/items', (req,res) => {
    if (req.query.user_id)
    {
        res.status(200).json(Object.values(Item).filter(obj => obj.user_id == req.query.user_id))
        return;
    }
    res.status(200).json(Object.values(Item))
})
```

`req.params` contains a property for a parameter defined by the route using '#'.

``` Javascript
app.get('/item/:id', (req,res) => {
    if(Item[req.params.id] === undefined){
        res.status(404).json("Item not found")
    }
    else{
        res.status(200).json(Item[req.params.id])
    }
})
```

This is beneficial because it enables us to execute any code based on the request data and allow changes to the request and response objects for example using .json to alter the return type and end the cycle.

[Express.JS Middleware](https://expressjs.com/en/guide/using-middleware.html)
[Middleware in Express JS](https://www.geeksforgeeks.org/middleware-in-express-js/#:~:text=js%20is%20a%20routing%20and,controller%20actions%20send%20the%20response)
[Writing middleware for use in Express apps](https://expressjs.com/en/guide/writing-middleware.html)

### (name of Feature 2)





(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


### (name of Feature 3)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


Server Language Features
-----------------------

### Standard Library

The standard library of JavaScript is small in comparison to most languages because of its usability. JavaScript is a lightweight, interpreted compiled programming language, it is most known for use creating dynamic and interactive web content, however it is also used for non-browser environments too. 

Some of its features include the:
 - Date Objects
        - Returns the current date and time with specificity down to the millisecond
``` Javascript
date_from: new Date().toJSON().slice(0,10),
```
 - Objects
``` Javascript
app.delete('/item/:id', (req,res) => {
    if (Object.keys(Item).includes(req.params.id)){
```

The Date object allows various outputs for the user to choose from such as milliseconds, minutes, hours, months, years, etc. giving the user full control of how detailed a time stamp is needed.

Object handling of 'key' and 'value' objects enable a dictionary like relationship allowing us to alter or locate either part of the object.


[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[Date Methods](https://www.w3schools.com/js/js_date_methods.asp)
[Objects](https://www.w3schools.com/js/js_objects.asp)


### Array Filter()

The filter method enables us to search through an array and return the entry with the same value by creating a shallow copy.

``` Javascript
res.status(200).json(Object.values(Item).filter(obj => obj.user_id == req.query.user_id))
```
This enables us to easily search through a large dataset and find the specific entry without having to change the original array.

[Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
[Javascript Array filter()](https://www.w3schools.com/jsref/jsref_filter.asp)


Client Framework Features
-------------------------

### (name of Feature 1)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


### (name of Feature 2)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


### (name of Feature 3)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


Client Language Features
------------------------

### `this`

The `this` keyword refers to a object that is dependent on how it is being called. It can't be set during execution and will be different each time called.

```javascript
   this.clearItem()
```

`this` can be used as a hidden parameter of a function and will change to suit its functions needs therefore can make retrieving an object for example, more simplistic and accessible. 

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)

### (name of Feature 2)

(Technical description of the feature - 40ish words - 1 mark)
(A code block snippet example demonstrating the feature - 1 mark)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words - 1 mark)
(Provide reference urls to your sources of information about the feature - required)


Critique of Server/Client prototype
---------------------

### While True

```python
while True:
            s.listen()
            try:
                conn, addr = s.accept()
            except KeyboardInterrupt as ex:
                break
            with conn:
                #log.debug(f'Connected by ')
                #while True:
                    data = conn.recv(65535)  # If the request does not come though in a single recv/packet then this server will fail and will not composit multiple TCP packets. Sometimes the head and the body are sent in sequential packets. This happens when the system switches task under load.
                    #if not data: break
                    try:
                        request = parse_request(data)
                    except InvalidHTTPRequest as ex:
                        log.exception("InvalidHTTPRequest")
                        continue
```


`while True` creates a infinite loop that cannot be stopped without forceful interference, it remains active and waiting for a request or response. 

(A code snippet example demonstrating the feature - 1 mark)
(Explain why this pattern is problematic - 40ish words 1 mark)

### (name of Issue 2)

(A code snippet example demonstrating the feature - 1 mark)
(Explain why this pattern is problematic - 40ish words 1 mark)


Future Technology Suggestions
-----------------------------

### (name of technology/feature 1)

(Description of a feature or tool - 40ish words - 1 mark)
(Why/benefits/problems with using this - 40ish words - 1 mark)
(Provide reference urls to your source of information about this technology - required)


### (name of technology/feature 2)

(Description of a feature or tool - 40ish words - 1 mark)
(Why/benefits/problems with using this - 40ish words - 1 mark)
(Provide reference urls to your source of information about this technology - required)


### (name of technology/feature 3)

(Description of a feature or tool - 40ish words - 1 mark)
(Why/benefits/problems with using this - 40ish words - 1 mark)
(Provide reference urls to your source of information about this technology - required)
