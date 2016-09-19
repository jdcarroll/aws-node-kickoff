/**
* aws-node-kickoff - Configuration Setup
**/
module.exports = {
    server: {
        port: 80
    }, // config.server
    plugins: {
        good: { // Establish the logging with Hapi
            register: require('good'), // require the plugin
            options: { // configure the options for the plugin
                reporters: {
                    console: [{
                        module: 'good-squeeze',
                        name: 'Squeeze',
                        args: [{
                            log: '*',
                            response: '*'
                        }]
                    }, {
                        module: 'good-console'
                    }, 'stdout']
                } // config.plugins.good.options.reporters
            } // config.plugins.good.options
        }, // config.plugins.good
        inert : {
            register: require('inert')
        }
    }, // config.plugins
    routes: {
        public:{
            register: require('../routes/public.js')
        } // config.routes.public
    } // config.routes
} // config
