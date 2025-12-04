import { UserRepository } from "../../../domain/Entities/User/repositories/UserRepository"
import { User } from "../../../domain/Entities/User/User"
import { UserId } from "../../../domain/Entities/User/value-objects/UserId"
import { UserName } from "../../../domain/Entities/User/value-objects/UserName"
import { UserEmail } from "../../../domain/Entities/User/value-objects/UserEmail"
import { UserCreatedAt } from "../../../domain/Entities/User/value-objects/UserCreatedAt"

export class UserCreate {
  constructor(private userRepository: UserRepository) {}

  async execute(
    id: string,
    name: string,
    email: string,
    createdAt: Date
  ): Promise<void> {
    const user = new User(
      new UserId(id),
      new UserName(name),
      new UserEmail(email),
      new UserCreatedAt(createdAt)
    )
    this.userRepository.create(user)
  }
}
