'use strict';

var ArrayUtils = function() {
    
    this.getRandom = function(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
}

module.exports = new ArrayUtils();