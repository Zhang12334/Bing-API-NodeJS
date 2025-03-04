const express = require('express');
const axios = require('axios');
const app = express();

// 3000 为服务启用的端口号, 可自行更改
// 3000 為服務啟用的端口號，可自行更改
// 3000 is the port number on which the service is running, can be changed as needed
const PORT = 3000;

async function getBingImages(n = 8) {
    const url = `https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=${n}&mkt=zh-CN`;
    try {
        const response = await axios.get(url);
        return response.data.images || [];
    } catch (error) {
        console.error('Bing API Error:', error.message);
        return [];
    }
}

// 通用处理函数
async function handleRequest(res, options) {
    const { days = 8, size = '1920x1080', redirect = false } = options;
    
    const images = await getBingImages(days);
    if (!images.length) return res.status(404).send('No image available');

    const image = days === 1 ? images[0] : images[Math.floor(Math.random() * images.length)];
    const imageUrl = `https://cn.bing.com${image.urlbase}_${size}.jpg`;

    redirect ? res.redirect(imageUrl) : res.type('jpg').send(await axios.get(imageUrl, { responseType: 'arraybuffer' }).then(r => r.data));
}

// 随机壁纸
app.get('/random_1366x768', (req, res) => handleRequest(res, { size: '1366x768' }));
app.get('/random_1920x1080', (req, res) => handleRequest(res, { size: '1920x1080' }));
app.get('/random_UHD', (req, res) => handleRequest(res, { size: 'UHD' }));

// 当日壁纸
app.get('/today_1366x768', (req, res) => handleRequest(res, { days: 1, size: '1366x768' }));
app.get('/today_1920x1080', (req, res) => handleRequest(res, { days: 1, size: '1920x1080' }));
app.get('/today_UHD', (req, res) => handleRequest(res, { days: 1, size: 'UHD' }));

// 302重定向版本
app.get('/random_302_:size', (req, res) => handleRequest(res, { redirect: true, size: req.params.size }));
app.get('/today_302_:size', (req, res) => handleRequest(res, { days: 1, redirect: true, size: req.params.size }));

// 启动服务
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
