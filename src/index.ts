function rangestr(source: string): string[];
function rangestr(begin: string, end: string): string[];

function rangestr(x: string, y?: string): string[] {
	if (typeof y === 'undefined') {
		return parse(x);
	} else {
		return iterate(x, y);
	}
}

function parse(source: string): string[] {
	const chars: string[] = [];

	for (let i = 0; i < source.length; i++) {
		if (source[i] === '\\') {
			chars.push(source[i + 1]);
			i++;
		} else if (source[i + 1] === '-' && source[i + 2] !== undefined) {
			const begin = source[i];
			const end = source[i + 2];
			Array.prototype.push.apply(chars, iterate(begin, end));
			i += 2;
		} else {
			chars.push(source[i]);
		}
	}

	return chars;
}

function iterate(begin: string, end: string): string[] {
	const chars: string[] = [];

	const beginCharCode = begin.charCodeAt(0);
	const endCharCode = end.charCodeAt(0);
	const order = beginCharCode < endCharCode;
	const min = order ? beginCharCode : endCharCode;
	const max = order ? endCharCode : beginCharCode;

	for (let i = min; i <= max; i++) {
		chars.push(String.fromCharCode(i));
	}

	return order ? chars : chars.reverse();
}

Object.defineProperty(rangestr, "default", { value: rangestr });

module.exports = rangestr;

export default rangestr;
