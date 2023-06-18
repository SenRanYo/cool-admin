FROM node:lts-alpine
WORKDIR /build
# 设置npm镜像
RUN npm config set registry https://registry.npm.taobao.org
RUN npm i -g pnpm
COPY package.json /build/package.json
RUN pnpm i
COPY ./ /build
RUN pnpm run build

FROM nginx
RUN mkdir /app
COPY --from=0 /build/dist /app
COPY --from=0 /build/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 443