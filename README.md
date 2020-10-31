Ember Link Action
==============================================================================
[![Build Status](https://travis-ci.org/Kuzirashi/ember-link-action.svg?branch=master)](https://travis-ci.org/Kuzirashi/ember-link-action) [![npm version](https://badge.fury.io/js/ember-link-action.svg)](https://badge.fury.io/js/ember-link-action) [![Ember Observer Score](http://emberobserver.com/badges/ember-link-action.svg)](http://emberobserver.com/addons/ember-link-action)

Ember addon. Fire action when `LinkTo` transitions to other route. **OK for SEO solution.**

Usage
------------------------------------------------------------------------------

### Octane

You can pass an action as `@invokeAction` attribute of `LinkTo` component:

``` hbs
<LinkTo @route='cart' @invokeAction={{this.testAction}}>Cart</LinkTo>
```

``` hbs
<LinkTo @route='cart' @invokeAction={{fn this.testAction 'value1' 'value2'}}>
  Cart
</LinkTo>
```

### Classic

You can pass closure action as `invokeAction` attribute of `{{link-to}}` component:

``` hbs
{{#link-to 'cart' invokeAction=(action 'testAction')}}
  Cart
{{/link-to}}
```

To pass parameters to action you can use:

``` hbs
{{#link-to 'cart' invokeAction=(action 'testAction' param1 param2)}}
  Cart
{{/link-to}}
```

Compatibility
------------------------------------------------------------------------------


* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above

This addon supports [Embroider](https://github.com/embroider-build/embroider/).

Most recent versions work with `>= 3.0` versions of Ember. For more info check test scenarios in `travis.yml`.

For `>= 2.0.0 AND < 3` compatibility use tested version: `1.0.0`.

For `1.13.13` compatibility use tested version: `0.0.37`.

Installation
------------------------------------------------------------------------------

```
ember install ember-link-action
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
