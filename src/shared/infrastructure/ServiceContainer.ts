import { UserGetAll } from "../../lib/User/application/use-cases/UserGetAll/UserGetAll"
import { InMemoryUserRepository } from "../../lib/User/infrastructure/InMemoryUserRepository"
import { UserCreate } from "../../lib/User/application/use-cases/UserCreate/UserCreate"
import { UserEdit } from "../../lib/User/application/use-cases/UserEdit/UserEdit"
import { UserDelete } from "../../lib/User/application/use-cases/UserDelete/UserDelete"
import { UserFindById } from "../../lib/User/application/use-cases/UserFindById/UserFindById"

const userRepository = new InMemoryUserRepository()
export const ServiceContainer = {
  user: {
    getAll: new UserGetAll(userRepository),
    create: new UserCreate(userRepository),
    edit: new UserEdit(userRepository),
    delete: new UserDelete(userRepository),
    findById: new UserFindById(userRepository),
  },
}
