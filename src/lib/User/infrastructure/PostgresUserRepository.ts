import { Pool } from "pg"
import { UserRepository } from "../domain/Entities/User/repositories/UserRepository"
import { User } from "../domain/Entities/User/User"
import { UserId } from "../domain/Entities/User/value-objects/UserId"
import { UserName } from "../domain/Entities/User/value-objects/UserName"
import { UserEmail } from "../domain/Entities/User/value-objects/UserEmail"
import { UserCreatedAt } from "../domain/Entities/User/value-objects/UserCreatedAt"

type PostgresUser = {
  id: string
  name: string
  email: string
  created_at: Date
}

export class PostgresUserRepository implements UserRepository {
  client: Pool

  constructor(databaseUrl: string) {
    this.client = new Pool({
      connectionString: databaseUrl,
    })
  }

  async create(user: User): Promise<void> {
    const query = {
      text: `INSERT INTO users (id, name, email) VALUES ($1, $2, $3)`,
      values: [user.id.value, user.name.value, user.email.value],
    }

    await this.client.query(query)
  }

  async getAll(): Promise<User[]> {
    const query = {
      text: `SELECT * FROM users`,
    }
    const result = await this.client.query<PostgresUser>(query)
    return result.rows.map((row) => this.mapToUser(row))
  }

  async findById(id: UserId): Promise<User | null> {
    const query = {
      text: `SELECT * FROM users WHERE id = $1`,
      values: [id.value],
    }
    const result = await this.client.query<PostgresUser>(query)
    if (result.rows.length === 0) {
      return null
    }

    return this.mapToUser(result.rows[0]!)
  }

  async edit(user: User): Promise<void> {
    const query = {
      text: `UPDATE users SET name = $2, email = $3, created_at = $4 WHERE id = $1`,
      values: [
        user.id.value,
        user.name.value,
        user.email.value,
        user.createdAt.value,
      ],
    }
    await this.client.query(query)
  }

  async delete(id: UserId): Promise<void> {
    const query = {
      text: `DELETE FROM users WHERE id = $1`,
      values: [id.value],
    }
    await this.client.query(query)
  }

  private mapToUser(row: PostgresUser): User {
    return new User(
      new UserId(row.id),
      new UserName(row.name),
      new UserEmail(row.email),
      new UserCreatedAt(row.created_at)
    )
  }
}
