# vue-simple-form
[![Build Status](https://travis-ci.org/eriktisme/vue-simple-form.svg?branch=master)](https://travis-ci.org/eriktisme/vue-simple-form) [![npm version](https://badge.fury.io/js/%40evandam93%2Fvue-simple-form.svg)](https://badge.fury.io/js/%40evandam93%2Fvue-simple-form)

Simple package to handle forms in Vue.js. Inspired by [vform](https://github.com/cretueusebiu/vform).

## Installation

You can install the package via yarn:

```bash
yarn add @evandam93/vue-simple-form
```
## Usage

```javascript
import { reactive } from "vue";
import { Form } from "vue-simple-form";

export default {
  setup() {
    const state = reactive({
      form: new Form({
        name: "John Doe"
      })
    });
    
    // ...
  }
}
```

### Changelog
Please see [changelog](CHANGELOG.md) for more information on what has changed recently.

## License
The MIT License (MIT). Please see [License File](LICENSE) for more information.
