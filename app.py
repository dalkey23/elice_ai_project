from typing import Optional

import boto3
from botocore.client import BaseClient
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os
import logging

from diary.application.service.diary_service import DiaryService
from diary.domain.diary_dao import DiaryDao
from diary.presentation.consumer.diary_consumer import DiaryConsumer
from diary.presentation.controller.diary_controller import DiaryController
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
app.config['SQLALCHEMY_ECHO'] = True
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True

# AWS SQS 설정
aws_access_key_id = os.getenv('AWS_SQS_ACCESS_KEY_ID')
aws_secret_access_key = os.getenv('AWS_SQS_SECRET_KEY_ID')
region_name = os.getenv('AWS_REGION')

sqs: BaseClient = boto3.client('sqs', aws_access_key_id=aws_access_key_id, aws_secret_access_key=aws_secret_access_key,
                               region_name=region_name)

# 로깅 설정
logging.basicConfig()
logging.getLogger('sqlalchemy.engine').setLevel(logging.INFO)

# App 설정
db: SQLAlchemy = SQLAlchemy(app)

# diary_emotion
emotion_analyzer = EmotionAnalyzer()
diary_emotion_dao = DiaryEmotionDao(db)
diary_emotion_service = DiaryEmotionsService(diary_emotion_dao, emotion_analyzer)

# diary
diary_dao: DiaryDao = DiaryDao(db)
diary_service: DiaryService = DiaryService(diary_dao)
diary_consumer: DiaryConsumer = DiaryConsumer(diary_service, diary_emotion_service, sqs)
diary_controller: DiaryController = DiaryController(diary_service, diary_consumer)

# app route 설정
app.register_blueprint(diary_controller.bp, url_prefix='/diaries')


@app.route('/health')
def main() -> str:
    return 'Healthy'


# Run
if __name__ == '__main__':
    app.run(port=8000)
