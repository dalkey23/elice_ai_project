from diary_emotion.domain.diary_emotion_dao import DiaryEmotionDao


class DiaryEmotionsService:
    def __init__(self, diary_emotion_dao: DiaryEmotionDao):
        self.diary_emotion_dao: DiaryEmotionDao = diary_emotion_dao
