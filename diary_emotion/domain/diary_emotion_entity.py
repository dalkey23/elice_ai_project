from sqlalchemy import Column, BigInteger, Numeric, DateTime, Boolean
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()


class DiaryEmotion(Base):
    __tablename__: str = 'diary_emotions'

    id: Column = Column(BigInteger, primary_key=True)
    diary_id: Column = Column(BigInteger, nullable=False)
    emotion_score: Column = Column(Numeric(3, 2), nullable=False)
    created_at: Column = Column(DateTime, default=datetime.utcnow(), nullable=False)
    updated_at: Column = Column(DateTime, nullable=True)
    deleted_at: Column = Column(DateTime, nullable=True)
    is_deleted: Column = Column(Boolean, default=False, nullable=False)

    def __repr__(self) -> str:
        return f"<User(id='{self.id}', diary_id='{self.diary_id}', emotion_score='{self.emotion_score}', created_at='{self.created_at}', updated_at='{self.updated_at}', deleted_at='{self.deleted_at}', is_deleted='{self.is_deleted}'>"
