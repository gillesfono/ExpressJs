var assert = require('chai').assert;

var result = require('../public/index1') 

describe('result', function(){
    it('should return type number', function(){
        assert.typeOf(result,'number');
    })
})