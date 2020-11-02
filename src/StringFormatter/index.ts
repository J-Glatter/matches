class StringFormatter {
  constructor(private readonly formatMethod: (string: string) => string) {

  }

  format = (string) => {
    if(typeof string !== "string") throw new Error("Format argument must be of type string")
    return this.formatMethod(string)
  }
}

export default StringFormatter;