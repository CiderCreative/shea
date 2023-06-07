**Deploy to Google Cloud**

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run)

**Commands**


to build: COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build

to run local: docker compose up

(I came accross an issue where NestJS needed build first, to do that you just "npm run build")
