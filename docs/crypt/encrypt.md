# encrypt(text)

##### [source](../../lib/crypto/encrypt.js)

`text` - Characters to encrypt

```javascript
const crypt = require('functility').crypt;

crypt.encrypt('toasterOven@!#_');

# Returns something similar:
# {
#   iv: 'c1e60cee7a3ad7901930112aedc4d077',
#   encryptedData: 'd80871bdf6e34a965e2f842a569f765a',
# }
```
