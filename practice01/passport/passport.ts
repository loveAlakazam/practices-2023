import * as passport from 'passport'
import User from '../models/user'

export default () => {
  // 로그인 할때만 실행
  passport.serializeUser((user: User, done) => {
    done(null, user.id)
  })

  // 모든요청에서 한번 실행
  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await User.findOne({
        where: { id },
      })

      return done(null, user) // req.user
    } catch (error) {
      done(error)
    }
  })
  local()
}
