"""
Main module of the server file
"""

import config

# Create the application instance
connex_app = config.connex_app

# Read the swagger.yml file to configure the endpoints
connex_app.add_api("swagger.yml")


if __name__ == "__main__":
    connex_app.run(host="0.0.0.0", port=5000, debug=True)
