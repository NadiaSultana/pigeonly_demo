from marshmallow import Schema, fields


class Info:
    def __init__(self, hostname, address, time, date):
        self.hostname = hostname
        self.address = address
        self.time = time
        self.date = date


class InfoSchema(Schema):
    hostname = fields.Str()
    address = fields.Str()
    time = fields.Str()
    date = fields.Str()


class SecretSchema(Schema):
    categories = fields.List(fields.String)
    created_at = fields.Str()
    icon_url = fields.Url()
    id = fields.Str()
    updated_at = fields.Str()
    url = fields.Str()
    value = fields.Str()


# TODO add marshmallow for login endpoint with expire and refresh token
