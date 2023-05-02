from diary_emotion_entity import DiaryEmotion
from flask_sqlalchemy import SQLAlchemy


# Diary Emotion을 등록하는데 사용하는 dao 클래스
class DiaryEmotionDao:
    def __init__(self, db: SQLAlchemy):
        self.db: SQLAlchemy = db
