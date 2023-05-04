class AnalyzeRequest:
    def __init__(self, diary_id: int, paragraph: str):
        self.diary_id: int = diary_id
        self.paragraph: str = paragraph

    @staticmethod
    def from_request(request_json) -> 'AnalyzeRequest':
        return AnalyzeRequest(request_json['diary_id'], request_json['sentence'])