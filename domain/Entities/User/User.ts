import { UserId } from "./value-objects/UserId"
import { UserEmail } from "./value-objects/UserEmail"
import { UserName } from "./value-objects/UserName"

export class User {
  id: UserId
  name: UserName
  email: UserEmail
  createdAt: Date

  constructor(id: UserId, name: UserName, email: UserEmail, createdAt: Date) {
    this.id = id
    this.name = name
    this.email = email
    this.createdAt = createdAt
  }
  //Servicios de Dominio
  public nameAndEmail(): string {
    return `${this.name} <${this.email}>`
  }
}
