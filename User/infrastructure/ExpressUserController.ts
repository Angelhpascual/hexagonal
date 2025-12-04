import { Request, Response } from "express"
import { ServiceContainer } from "../../shared/infrastructure/ServiceContainer"
import { UserNotFoundError } from "../domain/UserNotFoundError"

export class ExpressUserController {
  async getAll(req: Request, res: Response) {
    const users = await ServiceContainer.user.getAll.execute()
    return res.json(users).status(200)
  }

  async findById(req: Request, res: Response) {
    try {
      const user = await ServiceContainer.user.findById.execute(req.params.id)
      return res.json(user).status(200)
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        return res.status(404).json({ error: error.message })
      }
      throw error
    }
  }

  async create(req: Request, res: Response) {
    const { id, name, email, createdAt } = req.body as {
      id: string
      name: string
      email: string
      createdAt: string
    }
    await ServiceContainer.user.create.execute(
      id,
      name,
      email,
      new Date(createdAt)
    )
    return res.status(201).json({ message: "User created" })
  }

  async edit(req: Request, res: Response) {
    const { id, name, email, createdAt } = req.body as {
      id: string
      name: string
      email: string
      createdAt: string
    }
    await ServiceContainer.user.edit.execute(
      id,
      name,
      email,
      new Date(createdAt)
    )
    return res.status(200).json({ message: "User edited" })
  }

  async delete(req: Request, res: Response) {
    await ServiceContainer.user.delete.execute(req.params.id)
    return res.status(200).json({ message: "User deleted" })
  }
}
