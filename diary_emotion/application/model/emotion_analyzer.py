from transformers import AutoModelForSequenceClassification

import torch
from torch.nn.functional import softmax

from diary_emotion.application.model.tokenization_kobert import KoBertTokenizer


class EmotionAnalyzer:
    def __init__(self):
        self.ckpt_url = 'my_awesome_model/checkpoint-47000'
        self.model = AutoModelForSequenceClassification.from_pretrained(self.ckpt_url)
        self.tokenizer = KoBertTokenizer.from_pretrained('monologg/distilkobert')
        self.checkpoint = torch.load(self.ckpt_url + '/pytorch_model.bin', map_location=torch.device('cpu'))
        self.model.load_state_dict(self.checkpoint)

        self.id2label = self.model.config.id2label

    def predict(self, sentence):
        input_ids = self.tokenizer.encode(sentence, add_special_tokens=True, truncation=True, padding=True, return_tensors='pt')
        predict_result = self.model(input_ids)

        # 결과물 추출
        logits = predict_result.logits
        probabilities = softmax(logits, dim=1)
        predicted_label = probabilities.argmax().item()

        predicted_result = self.id2label[predicted_label]
        print(predicted_result)
        return predicted_result
