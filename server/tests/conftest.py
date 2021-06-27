import pytest
import connexion
import os

from flask_jwt_extended import JWTManager

abs_file_path = os.path.abspath(os.path.dirname(__file__))
flask_app = connexion.App(__name__,
                          specification_dir=os.path.join(abs_file_path, "../", "src"))
flask_app.add_api('swagger.yml')


@pytest.fixture(scope='module')
def client():
    with flask_app.app.test_client() as c:
        yield c


@pytest.fixture(scope='module')
def client_jwt():
    app = flask_app.app
    app.config["JWT_SECRET_KEY"] = "things we do for testing"
    _ = JWTManager(app)
    with flask_app.app.test_client() as c:
        yield c
