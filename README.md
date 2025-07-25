

# Neease-proxy

网易云音乐对国外API请求有加密限制，导致国外服务器直接访问失败。本项目通过国内机器做代理请求，绕过限制，适合在国内服务器部署使用。

**注意：本项目只能在国内机器上有效！**

可以用在NAT环境，只要开放或转发3000端口即可。

---

## 环境准备

```bash
mkdir neease-proxy
cd neease-proxy
npm init -y
npm install express axios cors
```

如果你用的是Express 4稳定版本（推荐）：


```bash
npm uninstall express
npm install express@4.18.2
···

---

## 启动开发环境

```bash
node index.js
```

---

## 启动生产环境（推荐使用 pm2 管理进程）

```bash
npm install -g pm2
pm2 start index.js --name neease-proxy
pm2 status
pm2 logs neease-proxy
```

---

## 使用说明

启动服务后，默认监听3000端口。

请求网易云API时，将请求路径改为代理地址，示例：

```
http://你的服务器IP:3000/api/search/get/web?hlposttag=&s=你好&type=1&offset=0&total=true&limit=20
```

代理会自动转发请求到网易云服务器，并返回数据。

---

## 注意事项

* 确保服务器防火墙或安全组放通3000端口；
* 代理服务器网络环境必须能正常访问 `music.163.com`；
* 只支持 GET 请求转发，如需支持 POST 需要额外改造；
* 如果遇到路由解析错误，确保使用的是 Express 4.x 稳定版本。

---

欢迎反馈问题和建议！

