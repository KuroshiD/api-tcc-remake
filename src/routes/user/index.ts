import { Router } from 'express'
import UserController from '../../controllers/users/'

const userRoutes = Router();

userRoutes.get('/users/getUsers', UserController.getUsers)



export default userRoutes