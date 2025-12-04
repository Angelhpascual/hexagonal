import { User } from "../User"
import { UserId } from "../value-objects/UserId"

export interface UserRepository {
  create(user: User): Promise<void>
  getAll(): Promise<User[]>
  findById(id: UserId): Promise<User | null>
  edit(user: User): Promise<void>
  delete(id: UserId): Promise<void>
}
