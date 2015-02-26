#!/usr/bin/env node

var cli = require('cli').enable('status'),
    options = cli.parse({
        iterations : ['i', 'Number of data to generate', 'number'],
		bankNumber : ['b', 'Number of bank to generate', 'number'],
		accountNumber : ['a', 'Number of bank account (buyers) to generate', 'number'],
		cities : ['c', 'Number of city to use', "number"],
		merchants : ['m', 'Number of merchants to generate', "number"]
    });

cli.main(function(args, options) {
    
    var Generator = require('./js/Generator/Generator');
    if (options.iterations)
    {
        this.info('Creation of ' + options.iterations + ' transactions.');
        Generator.gen(options);
    }
})
