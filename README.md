# Neease-proxy
网易会对外国API请求进行一些加密，使用国内机器进行绕过
** 本项目只能在国内才有效!!!**
可以适用于NAT机器 开放3000 或者转发3000就行。
## Ready for using
```
mkdir neease-proxy
cd neease-proxy
npm init -y
npm install express axios cors

```


## Run Development Env
```
node index.js
```

## Run Production Env
```
npm install -g pm2
pm2 start index.js
```
