import json
from flask import Flask, request, jsonify

app = Flask(__name__)

Item = [{
  "itemId": "123",
  "name": "test"
}]


@app.get("/")
def root():
  return '''
  <html><body>Your HTML text</body></html>
  '''

@app.route('/item/', methods=['GET'])
def get():
  return jsonify(Item)

@app.route('/item/{Id}', methods=['GET'])
def get_item():
  Id = request.args.get('Id')
  for item in Item:
    if ['Id'] == Item.itemId:
      return jsonify(item)
  return jsonify({'error': 'data not found'})



'''
@app.route('/items/', methods=['GET'])
def get():
  item = request.args.get('item')
  console.log (item)
  with open('/tmp/data.txt', 'r') as f:
    data = f.read()
    records = json.loads(data)
    for record in records:
      if record['item'] == item:
        return jsonify(item)
    return jsonify({'error': 'data not found'})

@app.route('/', methods=['PUT'])
def create():
  record = json.loads(request.data)
  with open('/tmp/data.txt', 'r') as f:
    data = f.read()
  if not data:
    records = [record]
  else:
    records = json.loads(data)
    records.append(record)
  with open('/tmp/data.txt', 'w') as f:
    f.write(json.dumps(records, indent=2))
  return jsonify(record)

@app.route('/item/', methods=['POST'])
def update_record():
    record = json.loads(request.data)
    new_records = []
    with open('/tmp/data.txt', 'r') as f:
        data = f.read()
        records = json.loads(data)
    for r in records:
        if r['name'] == record['name']:
            r['email'] = record['email']
        new_records.append(r)
    with open('/tmp/data.txt', 'w') as f:
        f.write(json.dumps(new_records, indent=2))
    return jsonify(record)
    
@app.route('/item/{itemId}/', methods=['DELETE'])
def delete():
    record = json.loads(request.data)
    new_records = []
    with open('/tmp/data.txt', 'r') as f:
        data = f.read()
        records = json.loads(data)
        for r in records:
            if r['name'] == record['name']:
                continue
            new_records.append(r)
    with open('/tmp/data.txt', 'w') as f:
        f.write(json.dumps(new_records, indent=2))
    return jsonify(record)

app.run()







@app.get("/item/{itemId}")
def read_item(item_id: int):
  return {Item.item_id,Item.name}

@app.post("/item/{itemId}")
def create_item(item: Item):
  return item

@app.delete("/item/{itemId}")
def delete_item()
'''