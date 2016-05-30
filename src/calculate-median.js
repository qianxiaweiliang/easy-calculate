		function calculate_median(array) {
			var arr1;
			if (array.length % 2 == 0) {
				arr1 = new Array(array.length / 2);
			} else {
				arr1 = new Array(array.length / 2 - 0.5);
			}
			var j = 0;
			for (var i = 1; i < array.length; i += 2) {
				arr1[j++] = array[i];
			}
			var arr2 = arr1;
			arr2.sort(compare);

			if (arr2.length % 2 == 0) {
				return (arr2[arr2.length / 2] + arr2[arr2.length / 2 - 1]) / 2;

			} else {
				return arr2[arr2.length / 2 - 0.5];
			}

		}
		function compare(a, b) {
			return b - a;
		}

		module.exports = calculate_median;