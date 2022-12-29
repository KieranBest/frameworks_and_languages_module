Technical Report
================

Server Framework Features
-------------------------

### Middleware 

Middleware functions handle the routing protocols by having access to request and response objects working between cycles. Middleware is executed after the server receives the request but before a response is sent. The request object represents the HTTP request and enables the use of parameters and query string from the url, whereas the response object is the returning data such as the requested data amd HTTP status code.

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

This enables us to handle requests and provide the necessary response. For example, return the HTTP status code followed by the specific Item requested by the parameter in the json format.

[Express.JS Middleware](https://expressjs.com/en/guide/using-middleware.html)

[Middleware in Express JS](https://www.geeksforgeeks.org/middleware-in-express-js/#:~:text=js%20is%20a%20routing%20and,controller%20actions%20send%20the%20response)

[Writing middleware for use in Express apps](https://expressjs.com/en/guide/writing-middleware.html)

### Routing

Routing is how the express framework handles responses to client requests. Routing is defined through methods of the Express app and handles `get()`, `post()` and `delete()` requests.

```javascript
app.get('/', function (req, res) {
    res.status(200).send('<html><body>Your HTML text</body></html>')
})
```
This enables the server the ability to wait for HTTP requests that match the specified routes then carry out its reponse, in this case, to return a HTML page displaying "Your HTML text".

[Express Routing](https://expressjs.com/en/guide/routing.html)

### Templates

A template engine allows the use of static templates for your application, popular templates include Pug, Mustache and EJS, however there are many others. At runtime a template engine replaces variables within the template with actual values, or run some programming logic, before transforming the template into HTML that is sent to the client.

For example, when using Pug, the input would be:
```
doctype html  
html  
    head  
        title A simple pug example  
    body  
        h1 This page is produced by pug template engine  
        p some paragraph here..   
```
The ouput
```html
<!DOCTYPE html>  
<html>  
  <head>  
    <title>A simple pug example</title>  
  </head>  
  <body>  
    <h1>This page is produced by pug template engine</h1>  
    <p>some paragraph here..</p>  
  </body>  
</html>  
```

Templates are used to speed up for the design of HTML pages by allowing us to create reusable components that can be used across other files. This stops duplication and makes implementing changes easier. 

[Using template engines with Express](https://expressjs.com/en/guide/using-template-engines.html)

[Developing template engines for Express](https://expressjs.com/en/advanced/developing-template-engines.html)

[Express.js Template Engine](https://www.javatpoint.com/expressjs-template)

[Top Express.js template engines for dynamic HTML pages](https://blog.logrocket.com/top-express-js-template-engines-for-dynamic-html-pages/)


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


### `Array Filter()`

The filter method enables us to search through an array and return the entry with the same value by creating a shallow copy.

``` Javascript
res.status(200).json(Object.values(Item).filter(obj => obj.user_id == req.query.user_id))
```
This enables us to easily search through a large dataset and find the specific entry without having to change the original array.

[Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

[Javascript Array filter()](https://www.w3schools.com/jsref/jsref_filter.asp)


Client Framework Features
-------------------------

### Form Input Bindings

`v-model` create a 2 way link that binds the value within a form to that of a value within our data properties. The 2 way link is very important as it enables us to access this and change if needed.

```html
<input id="middle-label" v-model="Item.user_id" name="user_id" type="text" placeholder="type your name in">
```
Using `v-model="Item.user_id"` allows the DOM input element access to create a new data input in the `Item.user_id` field. 
Without this we would need to manually connect the input text box with a event listener to automatically update the data input when a change occurs. 

[What you should know about Vue v-model](https://learnvue.co/tutorials/v-model-guide)

[Form Input Bindings](https://vuejs.org/guide/essentials/forms.html)

### List Rendering

`v-for` is used to render a list of items within an arrray. Much like that of JavaScripts `forEach()` method, it enables us to cycle through elements within an array and display in HTML.

```html
<li v-for="Item in Items">
     <div class="grid-container">
          <div class="grid-x grid-margin-x">
              <div class="medium-6 cell">
                  <div class="card">
                    <div class="card-divider">
                      <h4><span data-field="id">{{Item.user_id}}</span></h4>
                    </div>
                    <div class="card-section">
                      <img :src="Item.image">
                      <div class="card-section">
                        <dl>
                          <dt>Keywords: </dt>
                          <dd>{{Item.keywords}}</dd>
                          <dt>Description: </dt>
                          <dd>{{Item.description}}</dd>
                          <dt>Latitude: </dt>
                          <dd>{{Item.lat}}</dd>
                          <dt>Longitude: </dt>
                          <dd>{{Item.lon}}</dd>
                          <!--Individual delete button for each Item-->
                          <br><button class="button" @click="delete_item(Item.id)" data-action="delete">Delete</button>
```
In this code snippet `v-for` has been used to list through the array with the source of the array `Items` and then iterate through each of its elements `Item`. Without this every element would have to be manually declared through JavaScript, converted to HTML and given its own HTML tags.

[v-for](https://vuejs.org/guide/essentials/list.html#v-for)

### Interpolation

Using the mustache tag (`{{ }}`) the value of declared property from the corresponding component will be displayed. There are 4 types of interpolation that vue supports, these are:
- Text
- JavaScript Expressions
- Raw HTML
- Attributes

```html
 <li v-for="Item in Items">
        <div class="grid-container">
          <div class="grid-x grid-margin-x">
              <div class="medium-6 cell">
                  <div class="card">
                    <div class="card-divider">
                      <h4><span data-field="id">{{Item.user_id}}</span></h4>
                    </div>
                    <div class="card-section">
                      <img :src="Item.image">
                      <div class="card-section">
                        <dl>
                          <dt>Keywords: </dt>
                          <dd>{{Item.keywords}}</dd>
                          <dt>Description: </dt>
                          <dd>{{Item.description}}</dd>
                          <dt>Latitude: </dt>
                          <dd>{{Item.lat}}</dd>
                          <dt>Longitude: </dt>
                          <dd>{{Item.lon}}</dd>
```

In the above snippet we have already understood that `v-for` will display all Items in Item; using the mustache syntax, we are able to access and display each attribute within the Item. 

[Template Syntax](https://vuejs.org/guide/essentials/template-syntax.html)

[VueJs - Interpolations](https://dev.to/eligarlo/vuejs-interpolations-f3)


Client Language Features
------------------------

### `this`

The `this` keyword refers to a object that is dependent on how it is being called. It can't be set during execution and will be different each time called.

```javascript
   this.clearItem()
```

`this` can be used as a hidden parameter of a function and will change to suit its functions needs therefore can make retrieving an object for example, more simplistic and accessible. 

### `let`, `const` & `var`

`let` and `const` were released in the ES2015 update and are an alternative to `var`. Declaring a variable as `var` enables the user to access this variable publicly and enables them to be redeclared. However, declaring a variable using `let` or `const` means they are block scoped and bounded to where they are defined. It is more common to use `let` and `const` these days unless working in a browser pre-2015.
When choosing which keyword to use to declare a variable it must be considered that `const` variables cannot be changed once declared whereas `let` variables are changeable.

```javascript
const urlParams = new URLSearchParams(window.location.search);
```
The `urlParams` variable never needs to change once it is declared and is therefore declared as a `const`.

[JavaScript Variables](https://www.w3schools.com/js/js_variables.asp)

[Var, Let, and Const – What's the Difference?](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)


Critique of Server/Client prototype
---------------------

### Infinite Loop

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


`while True` creates a infinite loop that remains active and waiting for a request or response and cannot be stopped without forceful interference as there is no function to stop the loop. This could potentially result in a loss of data when forcefully stopped.

### HTTP Response Codes 

```python
RESPONSE_CODES = {
    200: 'OK',
    201: 'Created',
    204: 'No Content',
    301: 'Moved Permanently',
    304: 'Not Modified',
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    500: 'Internal Server Error',
    501: 'Not Implemented',
}
```
The list of HTTP response codes is incomplete and only contains 12 of 16 base codes therefore response handling could become problematic and cause crashes when receiving a response it is unfamiliar with. Containing these commmon HTTP codes may work in this use case, however it may not work in future use cases. The list is also modular and would be difficult to expand.

A few missing codes include:
- 100 Continue
- 101 Switching Protocols
- 202 Accepted
- 300 Multiple Choices
- 408 Request Timeout
- 500 Internal Server Error


The complete list of HTTP Codes which is much larger than the 12 we currently have access to can be found here.
[Complete list of HTTP codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)


Future Technology Suggestions
-----------------------------

### Serverless Architecture

A serverless architecture is a software design that enables third-party Backend as a Service (BaaS) services to host the application, reducing the need for a always-on server component. Choosing a serverless architecture reduces the cost both operational and scalability. Operational costs are reduced as you no longer need to manage the server, whether that be physical or virtual. Scalability costs are reduced because you no longer need to worry about how many concurrent requests you can handle, scaling is automatic and the more requests you receive, the more you pay. 
It also reduces latency as the server is being hosted globally as opposed to a specific location which in turn makes it 'greener'.

[Building Applications with Serverless Architectures](https://aws.amazon.com/lambda/serverless-architectures-learn-more/)

[Serverless Architecture](https://martinfowler.com/articles/serverless.html)

[Serverless Architecture](https://www.twilio.com/docs/glossary/what-is-serverless-architecture)


### NoSQL

NoSQL database is a non-relational data management system, it does not have a fixed schema and is therefore fully flexible in its horizontal scaling. NoSQL can also handle large volumes of data and is used by internet giants such as Google and Facebook. NoSQL allows multiple data models such as document-based, key value, column-based and grap-based. NoSQL provides easy replication, it can be accessed via multiple machines and will lead to eventual consistency across all machines. 

Even though NoSQL is fully scalable, doing so does require adding more hardware to the system and this can then become costly. NoSQL also contains limited query capabilities and is dependent on the database used as each has its own syntax for querying and managing data. 

[NoSQL Tutorial: What is, Types of NoSQL Databases & Example](https://www.guru99.com/nosql-tutorial.html)

[NoSQL (Not Only SQL database)](https://www.techtarget.com/searchdatamanagement/definition/NoSQL-Not-Only-SQL)


### GraphQL

GraphQL is an alternative to REST APIs, it was developed to cope with the need for more flexibility and efficiency in client-server communication. It does this by removing over- and underfetching that is created from GET requests by sending multiple requests for multiple pieces of data. Instead, only one request needs to be made, detailing all its needs. 

REST API structure the HTTP requests based on the data required by the client, but if the clients needs change, then the server must too. GraphQL does not need the server to change if the clients requirements change, clients are able to specify and retrieve their exact requirements without the server needing to be updated. 

GraphQL uses a type system to create a schema that predefines the capabilities of the API and acts as the contract between client queries and the server. 

REST API

<img src="https://user-images.githubusercontent.com/74361879/209963406-7f950bcc-5448-406f-aa46-bbf45e0360a9.png" width=500px>

GraphQL

<img src="https://user-images.githubusercontent.com/74361879/209963474-8bcfaf93-3a82-4bb1-a1de-a651be798851.png" width=500px>

[GraphQL is the better REST](https://www.howtographql.com/basics/1-graphql-is-the-better-rest/)

[What is GraphQL](https://www.redhat.com/en/topics/api/what-is-graphql)
