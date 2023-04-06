import * as express from 'express'
import helmet from 'helmet'
import * as hpp from 'hpp'
import * as dotenv from 'dotenv'
import * as morgan from 'morgan'
import * as cors from 'cors'
import * as cookieParser from 'cookie-parser'
import * as passport from 'passport'
import * as expressSession from 'express-session'
import { sequelize } from './models'

dotenv.config()
const app = express()
const prod: boolean = process.env.NODE_ENV === 'production'

app.set('port', prod ? process.env.PORT : 3000)
sequelize
  .sync({ force: false })
  .then(() => {
    // table 새로 만들거나 수정할땐 -> force: true
    // 배포할때는 force: true 로 하면 모든 데이터 다 날아감.
    console.log('데이터베이스 연결성공')
  })
  .catch((err) => {
    console.log(err)
  })

if (prod) {
  app.use(hpp())
  app.use(helmet())
  app.use(morgan('combined'))
  app.use(
    cors({
      origin: /nodebird\.com$/,
      credentials: true,
    })
  )
} else {
  app.use(morgan('dev'))
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  )
}
app.use('/', express.static('uploads'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false, // https -> true
      domain: prod ? '.nodebird.com' : undefined,
    },
    name: 'ek',
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res, next) => {
  res.send('start server')
})

app.listen(app.get('port'), () => {
  console.log(`server is run at ${app.get('port')}`)
})
