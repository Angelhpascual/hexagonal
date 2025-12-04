export class UserId {
  value: string

  constructor(value: string) {
    this.value = value
    this.ensureIsValid()
  }

  //Modelado de Domio
  private ensureIsValid() {
    if (this.value.length < 5) {
      throw new Error("User id must have 5 characters")
    }
  }
}
