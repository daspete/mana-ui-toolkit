const { resolve } = require('path')

module.exports = async function module(moduleOptions) {
    const options = Object.assign({}, moduleOptions)

    this.options.css.push(resolve(__dirname, 'assets/ui/ui.styl'))
    this.options.head.link.push({
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' 
    })

    this.addPlugin({
        src: resolve(__dirname, 'templates/plugins/vuetify.js'),
        options
    })

    this.addTemplate({
        src: resolve(__dirname, 'components/Admin.vue'),
        fileName: 'components/ui/Admin.vue',
        options
    })

    this.addTemplate({
        src: resolve(__dirname, 'assets/ui/ui.styl'),
        fileName: 'assets/ui/ui.styl',
        options
    })

    this.addPlugin({
        src: resolve(__dirname, 'templates/plugins/ManaUiToolkit.js'),
        options
    })


}
