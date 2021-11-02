from flask import Flask


app = Flask(__name__)

@app.route('/api', methods=["GET"])
def api():
    return { "users": 
        [
            { "userId":1,
                "title": "Flask React Application",
                "completed": False
            },
            {"userId":2,
            "title": "Flask-Server React-Front",
            "completed": True
            }
        ]
       
    }


if __name__ == ("__main__"):
    app.run(debug=True)