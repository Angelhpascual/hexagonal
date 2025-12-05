import express, { NextFunction, Request, Response } from "express"
import { ExpressUserRouter } from "./lib/User/infrastructure/ExpressUserRouter"

const app = express()
app.use(express.json())

app.use(ExpressUserRouter)
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    console.log(err.stack)
    res.status(500).send(err.message)
  }
  console.log(err)
  res.status(500).send("Something broke!")
})

app.listen(3000, () => {
  console.log("Server running on port 3000 on http://localhost:3000")
})
