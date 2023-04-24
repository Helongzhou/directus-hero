# Directus Example

This is a [Directus](https://directus.io) project bootstrapped with [`directus-project`](https://ezdoc.cn/docs/directus/self-hosted/quickstart)

Admin credentials for this Directus instance:

- **Email** — `admin@example.com`
- **Password** — `hero`

## 📌 Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/) (often included with newer Docker installations)

## 🚀 Getting Started

1. Clone this repo.

2. Start the docker container.

   ````
   安装extensions下面所有拓展,如
     ```shell
     cd endpoints/users
     npm run build
   ````

   ```shell
   npm init directus-project directus-hero
   ? Choose your database client SQLite
   ? Database File Path: <file-path>/directus-hero/data.db
   Create your first admin user:
   ? Email: admin@example.com
   ? Password: hero
   您的项目已创建于 <file-path>/directus-hero.
   配置可以在 <file-path>/directus-hero/.env
   npx directus start
   ```

✨ Server started at http://localhost:8055

3. You can login with the admin credentials shown above to explore this Directus example project.

4. Docker 常用命令行。
   容器生命周期管理：用于创建、启动、停止、删除等容器的操作，如 run, start, stop, rm 等。
   容器操作：用于查看和管理容器的状态、日志、进程等信息，如 ps, inspect, logs, top 等。

5. 创建扩展 Creating Extensions

```shell
npm install -g @directus/extensions-sdk
```
   自定义 API 端点 Custom API Endpoints
   ```shell
   cd extensions/endpoints
   directus-extension create endpoint hello-world
   ```
   change package.json
   "directus:extension": {
		...
		"path": "dist/index.js",
		...
	} to 
   "directus:extension": {
		...
		"path": "./index.js",
		...
	} 
   To start developing, run:
   ````shell
       cd hello-world
       npm run dev
        ```
   ````
   and then to build for production, run:
   ````shell
      npm run build
      ```
   ````

## 🔗 Links

- [Official Site](https://directus.io)
- [Documentation](https://docs.directus.io)
- [Directus Vue Components](https://github.com/directus/directus/wiki/app-components)
```

```
