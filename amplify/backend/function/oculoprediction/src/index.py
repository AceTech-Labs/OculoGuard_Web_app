from flask import Flask, request, jsonify
from flask_cors import CORS
import awsgi
import boto3
import tensorflow as tf

app = Flask(__name__)
CORS(app)

@app.route("/oculoprediction", methods=["GET"])
def say_myName():
   
    return jsonify(message="Say my name")



def handler(event, context):
  return awsgi.response(app, event, context)