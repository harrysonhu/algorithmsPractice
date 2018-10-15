const shoppingOffers = function(price, special, needs) {
	return shoppingHelper(price, special, needs, 0);
}

const shoppingHelper = function(price, special, needs, position) {
	let minPrice = noOffersUsed(price, needs);
	for (let i = position; i < special.length; i++) {
		let offer = special[i];
		let temp = [];
		for (let j = 0; j < needs.length; j++) {
			if (needs[j] < offer[j]) {
				temp = null;
				break;
			}
			temp.push(needs[j] - offer[j]);			
		}
		if (temp != null) {
			minPrice = Math.min(minPrice, offer[offer.length - 1] + shoppingHelper(price, special, temp, i));
		}
	}

	return minPrice;
}

const noOffersUsed = function(price, needs) {
	let total = 0;
	for (let i = 0; i < price.length; i++) {
		total += price[i] * needs[i];
	}
	return total;
}

const test1 = shoppingOffers([2,5], [[1,2,10]], [3,2]);
console.log(test1); // 14

const test2 = shoppingOffers([2,3,4], [[1,1,0,4],[2,2,1,9]], [1,2,1]);
console.log(test2); // 11

const test3 = shoppingOffers([9,9], [[1,1,1]], [2,2]);
console.log(test3); // 2