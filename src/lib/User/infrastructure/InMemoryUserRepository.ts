import { UserRepository } from "../domain/Entities/User/repositories/UserRepository"
import { User } from "../domain/Entities/User/User"
import { UserId } from "../domain/Entities/User/value-objects/UserId"

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = []

  async create(user: User): Promise<void> {
    this.users.push(user)
  }

  async getAll(): Promise<User[]> {
    return this.users
  }

  async findById(id: UserId): Promise<User | null> {
    return this.users.find((user) => user.id.value === id.value) || null
  }

  async edit(user: User): Promise<void> {
    const index = this.users.findIndex((user) => user.id.value == user.id.value)
    this.users[index] = user
  }

  async delete(id: UserId): Promise<void> {
    this.users = this.users.filter((user) => user.id.value !== id.value)
  }
}
