Array.prototype.unique = function() {
	var a = this.concat();
	for(var i=0; i<a.length; ++i) {
		for(var j=i+1; j<a.length; ++j) {
			if(a[i] === a[j])
				a.splice(j--, 1);
		}
	}
	return a;
};

function mergeRelativeArray(arr,mergePoint) {
	if (arr.length == 1 || mergePoint == arr.length) {
		return arr;
	}
	var p = mergePoint;
	while (p > 0) {
		var arr1 = arr[mergePoint];
		var arr2 = arr[p - 1];
		var unique = arr2.concat(arr1).unique();
		if (unique.length < (arr1.length + arr2.length)) {
			arr.splice(mergePoint, 1);
			arr[p-1] = unique;
			return mergeRelativeArray(arr, 1);
		} else {
			p--;
		}
	}
	return mergeRelativeArray(arr, mergePoint + 1);
}

module.exports = mergeRelativeArray;
