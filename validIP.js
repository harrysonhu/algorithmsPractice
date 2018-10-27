const validIp = ip => {
	if (isValidIpv4(ip)) {
		return 'IPv4';
	} else if (isValidIpv6(ip)) {
		return 'IPv6';
	} else {
		return 'Neither';
	}
};

const isValidIpv4 = ip => {
	let parts = ip.split('.');
	if (parts.length != 4) {
		return false;
	}
	let decimals = ip.split('').filter(char => char == '.').length;
	if (decimals != 3) {
		return false;
	}
	let regex = new RegExp('^\\d+$');
	for (let i = 0; i < parts.length; i++) {
		if (!parts[i].match(regex)) {
			return false;
		}
		if (parts[i].length > 3) {
			return false;
		}
		if (parts[i].length >= 2 && parts[i].charAt(0) == '0') {
			return false;
		}
		if (parts[i] > 255 || parts[i] < 0) {
			return false;
		}
	}
	return true;
};

const isValidIpv6 = ip => {
	let colons = ip.split('').filter(char => char == ':').length;
	if (colons != 7) {
		return false;
	}
	let parts = ip.split(':');
	if (parts.length != 8) {
		return false;
	}

	let regex = new RegExp('^[0-9A-Fa-f]+$');
	for (let i = 0; i < parts.length; i++) {
		if (parts[i].length > 4 || !parts[i].match(regex)) {
			return false;
		}
	}
	return true;
};

const test1 = validIp('172.192.0.0');
console.log(test1); // IPv4

const test2 = validIp('2001:0db8:85a3:0000:0000:8a2e:0370:7334');
console.log(test2); // IPv6

const test3 = validIp('2001:0db8:85a3::8A2E:0370:7334');
console.log(test3); // neither

const test4 = validIp('02001:0db8:85a3:0000:0000:8a2e:0370:7334');
console.log(test4); // neither