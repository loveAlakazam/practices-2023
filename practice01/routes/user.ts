import * as express from 'express'
import * as bcrypt from 'bcrypt'
import { isLoggedIn } from './middleware'
import User from '../models/user'

const router = express.Router()

router.get('/', isLoggedIn, (req, res) => {})
router.get('/', async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        userId: req.body.userId,
      },
    })

    if (exUser) {
      return res.status(403).send('이미 사용중인 아이디입니다.')
    }
  } catch (error) {
    console.error(error)
    next(error)
  }
})
