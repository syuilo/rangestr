function rangestr(source: string): string[] {
	const chars: string[] = [];

	for (let i = 0; i < source.length; i++) {
		if (source[i] === '\\') {
			chars.push(source[i + 1]);
			i++;
		} else if (source[i + 1] === '-' && source[i + 2] !== undefined) {
			const begin = source[i];
			const end = source[i + 2];
			const beginCharCode = begin.charCodeAt(0);
			const endCharCode = end.charCodeAt(0);
			const minCharCode = beginCharCode < endCharCode ? beginCharCode : endCharCode;
			const maxCharCode = beginCharCode < endCharCode ? endCharCode : beginCharCode;

			for (let c = minCharCode; c <= maxCharCode; c++) {
				chars.push(String.fromCharCode(c));
			}

			i += 2;
		} else {
			chars.push(source[i]);
		}
	}

	return chars;
}

Object.defineProperty(rangestr, "default", { value: rangestr });

module.exports = rangestr;

export default rangestr;
