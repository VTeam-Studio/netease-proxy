const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

// 代理所有 /api/* 路径的请求
app.use('/api/*', async (req, res) => {
    try {
        // 网易云完整请求地址（保持原路径）
        const targetUrl = 'https://music.163.com' + req.originalUrl;

        // 发起请求（带 headers）
        const response = await axios.get(targetUrl, {
            headers: {
                Referer: 'https://music.163.com/',
                'User-Agent': req.headers['user-agent'] || 'Mozilla/5.0',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            // 你可以加 timeout、cookies 等
        });

        // 返回网易云原始响应内容
        res.json(response.data);

    } catch (error) {
        console.error('Proxy error:', error.message);
        res.status(500).json({ error: 'Proxy request failed' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});
