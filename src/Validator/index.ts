class Validator {
  constructor(private readonly validator) {
  }

  public failsValidationFor = (sentence) => this.validator(sentence);
}

export default Validator;