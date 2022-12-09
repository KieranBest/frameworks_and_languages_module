# Frameworks and Languages Module
## Kieran Best
## Programming Frameworks and Languages
## Digital Artefact
## MCOMD3PFL


## Requirements
The requirements for this application were to recreate the server and client implementations to enable Freecycle-Inc to have a working prototype of their proposed service. The application must be able to pass the automated cypress tests for the server and client and be able to handle such HTTP requests such as: 
- POST
- GET
- DELETE
- CORS

## Testing the application
### Server Testing
To test the server create 2 terminals and in one, run the server
```cd server```
```make build```
```make run```

In the othert, if not done before, install pytest within the test_server directory, then run pytest
```cd test_server```
```pip install requests pytest pytest-html``` (Optional)
```pytest```


### Client Testing
To test the client, with no ports open, run
```make test_client```

## Running the application
To run the application you need to start the server and client by creating 2 terminals, in one:
```cd server```
```make build```
```make run```

In the other:
```cd client```
```make build```
```make run```

Open the ports view and copy the 8001 port into a new terminal followed by ```?api=``` and then copy and paste the 8000 port to result in 
```https://8001-xxx-frameworksan-8jjcgwgsnel.ws-eu78.gitpod.io/?api=https://8000-xxx-frameworksan-8jjcgwgsnel.ws-eu78.gitpod.io```
with xxx being your github account.

## Evidence of Use

![image](https://user-images.githubusercontent.com/74361879/206766329-16a13627-1629-4e52-b557-9ab80830a478.png)
![image](https://user-images.githubusercontent.com/74361879/206767331-baeb93cd-6491-480f-b14a-890a0faadc18.png)
![image](https://user-images.githubusercontent.com/74361879/206767410-946e4367-c274-4efe-8ec0-b82f262a806b.png)
![image](https://user-images.githubusercontent.com/74361879/206767521-909574d7-2c1d-4172-a6c5-b3d01a40ae9d.png)
