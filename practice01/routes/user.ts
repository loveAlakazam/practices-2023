import * as express from 'express'
import * as bcrypt from 'bcrypt'
import { isLoggedIn } from './middleware'

const router = express.Router()
