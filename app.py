from typing import Optional

from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os
import logging

from sqlalchemy import BigInteger

from diary.application.dto.response.read_diary_response import ReadDiaryResponse
from diary.application.service.diary_service import DiaryService
from diary.domain.diary_dao import DiaryDao
from diary_emotion.application.dto.request.analyze_request import AnalyzeRequest
from diary_emotion.application.model.emotion_analyzer import EmotionAnalyzer
from diary_emotion.application.service.diary_emotion_service import DiaryEmotionsService
from diary_emotion.domain.diary_emotion_dao import DiaryEmotionDao

from dataclasses import asdict

app = Flask(__name__)

load_dotenv()

# DB 초기화
MYSQL_USER = os.getenv('MYSQL_USER')
MYSQL_PASSWORD = os.getenv('MYSQL_PASSWORD')
MYSQL_HOST = os.getenv('MYSQL_HOST')
MYSQL_DATABASE = os.getenv('MYSQL_DATABASE')

app.config['SQLALCHEMY_DATABASE_URI'] = f"mysql+pymysql://{MYSQL_USER}:{MYSQL_PASSWORD}@{MYSQL_HOST}/{MYSQL_DATABASE}"
app.config['SQLALCHEMY_ECHO'] = True  # SQLAlchemy 로그를 출력합니다.
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True

# 로깅 설정
logging.basicConfig()
logging.getLogger('sqlalchemy.engine').setLevel(logging.INFO)

db: SQLAlchemy = SQLAlchemy(app)

emotion_analyzer = EmotionAnalyzer()

diary_emotion_dao = DiaryEmotionDao(db)
diary_emotion_service = DiaryEmotionsService(diary_emotion_dao, emotion_analyzer)

diary_dao = DiaryDao(db)
diary_service = DiaryService(diary_dao)


@app.route('/')
def main() -> str:
    return 'hello, world!'

@app.route('/predict', methods=['POST'])
def predict():
    request_json = request.get_json()
    analyze_request = AnalyzeRequest.from_request(request_json)
    result = diary_emotion_service.create_analysis(analyze_request)
    return result

@app.route('/diaries/<int:diary_id>', methods=['GET'])
def get_diary(diary_id: int):
    found_diary: Optional[ReadDiaryResponse] = diary_service.find_by_id(diary_id)
    return found_diary.to_json() if found_diary is not None else ''


if __name__ == '__main__':
    app.run(port=8000)
