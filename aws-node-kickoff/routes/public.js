/**
* aws-node-kickoff - Host Public Files
**/
'use strict'

exports.register = function (server, options, next) {


    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: 'public'
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/bower/{param*}',
        handler: {
            directory: {
                path: 'bower_components'
            }
        }
    })

    return next();
};

exports.register.attributes = {
    name: 'public-files'
};
