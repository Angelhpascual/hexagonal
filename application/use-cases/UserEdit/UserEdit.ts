import { UserRepository } from "../../../domain/Entities/User/repositories/UserRepository"
import { User } from "../../../domain/Entities/User/User"
import { UserCreatedAt } from "../../../domain/Entities/User/value-objects/UserCreatedAt"
import { UserEmail } from "../../../domain/Entities/User/value-objects/UserEmail"
import { UserId } from "../../../domain/Entities/User/value-objects/UserId"
import { UserName } from "../../../domain/Entities/User/value-objects/UserName"

export class UserEdit {
  constructor(private readonly userRepository: UserRepository) {}

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
    return this.userRepository.edit(user)
  }
}
