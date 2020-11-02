import WordCollection from "./WordCollection";

export const findHighestOccurrencesOfWordsIn = (sentence, formatter, sortingMethod, validator) => {
  if (validator.failsValidationFor(sentence)) return [];
  const words = new WordCollection(formatter.format(sentence))
  return words.findTopOccurrencesWithSorting(sortingMethod);
}