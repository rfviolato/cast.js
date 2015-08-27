# cast.js

Javascript simple events system inspired on angular.js' one.

## Installation

Install cast.js via node package manager (npm):

```
$ npm install cast.js --save-dev
```

Import the file into your project:

```html
<script src="node_modules/cast.js/dest/cast.min.js"></script>
```

## Usage

#### Subscribe events

Use the method `$on` to subscribe an event with a given name:

```javascript
cast.$on('my-custom-event', function(data) {
  console.log('Event fired!');
  console.log('data:', data);
});
```

And use the method `$broadcast` to fire events with a given name. You can also send data:

```javascript
var data = {
  info: 'Some awesome info here'
};

cast.$broadcast('my-custom-event', data);
```

#### Unsubscribing events

Unsubscribing from events works just like the angular.js' way, the `$on` method will return the respective unsubscribe function for that event.

```javascript
var unsubscribe = cast.$on('my-custom-event', callbackFn);

unsubscribe(); //event is now unsubscribed. eezy peezy
```

And that's it!

[Rafael Violato](http://rviolato.com)
