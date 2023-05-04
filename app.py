from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os

from diary_emotion.application.dto.request.analyze_request import AnalyzeRequest
from diary_emotion.application.model.emotion_analyzer import EmotionAnalyzer
from diary_emotion.application.service.diary_emotion_service import DiaryEmotionsService
from diary_emotion.domain.diary_emotion_dao import DiaryEmotionDao

app = Flask(__name__)

load_dotenv()

# DB 초기화
MYSQL_USER = os.getenv('MYSQL_USER')
MYSQL_PASSWORD = os.getenv('MYSQL_PASSWORD')
MYSQL_HOST = os.getenv('MYSQL_HOST')
MYSQL_DATABASE = os.getenv('MYSQL_DATABASE')

app.config['SQLALCHEMY_DATABASE_URI'] = f"mysql+pymysql://{MYSQL_USER}:{MYSQL_PASSWORD}@{MYSQL_HOST}/{MYSQL_DATABASE}"
db: SQLAlchemy = SQLAlchemy(app)

emotion_analyzer = EmotionAnalyzer()

diary_emotion_dao = DiaryEmotionDao(db)
diary_emotion_service = DiaryEmotionsService(diary_emotion_dao, emotion_analyzer, db)


@app.route('/')
def main() -> str:
    return 'hello, world!'

@app.route('/predict', methods=['POST'])
def predict():
    request_json = request.get_json()
    analyze_request = AnalyzeRequest.from_request(request_json)
    result = diary_emotion_service.create_analysis(analyze_request)
    return result

if __name__ == '__main__':
    app.run(port=8000)
