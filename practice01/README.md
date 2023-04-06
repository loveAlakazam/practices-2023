# 시작

```
$ npm init
```

<br>

# typescript 관련 모듈 설치

```
$ npm i typescript

$ npm i @types/node
```

<br>

# 유의 사항

`export default` -> `import as {alias} from '{module name}'`

`export default` 가 없으면 -> `import * as {alias} from '{module name}'`

<br>

# ts-node

```
$ npm i -D ts-node
```

- ts-node 로 ts -> js 로 변환하여 node환경에서 실행

- 실제로 node는 ts를 실행할 수 없음.

# Nodemon

```
$ npm i -D nodemon
```

# 실행하기

```
$ npx ts-node index.ts
```

# npx

- npx 는 global 설치 없이 실행할 수 있다.
- `package.json` 에 기록이 될 수 있다.

```
$ npx ts-node index.ts
```

# tsc

- ts-node 는 배포로는 무리. 성능에서 안좋음
- ts -> js 로 변경
- 실제 배포할때는 js 를 배포

```
$ npx tsc
```

<br>

```
$ npx tsc --traceResolution
```

- node_modules 안에서 typesVersions 가 있는지를 찾아준다.
  - `*.ts`, `*.d.ts` , `*.tsx`

<br>

# babel

- 최신 문법으로 적용하여
- 배포할때는 js로 변환시켜야한다.

# 미들웨어 설치

```
$  npm i morgan cors cookie-parser express-session dotenv passport

$ npm i hpp helmet
```

- `@types/xxx` 을 설치
  - 대부분 모듈들이 types를 지원하지 않기때문이다.

```
$  npm i @types/morgan @types/cors @types/cookie-parser @types/express-session @types/dotenv @types/passport

$ npm i @types/hpp @types/helmet
```

```
$ npm i passport-local bcrypt-nodejs
$ npm i @types/passport-local @types/bcrypt
```

# nvm 사용

```
$ nvm use v16.20.0
```

# sequelize

- orm 으로 표현하기 어려운 쿼리만 raw-query 사용하는걸 추천
- sequelize: node ver16.20.0 까지는 지원
- `sequelize init` 까지 셋팅하면 알아서 config디렉토리와 seeders 가 생김.

```
# sequelize

$ npm i sequelize mysql2

$ npm i sequelize-cli


# sequelize-cli : sequelize 명령어
$ npx sequelize init
$ sequelize

```

#

```

```
