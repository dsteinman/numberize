Numberize
==========

Numberize is a fork of [numerizerJS](https://github.com/bolgovr/numerizerJS) with only minor
modifications, and may or may not have additional changes in the future depending on what is required
by the [Bumblebee](https://github.com/jaxcore/bumblebee) voice app framework.

[numerizerJS](https://github.com/bolgovr/numerizerJS) is library for parsing numbers in natural language from strings.
Port of [Chronic's](https://github.com/mojombo/chronic) numerizer lib to JavaScript

## Installation

```
npm install numberize
```

## Usage

```javascript
 var numberize = require('numberize');
 numerizer('forty two'); //'42', library returns String, so do not forget to parseInt or parseFloat it
```

## Test

```
npm test
```

## Licence (MIT)

Copyright (C) 2013 Bolgov Roman

Copyright (C) 2020 Dan Steinman

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
