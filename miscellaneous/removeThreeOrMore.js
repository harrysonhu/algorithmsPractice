const removeThreeOrMore = s => {
	if (s == null || s.length < 3) {
  	return s;
  }
  let i = 0;
  const chars = s.split('');
  while (i < chars.length) {
  	if (chars.length < 3) {
    	break;
    }
  	if (chars[i] != chars[i + 1]) {
    	i++;
    } else {
    	let j = i;
      while (chars[j] == chars[j + 1]) {
      	j++;
      }
      if (j - i >= 2) {
      	chars.splice(i, (j - i) + 1);
        i = 0;
      }
      i++;
    }
  }
  return chars.join('');
}

console.log(removeThreeOrMore('ABBAA'));
console.log(removeThreeOrMore('ABCCCCBBA'));
console.log(removeThreeOrMore('ABBBAAA'));
console.log(removeThreeOrMore(''));
