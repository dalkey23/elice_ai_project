from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def main():
    return 'hello, world!'

if __name__ == '__main__':
    app.run()