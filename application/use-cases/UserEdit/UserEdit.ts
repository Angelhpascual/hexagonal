import { UserRepository } from "../../../domain/Entities/User/repositories/UserRepository"
import { UserEmail } from "../../../domain/Entities/User/value-objects/UserEmail"
import { UserId } from "../../../domain/Entities/User/value-objects/UserId"
import { UserName } from "../../../domain/Entities/User/value-objects/UserName"
import { UserNotFoundError } from "../../../domain/UserNotFoundError"

export class UserEdit {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string, name: string, email: string): Promise<void> {
    const user = await this.userRepository.findById(new UserId(id))
    if (!user) {
      throw new UserNotFoundError()
    }
    user.name = new UserName(name)
    user.email = new UserEmail(email)
    await this.userRepository.edit(user)
  }
}
