rangestr.js
-------------------------------

[![][npm-badge]][npm-link]
[![][mit-badge]][mit]

Range syntax parser

## Install
``` shell
$ npm install rangestr --save
```

## Example
``` javascript
const rangestr = require('rangestr');

rangestr('abcde');
// = [ 'a', 'b', 'c', 'd', 'e' ]

rangestr('0-9'); // or rangestr('0', '9');
// = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]

rangestr('abc0-9');
// = [ 'a', 'b', 'c', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]

rangestr('a-z'); // or rangestr('a', 'z');
// = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]

rangestr('a-zA-Z0-9');
// = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]

rangestr('a-f!#$%&@-');
// = [ 'a', 'b', 'c', 'd', 'e', 'f', '!', '#', '$', '%', '&', '@', '-' ]

rangestr('あ-ん'); // or rangestr('あ', 'ん');
// = [ 'あ', 'ぃ', 'い', 'ぅ', 'う', 'ぇ', 'え', 'ぉ', 'お', 'か', 'が', 'き', 'ぎ', 'く', 'ぐ', 'け', 'げ', 'こ', 'ご', 'さ', 'ざ', 'し', 'じ', 'す', 'ず', 'せ', 'ぜ', 'そ', 'ぞ', 'た', 'だ', 'ち', 'ぢ', 'っ', 'つ', 'づ', 'て', 'で', 'と', 'ど', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ば', 'ぱ', 'ひ', 'び', 'ぴ', 'ふ', 'ぶ', 'ぷ', 'へ', 'べ', 'ぺ', 'ほ', 'ぼ', 'ぽ', 'ま', 'み', 'む', 'め', 'も', 'ゃ', 'や', 'ゅ', 'ゆ', 'ょ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'ゎ', 'わ', 'ゐ', 'ゑ', 'を', 'ん' ]

```

## On TypeScript
Type definition are bundled.
``` typescript
import rangestr from 'rangestr';
```

## License
[MIT](LICENSE)

[npm-link]:  https://www.npmjs.com/package/rangestr
[npm-badge]: https://img.shields.io/npm/v/rangestr.svg?style=flat-square
[mit]:       http://opensource.org/licenses/MIT
[mit-badge]: https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
