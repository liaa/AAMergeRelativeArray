var chai = require('chai');
var assert = chai.assert;
var mergeRelativeArray = require('../js/mergeRelativeArray.js');

describe('mergeRelativeArray',function(){
	// TODO: input paramters test

	it('should return an array',function(){
		var result = mergeRelativeArray([[1]],1);
		assert.isArray(result);
	});
	it('should return [[1,3,2]] if sourceArray is [[1,2],[1,3]',function(){
		var sourceArray = [[1,2],[1,3]];
		var result = mergeRelativeArray(sourceArray,1);
		assert.deepEqual([[1,2,3]], result);
	});
	it('shuold return [[1,2,3],[5]] if sourceArray is [[1,2],[5],[1,3]]',function(){
		var sourceArray = [[1,2],[5],[1,3]];
		var result = mergeRelativeArray(sourceArray,1);
		assert.deepEqual(result,[[1,2,3],[5]]);
	});
	it('shuold return [[1,2,3,5]] if sourceArray is [[1,2],[5],[1,3],[1,5]]',function(){
		var sourceArray = [[1,2],[5],[1,3],[1,5]];
		var result = mergeRelativeArray(sourceArray,1);
		assert.deepEqual(result,[[1,2,3,5]]);
	});

});