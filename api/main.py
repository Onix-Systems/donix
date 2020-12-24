import api
import json
from flask import Flask
from flask import request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)



@app.route('/')
def hello_world():
    return json.dumps(api.get_containers())

@app.route('/<id>', methods=['PUT'])
def start(id):
    if request.method == 'PUT':
        print('start')
        print(request.data)
        # api.start_container(id)
        return json.dumps({"test": "tre"})
    # return json.dumps(api.stop_container(id))

# # Press the green button in the gutter to run the script.
if __name__ == '__main__':
    app.run()
