FROM node:lts-alpine

WORKDIR /build
COPY package.json /build/
RUN npm install
COPY . /build
RUN npm run build

FROM nginx
COPY --from=0 /build/dist /app
COPY --from=0 /build/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
