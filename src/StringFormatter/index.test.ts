import StringFormatter from "./index";

describe("String Formatter", () => {
  it("formats a string based upon the format method given", () => {
    const stringFormatter = new StringFormatter((string) => string.toUpperCase());

    expect(stringFormatter.format("test")).toStrictEqual("TEST");
  })


  it("throws an error if arg is not of type string for format", () => {
    const stringFormatter = new StringFormatter((string) => string.toUpperCase());

    try {
      stringFormatter.format("test");
    } catch (e) {
      expect(e.message).toStrictEqual("Format argument must be of type string");
    }
  })
})