# """
# Complete the pytest tests below for https://jsonplaceholder.typicode.com/guide/
# Test the endpoints by:
# * making a request using the `requests library`
# * Assert/Check/Verify some aspect of the data you get back is correct to the spec/examples
# * use `breakpoint()` and `dir(response)` to debug the response object to get the `status` somehow
 
# Hints (Components you will need - these are not in order):
 
#     ITEM={"title": "foo", "body": "bar", "userId": "1"}
#     response = requests.post(ENDPOINT + 'posts', json=ITEM)
 
#     data = response.json()
 
#     response = requests.delete(ENDPOINT + '???/???')
 
#     assert data['id'] > 100
 
#     assert response.??? == 200
# """
# import requests
 
# ENDPOINT="https://jsonplaceholder.typicode.com/"
 
# def test_get_post_1():
#     data = response.json()
#     assert data['id'] == 1
#     assert response.status_code == 200
#     # Find out what the request should return with
#     # curl https://jsonplaceholder.typicode.com/posts/1
#     # Assert the right data is returned
 
# def test_create_post():
#     ITEM={"title": "foo", "body": "bar", "userId": "1"}
#     response = requests.post(ENDPOINT + 'posts', json=ITEM)
#     assert data['id'] > 100

#       # Post and item and assert the id created is greater than 100
 
# def test_delete_post_1():
#     pass  # remove me