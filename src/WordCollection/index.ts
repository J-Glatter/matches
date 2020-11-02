class WordCollection {
  private readonly words;

  constructor(sentence) {
    if (typeof sentence !== "string") throw new Error("Sentence provided is not of type string")
    const collectionOfWords = {};

    sentence.split(" ").forEach((word) => {
      const currentWordCount = collectionOfWords[word]?.count || 0
      collectionOfWords[word] = {word, count: currentWordCount + 1};
    })

    this.words = collectionOfWords;
  }

  findTopOccurrencesWithSorting = (sortingMethod) => {
    const sortedWords = sortingMethod(Array.from(Object.values(this.words)), ({count}) => count);

    const topWordLength = sortedWords.length < 3 ? sortedWords.length : 3;
    return sortedWords.slice(0, topWordLength).map(({word}) => word)
  }
}

export default WordCollection;