FROM public.ecr.aws/x7d8b6z0/jitera-node-14.17-alpine

COPY . /app

WORKDIR /app

RUN yarn initial

RUN yarn build

EXPOSE 80
