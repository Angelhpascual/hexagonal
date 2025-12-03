import { UserRepository } from "../../../domain/Entities/User/repositories/UserRepository"
import { User } from "../../../domain/Entities/User/User"
import { UserId } from "../../../domain/Entities/User/value-objects/UserId"
import { UserNotFoundError } from "../../../domain/UserNotFoundError"

export class UserFindById {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string): Promise<User> {
    const user = await this.userRepository.findById(new UserId(id))
    if (!user) {
      throw new UserNotFoundError()
    }
    return user
  }
}
