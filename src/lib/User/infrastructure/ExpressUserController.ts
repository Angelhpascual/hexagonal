import { NextFunction, Request, Response } from "express"
import { ServiceContainer } from "../../../../shared/infrastructure/ServiceContainer"
import { User } from "../domain/Entities/User/User"

export class ExpressUserController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await ServiceContainer.user.getAll.execute()
      return res
        .json(users.map((user: User) => user.mapToPrimitives()))
        .status(200)
    } catch (error) {
      next(error)
    }
  }

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await ServiceContainer.user.findById.execute(req.params.id)
      return res.json(user.mapToPrimitives()).status(200)
    } catch (error) {
      next(error)
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
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
    } catch (error) {
      next(error)
    }
  }

  async edit(req: Request, res: Response, next: NextFunction) {
    try {
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
    } catch (error) {
      next(error)
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await ServiceContainer.user.delete.execute(req.params.id)
      return res.status(200).json({ message: "User deleted" })
    } catch (error) {
      next(error)
    }
  }
}
