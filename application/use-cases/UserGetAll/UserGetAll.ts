import { UserRepository } from "../../../domain/Entities/User/repositories/UserRepository"
import { User } from "../../../domain/Entities/User/User"

export class UserGetAll {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    return this.userRepository.getAll()
  }
}
