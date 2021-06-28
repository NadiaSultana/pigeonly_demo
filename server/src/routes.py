import datetime as dt
import socket

import bcrypt
import requests
from flask import jsonify, request
from flask_jwt_extended import create_access_token, jwt_required
from marshmallow import ValidationError

from models.common import Info, InfoSchema, SecretSchema
from models.users import Users


def login():
    """
    This function responds to a request for /api/login

    :return: json format accesstoken, JWT token is valid user`
    """
    post_data = request.get_json()
    try:
        # fetch the user data
        user = Users.query.filter(Users.email == post_data.get('username')).one_or_none()
        # we could use marshmallow Schema load to validate the fields do some preload formatting.
        if user and bcrypt.checkpw(post_data.get('password').encode("utf-8"), user.password.encode("utf-8")):
            access_token = create_access_token(identity=post_data.get('username'))
            return jsonify(access_token=access_token)
        else:
            return jsonify({"msg": "Bad email or password"}), 401
    except Exception as e:
        print(e)  # TODO will add logger
        return jsonify({"msg": "Something went wrong"}), 500


@jwt_required()
def verify():
    """
    This function responds to a request for /api/verify

    :return: True if token is valid
    """
    return True, 200


@jwt_required()
def get_secret():
    """
    This function responds to a request for /api/secret

    :return: JSON format text
    """
    try:
        r = requests.get("https://api.chucknorris.io/jokes/random")
        try:
            secret_schema = SecretSchema()
            data = secret_schema.load(r.json())
        except ValidationError as err:
            print(err.messages)
            return jsonify(text="No Jokes chuck norris"), 422
        return jsonify(text=data.get("value")), 200
    except requests.exceptions.HTTPError as e:
        print(e.response.text)
        return jsonify(text="No Jokes chuck norris"), 404


def get_info():
    """
    This function responds to a request for /api/info

    :return: JSON
    """
    info = Info(hostname=socket.gethostname(), address=socket.gethostbyname(socket.gethostname()),
                time=dt.datetime.now().strftime("%H:%M:%S"),
                date=dt.date.today().strftime("%m/%d/%Y"))
    schema = InfoSchema()
    return schema.dump(info), 200
