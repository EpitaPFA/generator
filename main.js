#!/usr/bin/env node

var cli = require('cli').enable('status'),
    options = cli.parse({
        iterations : ['i', 'Number of data to generate', 'number'],
		bankNumber : ['b', 'Number of bank to generate', 'number'],
		accountNumber : ['a', 'Number of bank account (buyers) to generate', 'number'],
		cities : ['c', 'Number of city to use', "number"],
		merchants : ['m', 'Number of merchants to generate', "number"],
		days : ['d', 'Number of days covering the irations', "number"]
    });

cli.main(function(args, options) {
    var self = this;
    var Generator = require('./js/Generator/Generator');
    if (options.iterations)
    {
        this.info('Creation of ' + options.iterations + ' transactions.');
        var transactions = Generator.gen(options);
		//this.info(JSON.stringify(transactions));
		var fs = require('fs');
		var mkdirp = require('mkdirp');
		
		
		mkdirp('output', function(err) {
			self.debug("Cannot create directory or directory exists.");
		});
		
		fs.unlink("output/transactions.json", JSON.stringify(transactions), function(err) {
			if(err) {
				self.error(err);
			} else {
				self.info("output/transactions.json has been deeleteed!");
        	}
		});
			
		fs.writeFile("output/transactions.json", JSON.stringify(transactions), function(err) {
			if(err) {
				self.error(err);
			} else {
				self.info("output/transactions.json saved");
			}
    	}); 
    }
})
