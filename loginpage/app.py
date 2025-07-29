from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from frontend

# Dummy users data
users = {
    "9876543210": "1234",  # mobile: pin
    "9998887777": "0000"
}

@app.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()
    mobile = data.get("mobile")
    pin = data.get("pin")

    if users.get(mobile) == pin:
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"message": "Invalid mobile or pin"}), 401

if __name__ == "__main__":
    app.run(debug=True)
