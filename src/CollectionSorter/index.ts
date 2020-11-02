class CollectionSorter {
  private descendingOrder = <T>(a: T, b: T) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  };

  public sortByDescendingOrder = <T, T2>(
    arr: T[],
    selector: (x: T) => T2,
    compare: (a: T2, b: T2) => number = this.descendingOrder
  ): T[] => {
    if(!Array.isArray(arr)) throw new Error("Collection to sort is not of type array")
    return arr.sort((a, b) => compare(selector(a), selector(b)));
  }
}

export default CollectionSorter;

