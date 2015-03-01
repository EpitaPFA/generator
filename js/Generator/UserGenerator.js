'use srict'

var User = require('../Models/User.js');

var UserGenerator = function() {
    var self = this;
    this.gen = function(iban, creditCard) {
        var user = new User();
        user.account = iban;
        user.creditCard = creditCard;
        return user;
    }
    
    this.genBatch = function(ibans, creditCards) {
        var users = [];
        for (var i = 0; i < ibans.length; i++) {
            users.push(self.gen(ibans[i], creditCards[i]));
        }
        return users;
    }
}


module.exports = new UserGenerator();