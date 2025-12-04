import { Router } from "express"
import { ExpressUserController } from "./ExpressUserController"

const controller = new ExpressUserController()
const ExpressUserRouter = Router()

ExpressUserRouter.get("/", controller.getAll)
ExpressUserRouter.get("/:id/", controller.findById)
ExpressUserRouter.post("/user/", controller.create)
ExpressUserRouter.put("/user/", controller.edit)
ExpressUserRouter.delete("/user/", controller.delete)

export { ExpressUserRouter }
