from flask_jwt_extended import create_access_token


def test_api_info(client):
    """
    Test for success and data assertion
    """
    response = client.get('/api/info')
    assert response.status_code == 200
    assert b'address' in response.data
    assert b'date' in response.data
    assert b'hostname' in response.data
    assert b'time' in response.data


def test_api_login_page_unsupported(client):
    """
    Test for unsupported media type
    """
    response = client.post('/api/login',
                           data={
                               "password": "aa",
                               "username": "aa@aa.com"
                           })
    assert response.status_code == 415


def test_api_secret(client_jwt):
    """
    Test for secret
    """
    access_token = create_access_token('testuser')
    headers = {
        'Authorization': 'Bearer {}'.format(access_token)
    }
    response = client_jwt.get('/api/secret', headers=headers)
    assert response.status_code == 200
