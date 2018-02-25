const { resolve } = require('path')

module.exports = async function module(moduleOptions) {
    const options = Object.assign({}, moduleOptions)

    this.addPlugin({
        src: resolve(__dirname, 'templates/plugins/ManaUiToolkit.js'),
        options
    })

    this.addPlugin({
        src: resolve(__dirname, 'templates/plugins/vuetify.js'),
        options
    })
}
