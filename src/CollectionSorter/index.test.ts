import CollectionSorter from "./index";

describe("Collection Sorter", () => {
  it("sorts a collection of numbers in descending order", () => {
    const arrayToSort = [3, 2, 4, 1];
    const sorter = new CollectionSorter();
    expect(sorter.sortByDescendingOrder(arrayToSort, (item) => item)).toStrictEqual([4, 3, 2, 1])
  })

  it("sorts a collection of objects in descending order by numeric value", () => {
    const arrayToSort = [{name: "a", count: 2}, {name: "b", count: 1}, {name: "c", count: 3},];
    const sorter = new CollectionSorter();
    expect(sorter.sortByDescendingOrder(arrayToSort, (item) => item.count)).toStrictEqual([
      {name: "c", count: 3}, {name: "a", count: 2}, {name: "b", count: 1}
    ])
  })

  it("sorts a collection of objects in descending order by alphabetic order", () => {
    const arrayToSort = [{name: "a", count: 2}, {name: "b", count: 1}, {name: "c", count: 3},];
    const sorter = new CollectionSorter();
    expect(sorter.sortByDescendingOrder(arrayToSort, (item) => item.name)).toStrictEqual([
      {name: "c", count: 3}, {name: "b", count: 1}, {name: "a", count: 2}
    ])
  })

  it("throws an error if collection is not of type Array", () => {
    const sorter = new CollectionSorter();

    try {
      // @ts-ignore
      sorter.sortByDescendingOrder("", (item) => item.name)
    } catch (e) {
      expect(e.message).toStrictEqual("Collection to sort is not of type array");
    }
  })
})