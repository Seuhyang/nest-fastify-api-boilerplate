<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
<p align="center" style="font-size: xxx-large">
  NestJS<br>
  Boilerplate Project
</p>

  <p align="center">NestJS Boilerplate Project</p>
    <p align="center">
<img src="https://img.shields.io/badge/nestjs-v9.4.2-e0234e" />
<img src="https://img.shields.io/badge/nodejs-v16.17.1-green" />
<img src="https://img.shields.io/badge/fastify-v9.4.1-white" />

## Installation

```bash
$ npm install
```

## Nestjs cli 명령어 모음

```bash
# apps 내 프로젝트 생성
$ nest g apps {app-name}

# 프로젝트 내 module 생성
$ nest g module {project-name} --no-spec(test 생성 여부)

# 프로젝트 내 controller 생성
$ nest g controller {project-name} --no-spec(test 생성 여부)

# 프로젝트 내 service 생성
$ nest g service {project-name} --no-spec(test 생성 여부)
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
