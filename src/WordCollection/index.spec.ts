import WordCollection from "./index";
import CollectionSorter from "../CollectionSorter";

describe("Word Collection", ()=> {
  it("finds the top three occurrences of words", () => {
    const collection = new WordCollection("a b c dd c dd dd dd c b");
    const topThree = collection.findTopOccurrencesWithSorting(new CollectionSorter().sortByDescendingOrder);

    expect(topThree).toStrictEqual(["dd", "c", "b"]);
  })

  it("finds the top occurrences of words when the results are less than 3", () => {
    const collection = new WordCollection("c dd c dd dd dd c");
    const topResults = collection.findTopOccurrencesWithSorting(new CollectionSorter().sortByDescendingOrder);

    expect(topResults.length).toBe(2);
    expect(topResults).toStrictEqual(["dd", "c"]);
  })

  it("throws an error if sentence provided is not of type string", () => {
    try {
      new WordCollection(123);
    } catch (e) {
      expect(e.message).toStrictEqual("Sentence provided is not of type string")
    }
  })
})