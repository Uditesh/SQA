const { resolve } = require('path')

// Just make sure you reference your html files correctly
// if your page is called `q_a.html` or whatever, just changes
// the reference here
module.exports = {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                qa: resolve(__dirname, 'views/qa.html'),
                security: resolve(__dirname, 'views/security.html'),
                bad: resolve(__dirname, 'views/badexample.html')
            }
        }
    }
}