export interface BluemixService {
  name: string;
  authLink: string;
}

export const SETTINGS = Object.freeze({
  services: <BluemixService[]>[
    { name: 'conversation', authLink: 'https://gateway.watsonplatform.net/conversation/api/v1' },
    { name: 'discovery', authLink: 'https://gateway.watsonplatform.net/discovery/api/v1' },
    { name: 'document-conversion', authLink: 'https://gateway.watsonplatform.net/document-conversion/api/v1' },
    { name: 'language-translator', authLink: 'https://gateway.watsonplatform.net/language-translator/api' },
    { name: 'natural-language-classifier', authLink: 'https://gateway.watsonplatform.net/natural-language-classifier/api' },
    { name: 'natural-language-understanding', authLink: 'https://gateway.watsonplatform.net/natural-language-understanding/api/v1' },
    { name: 'personality-insights', authLink: 'https://gateway.watsonplatform.net/personality-insights/api' },
    { name: 'retrieve-and-rank', authLink: 'https://gateway.watsonplatform.net/retrieve-and-rank/api' },
    { name: 'speech-to-text', authLink: 'https://stream.watsonplatform.net/speech-to-text/api' },
    { name: 'text-to-speech', authLink: 'https://stream.watsonplatform.net/text-to-speech/api' },
    { name: 'tone-analyzer', authLink: 'https://gateway.watsonplatform.net/tone-analyzer/api/v3' },
    { name: 'tradeoff-analytics', authLink: 'https://gateway.watsonplatform.net/tradeoff-analytics/api' },
    { name: 'visual-recognition', authLink: 'https://gateway-a.watsonplatform.net/visual-recognition/api' },
  ],
});
