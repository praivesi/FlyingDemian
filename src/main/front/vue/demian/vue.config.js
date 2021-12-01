const path = require("path");

module.exports = {
    outputDir: path.resolve(__dirname, "../../../resources/static"),
    // outputDir: '../../../resources/static',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:9000',
                ws: true,
                changeOrigin: true,
            }
        }
    }
}