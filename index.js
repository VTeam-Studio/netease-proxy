const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/*', async (req, res) => {
  try {
    // 拼接网易云原始请求地址
    const targetUrl = 'https://music.163.com' + req.originalUrl;

    const response = await axios.get(targetUrl, {
      headers: {
        Referer: 'https://music.163.com/',
        'User-Agent': req.headers['user-agent'] || 'Mozilla/5.0',
      },
    });

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
