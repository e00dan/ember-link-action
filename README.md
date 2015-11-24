# Ember Link Action [![Build Status](https://travis-ci.org/Kuzirashi/ember-link-action.svg?branch=master)](https://travis-ci.org/Kuzirashi/ember-link-action) [![npm version](https://badge.fury.io/js/ember-link-action.svg)](https://badge.fury.io/js/ember-link-action) [![Ember Observer Score](http://emberobserver.com/badges/ember-link-action.svg)](http://emberobserver.com/addons/ember-link-action)

An Ember CLI addon. Allows to combine `{{link-to}}` helper with firing an action.

It is useful when you want to fire an action at the same time when user transitions to other route by clicking `{{link-to}}`. **It is OK for SEO solution.**

# Usage

You can pass closure action as `invokeAction` attribute of `{{link-to}}` component:

``` hbs
{{#link-to 'other-route' invokeAction=(action 'testAction')}}
  Link to other route
{{/link-to}}
```

You can also use string name instead of closure action:

``` hbs
{{#link-to 'other-route' invokeAction='testAction'}}
  Link to other route
{{/link-to}}
```

To pass parameters to action you can use:

``` hbs
{{#link-to 'other-route' invokeAction=(action 'testAction' param1 param2)}}
  Link to other route
{{/link-to}}
```

# Compatibility

Confirmed that it works with release, beta, canary Ember versions:

- 2.0.2
- 2.1.0-beta.4
- 2.2.0-canary+77f6fc86

# Installation

Run following Ember CLI command in your project directory:

``` sh
ember install ember-link-action
```

## Contributing - Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Contributing - Running

* `ember server`
* Visit your app at http://localhost:4200.

## Contributing - Running Tests

* `ember test`
* `ember test --server`

## Contributing - Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
