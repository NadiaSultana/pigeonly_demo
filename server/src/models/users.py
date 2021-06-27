from datetime import datetime
from config import db, ma


class Users(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(32), index=True)
    password = db.Column(db.String(32))
    registered_on = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)


class UsersSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Users
        sqla_session = db.session