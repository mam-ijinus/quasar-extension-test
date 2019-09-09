## Quasar App Extension MyComponent

This is an example of a Quasar App Extension that injects a custom component into the hosting Quasar app.

Take into the account that for this example, the `ext-id` of this App Extension is `my-component` (this can be anything, and please do change it for a more appropriate name for your App Extension).

### fetch last version
`yarn upgrade quasar-app-extension-my-component`

### To Fix

after fetch last version when we do `quasar dev`:

```bash
This dependency was not found:

* jquery in ./node_modules/quasar-app-extension-my-component/src/boot/register-my-component.js

To install it, you can run: npm install --save jquery

```
