from sqlalchemy import Column, BigInteger, Numeric, DateTime, Boolean, String
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()


# 일기 감정 분석 테이블에 대응하는 entity class
class DiaryEmotion(Base):
    __tablename__: str = 'diary_emotions'

    id: Column = Column(BigInteger, primary_key=True, autoincrement=True)
    diary_id: Column = Column(BigInteger, nullable=False)
    emotion: Column = Column(String, nullable=False)
    emotion_score: Column = Column(Numeric(4, 2), nullable=False)
    created_at = Column(DateTime, nullable=False, default=datetime.utcnow())
    updated_at = Column(DateTime, default=None)
    deleted_at = Column(DateTime, default=None)
    is_deleted = Column(Boolean, nullable=False, default=False)

    def __repr__(self) -> str:
        return f"<User(id='{self.id}', diary_id='{self.diary_id}', emotion='{self.emotion}', emotion_score='{self.emotion_score}', created_at='{self.created_at}', updated_at='{self.updated_at}', deleted_at='{self.deleted_at}', is_deleted='{self.is_deleted}'>"
