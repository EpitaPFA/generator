'use strict';

var _cli = require('cli');

function ProgressPrinter(title, iterations) {
    this.percent = 0;
    this.percentStep = 10;
    this.max = 100;
    this.iterationsMax = iterations;
    this.currentIt = 0;
    this.title = title;
}

ProgressPrinter.prototype.print = function(currentIt) {
   
    this.currentIt += 1;
    
    
    this.percent = 100 * this.currentIt / this.iterationsMax;
    
    _cli.debug(this.percent + "%");
    if (this.percent >= this.percentStep)
    {
        _cli.info(this.title + " : " + this.percentStep + "%");

        this.percentStep = this.percentStep + 10;
    }
    
    
}

module.exports = ProgressPrinter;