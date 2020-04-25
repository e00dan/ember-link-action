Ember Link Action
==============================================================================
[![Build Status](https://travis-ci.org/Kuzirashi/ember-link-action.svg?branch=master)](https://travis-ci.org/Kuzirashi/ember-link-action) [![npm version](https://badge.fury.io/js/ember-link-action.svg)](https://badge.fury.io/js/ember-link-action) [![Ember Observer Score](http://emberobserver.com/badges/ember-link-action.svg)](http://emberobserver.com/addons/ember-link-action)

An Ember CLI addon. Allows to combine `{{link-to}}` helper with firing an action.

It is useful when you want to fire an action at the same time when user transitions to other route by clicking `{{link-to}}`. **It is OK for SEO solution.**

Usage
------------------------------------------------------------------------------

You can pass closure action as `invokeAction` attribute of `{{link-to}}` component:

``` hbs
{{#link-to 'other-route' invokeAction=(action 'testAction')}}
  Link to other route
{{/link-to}}
```

To pass parameters to action you can use:

``` hbs
{{#link-to 'other-route' invokeAction=(action 'testAction' param1 param2)}}
  Link to other route
{{/link-to}}
```

Compatibility
------------------------------------------------------------------------------


* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Latest addon version works with `>= 3.0` versions of Ember. For more info check test scenarios on CI or `travis.yml`.

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
