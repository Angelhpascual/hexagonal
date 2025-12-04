import { UserRepository } from "../../../domain/Entities/User/repositories/UserRepository"
import { UserId } from "../../../domain/Entities/User/value-objects/UserId"

export class UserDelete {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string): Promise<void> {
    return this.userRepository.delete(new UserId(id))
  }
}
