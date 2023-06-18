
# Dockerfile
# 因为我们项目使用的是pnpm安装依赖，所以找了个支持pnpm的基础镜像，如果你们使用npm，这里可以替换成node镜像
# FROM nginx:alpine
FROM gplane/pnpm:8.4.0 as builder

# 设置工作目录
WORKDIR /data/web

# 这里有个细节，为了更好的使用node_modules缓存，我们先把这两个文件拷贝到镜像中，镜像会检测发现这两个文件没有变化，就不会去重新安装依赖了。
COPY pnpm-lock.yaml .
COPY package.json .

# 安装依赖，如果上面两个文件没有改动，就不会重现安装依赖。
RUN pnpm install

# 把当前仓库代码拷贝到镜像中
COPY . .
# 运行build命令，可以替换成 npm run build
RUN pnpm run build
# 上面我们把代码编译完成后，会在镜像里生成dist文件夹。

FROM nginx
RUN mkdir /app
COPY --from=0 /build/dist /app
COPY --from=0 /build/nginx.conf /etc/nginx/nginx.conf
# 设置工作目录
WORKDIR /data/web
# 在nginx镜像中创建 /app/www文件夹
RUN mkdir -p /app/www
# 把上一步编译出来dist文件夹拷贝到刚才新建的/app/www文件夹中
COPY --from=builder /data/web/dist /app/www

# 暴露 80端口和443端口，因为我们服务监听的端口就是80，443端口是为了支持https。
EXPOSE 80 
EXPOSE 443

