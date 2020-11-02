import Validator from "./index";

describe("Validator", () => {
  it("returns truthy for a failure if validation fails", () => {
    const validationMethod = (sentence) => typeof sentence !== "string";
    const validator = new Validator(validationMethod);

    expect(validator.failsValidationFor(1)).toBeTruthy();
  })

  it("returns falsy for a failure if validation passes", () => {
    const validationMethod = (sentence) => typeof sentence !== "string"

    const validator = new Validator(validationMethod);

    expect(validator.failsValidationFor("1")).toBeFalsy();
  })
})

