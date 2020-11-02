import {findHighestOccurrencesOfWordsIn} from "./task";
import StringFormatter from "./StringFormatter";
import CollectionSorter from "./CollectionSorter";
import Validator from "./Validator";

describe("Top Three Word Function", () => {

  const setup = () => {
    const methodToFormatSentence = (sentence: string) =>
      sentence
        .replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, "")
        .replace(/\s{2,}/g, " ")
        .toLowerCase();

    const methodToValidateWith = (sentence) => {
      const regExp = /[a-zA-Z]/g;
      return typeof sentence !== "string" || sentence.length === 0 || !regExp.test(sentence)
    }

    const formatter = new StringFormatter(methodToFormatSentence);
    const collectionSorter = new CollectionSorter();
    const validator = new Validator(methodToValidateWith)

    return {formatter, collectionSorter, validator}
  }

  it("finds the top three words", () => {
    const {formatter, collectionSorter, validator} = setup()
    const sentence = "a b c d dd c dd a c dd dd"

    expect(findHighestOccurrencesOfWordsIn(sentence, formatter, collectionSorter.sortByDescendingOrder, validator)).toStrictEqual(["dd", "c", "a"]);
  });

  it("returns an empty array if sentence contains no valid characters", () => {
    const {formatter, collectionSorter, validator} = setup()
    const sentence = "1 2 3 4 5 . , / ? '"

    expect(findHighestOccurrencesOfWordsIn(sentence, formatter, collectionSorter.sortByDescendingOrder, validator)).toStrictEqual([]);
  });

  it("returns an empty array if sentence is not a string", () => {
    const {formatter, collectionSorter, validator} = setup()
    const sentence = 12

    expect(findHighestOccurrencesOfWordsIn(sentence, formatter, collectionSorter.sortByDescendingOrder, validator)).toStrictEqual([]);
  });

  it("returns an empty array if sentence is an empty string", () => {
    const {formatter, collectionSorter, validator} = setup()
    const sentence = ""

    expect(findHighestOccurrencesOfWordsIn(sentence, formatter, collectionSorter.sortByDescendingOrder, validator)).toStrictEqual([]);
  })
})