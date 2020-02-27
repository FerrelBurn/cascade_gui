const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {


    app.use('/peruse/', createProxyMiddleware({
        target: 'http://localhost:3005/',
        logLevel: 'debug',
        changeOrigin: true,
        pathRewrite:{"^/peruse": ""}
    }));
    app.use('/nifi/', createProxyMiddleware({
        target: 'http://localhost:8081/',
        logLevel: 'debug',
        changeOrigin: true,
        pathRewrite:{"^/nifi": ""}
    }));




}