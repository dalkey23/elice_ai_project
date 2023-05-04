from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os

from diary_emotion.application.dto.request.analyze_request import AnalyzeRequest
from diary_emotion.application.model.emotion_analyzer import EmotionAnalyzer

app = Flask(__name__)

load_dotenv()

# DB 초기화
MYSQL_USER = os.getenv('MYSQL_USER')
MYSQL_PASSWORD = os.getenv('MYSQL_PASSWORD')
MYSQL_HOST = os.getenv('MYSQL_HOST')
MYSQL_DATABASE = os.getenv('MYSQL_DATABASE')

app.config['SQLALCHEMY_DATABASE_URI'] = f"mysql+pymysql://{MYSQL_USER}:{MYSQL_PASSWORD}@{MYSQL_HOST}/{MYSQL_DATABASE}"
db: SQLAlchemy = SQLAlchemy(app)


@app.route('/')
def main() -> str:
    return 'hello, world!'

@app.route('/predict', methods=['POST'])
def predict():
    request_json = request.get_json()
    analyze_request = AnalyzeRequest.from_request(request_json)
    emotion_analyzer = EmotionAnalyzer()
    return emotion_analyzer.analyze_paragragh(analyze_request.sentence)

if __name__ == '__main__':
    app.run(port=8000)
