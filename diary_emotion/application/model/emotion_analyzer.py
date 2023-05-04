from transformers import AutoModelForSequenceClassification

import torch
from torch.nn.functional import softmax
from kss import split_sentences

from diary_emotion.application.model.tokenization_kobert import KoBertTokenizer


class EmotionAnalyzer:
    def __init__(self):
        # Model
        self.ckpt_url = 'my_awesome_model/checkpoint-47000'
        self.model = AutoModelForSequenceClassification.from_pretrained(self.ckpt_url)
        self.tokenizer = KoBertTokenizer.from_pretrained('monologg/distilkobert')
        self.checkpoint = torch.load(self.ckpt_url + '/pytorch_model.bin', map_location=torch.device('cpu'))
        self.model.load_state_dict(self.checkpoint)

        self.id2label = self.model.config.id2label

    # 문장 하나를 분석하여 라벨당 확률을 반환하는 메소드
    def predict(self, sentence) -> dict[str, float]:
        input_ids = self.tokenizer.encode(sentence, add_special_tokens=True, truncation=True, padding=True,
                                          return_tensors='pt')
        predict_result = self.model(input_ids)

        # 결과물 추출
        logits = predict_result.logits
        probabilities = softmax(logits, dim=1)

        probabilities: list[float] = probabilities.tolist()[0]

        return dict(zip(self.id2label.values(), probabilities))

    # 문장 여러개로 된 하나의 글을 분석하여 감정 분석 결과 dict를 리스트로 묶어 반환하는 메소드
    def analyze_paragragh(self, paragraph) -> list[dict[str, float]]:
        splited_paragraph: list[str] = split_sentences(paragraph)
        return list(map(lambda sentence: self.predict(sentence), splited_paragraph))
