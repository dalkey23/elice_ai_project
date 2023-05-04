class AnalyzeRequest:
    def __init__(self, sentence):
        self.sentence = sentence

    @staticmethod
    def from_request(request_json) -> 'AnalyzeRequest':
        return AnalyzeRequest(request_json['sentence'])