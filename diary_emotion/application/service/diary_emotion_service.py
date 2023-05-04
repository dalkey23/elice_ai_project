from diary_emotion.application.dto.request.analyze_request import AnalyzeRequest
from diary_emotion.application.model.emotion_analyzer import EmotionAnalyzer
from diary_emotion.domain.diary_emotion_dao import DiaryEmotionDao
from diary_emotion.domain.diary_emotion_entity import DiaryEmotion
from flask_sqlalchemy import SQLAlchemy


# 일기 감정 분석에 관한 비지니스 로직을 처리하는 클래스
class DiaryEmotionsService:
    diary_emotion_dao: DiaryEmotionDao
    emotion_analyzer: EmotionAnalyzer

    def __init__(self, diary_emotion_dao: DiaryEmotionDao, emotion_analyzer: EmotionAnalyzer):
        self.diary_emotion_dao: DiaryEmotionDao = diary_emotion_dao
        self.emotion_analyzer: EmotionAnalyzer = emotion_analyzer

    # 일기 감정 분석 요청을 받아서 분석 결과를 모두 db에 저장하는 메소드
    def create_analysis(self, analyze_request: AnalyzeRequest):
        summarized_result: dict[str, float] = self.emotion_analyzer.get_summarized_result(analyze_request.paragraph)

        for emotion, score in summarized_result.items():
            diary_emotion: DiaryEmotion = DiaryEmotion(diary_id=analyze_request.diary_id, emotion=emotion,
                                                       emotion_score=score)
            self.diary_emotion_dao.create(diary_emotion)

        return summarized_result
