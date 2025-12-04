import { UserId } from "./value-objects/UserId"
import { UserEmail } from "./value-objects/UserEmail"
import { UserName } from "./value-objects/UserName"
import { UserCreatedAt } from "./value-objects/UserCreatedAt"

export class User {
  id: UserId
  name: UserName
  email: UserEmail
  createdAt: UserCreatedAt

  constructor(
    id: UserId,
    name: UserName,
    email: UserEmail,
    createdAt: UserCreatedAt
  ) {
    this.id = id
    this.name = name
    this.email = email
    this.createdAt = createdAt
  }
  //Servicios de Dominio
  public nameAndEmail(): string {
    return `${this.name.value} <${this.email.value}>`
  }
}
