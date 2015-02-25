#!/usr/bin/env node

var cli = require('cli').enable('status'),
    options = cli.parse({
        iterations : ['i', 'Number of data to be generated', 'number']
    });

cli.main(function(args, options) {
    
    var Generator = require('./js/Generator/Generator');
    if (options.iterations)
    {
        this.info('Creation of ' + options.iterations + ' transactions.');
        Generator.gen(options.iterations);
    }
    this.debug('coucou');
    
})
