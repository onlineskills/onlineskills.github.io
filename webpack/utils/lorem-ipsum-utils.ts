import { LoremIpsum } from 'lorem-ipsum';

export default class LoremIpsumUtils {
  static create() {
    return new LoremIpsum({
      sentencesPerParagraph: {
        max: 8,
        min: 4,
      },
      wordsPerSentence: {
        max: 16,
        min: 4,
      },
    });
  }
}
